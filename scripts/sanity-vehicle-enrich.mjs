#!/usr/bin/env node
/**
 * Reichert bestehende Sanity-Vehicles um die neuen Filter-Felder an
 * (typ, motor, leistung, verbrauch, farbe, subtitel) — basierend auf den
 * ursprünglich hardcoded Daten aus components/VehiclesSection.tsx.
 *
 *   node scripts/sanity-vehicle-enrich.mjs            → Dry-run
 *   node scripts/sanity-vehicle-enrich.mjs --apply    → Schreibt nach Sanity
 *
 * .env.local braucht: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 * SANITY_API_TOKEN (Editor-Permission).
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf-8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    if (!process.env[m[1]]) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("✗ NEXT_PUBLIC_SANITY_PROJECT_ID + SANITY_API_TOKEN benötigt.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-04-01",
  token,
  useCdn: false,
});

// Slug → Filter-Daten (aus altem staticVehicles-Array)
const ENRICHMENT = {
  "vw-caddy-tdi-maxi-led": {
    subtitel: "BEH-FRTSCHB · TEMPO · LED",
    typ: "nutzfahrzeug",
    motor: "diesel",
    leistung: 122,
    verbrauch: "6,2",
    farbe: "Weiß",
  },
  "vw-polo-tsi-life-led-virtual-navi": {
    subtitel: "LED · VIRTUAL · NAVI · PARKLENK",
    typ: "pkw",
    motor: "benzin",
    leistung: 95,
    verbrauch: "5,8",
    farbe: "Grau",
  },
  "vw-taigo-tsi-goal-pdc-3-2": {
    subtitel: "PDC · 3-2",
    typ: "pkw",
    motor: "benzin",
    leistung: 110,
    verbrauch: "6,0",
    farbe: "Blau",
  },
  "vw-crafter-35-kasten-hd-lang": {
    subtitel: "LR · 3-Sitzer · APP-CONNECT",
    typ: "lkw",
    motor: "diesel",
    leistung: 140,
    verbrauch: "8,5",
    farbe: "Weiß",
  },
  "vw-t7-kasten-lr-acc-led-klima": {
    subtitel: "LR · ACC · LED · KLIMA · LANG",
    typ: "nutzfahrzeug",
    motor: "diesel",
    leistung: 150,
    verbrauch: "7,8",
    farbe: "Silber",
  },
  "vw-golf-tsi-life-led-acc-navi": {
    subtitel: "LED · ACC · NAVI · APP-CONN",
    typ: "pkw",
    motor: "benzin",
    leistung: 110,
    verbrauch: "5,9",
    farbe: "Schwarz",
  },
};

const apply = process.argv.includes("--apply");

(async () => {
  const vehicles = await client.fetch(
    `*[_type == "vehicle"] { _id, title, "slug": slug.current, subtitel, typ, motor, leistung, verbrauch, farbe }`,
  );

  console.log(`\nGefunden: ${vehicles.length} Vehicles in Sanity (${projectId}/${dataset})\n`);

  const updates = [];
  for (const v of vehicles) {
    const enrich = ENRICHMENT[v.slug];
    if (!enrich) {
      console.log(`⚠️  ${v.slug}: kein Enrichment-Mapping`);
      continue;
    }
    const patch = {};
    for (const [k, val] of Object.entries(enrich)) {
      if (v[k] === undefined || v[k] === null || v[k] === "") patch[k] = val;
    }
    if (Object.keys(patch).length === 0) {
      console.log(`✓  ${v.slug}: alle Felder bereits gesetzt — überspringe`);
      continue;
    }
    updates.push({ id: v._id, slug: v.slug, patch });
    console.log(`→  ${v.slug}: setze ${Object.keys(patch).join(", ")}`);
  }

  if (!apply) {
    console.log(`\nDry-run. Mit --apply werden ${updates.length} Vehicles gepatched.`);
    return;
  }

  console.log(`\n=== Apply (${updates.length}) ===`);
  for (const u of updates) {
    process.stdout.write(`  ${u.slug} … `);
    await client.patch(u.id).set(u.patch).commit();
    process.stdout.write("ok\n");
  }
  console.log("Fertig.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
