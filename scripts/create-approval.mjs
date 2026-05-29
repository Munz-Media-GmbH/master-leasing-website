#!/usr/bin/env node
/**
 * Sprint 88: CLI um aus jedem Kunden-Repo eine Freigabe zu triggern.
 *
 * Wird als `scripts/create-approval.mjs` ins jeweilige Kunden-Repo kopiert
 * (CLIENT_ID anpassen).
 *
 * Verwendung im Chat des Kunden-Repos:
 *   "bitte die Seite zur Freigabe schicken — Reviewer max@kunde.de, Titel Startseite v2, URL https://preview..."
 *
 * Claude führt dann aus:
 *   node scripts/create-approval.mjs --title "Startseite v2" \
 *     --url "https://engemann-spedition-git-redesign.vercel.app/" \
 *     --reviewer "max@kunde.de" \
 *     --name "Max Mustermann"
 */
import { config } from "dotenv";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "..", ".env.local") });

const CLIENT_ID = "master-leasing";
const MM_API_URL =
  process.env.MM_APPROVAL_API_URL ?? "https://base.muenzmedia.de/api/freigabe/create";

const args = parseArgs(process.argv.slice(2));
const apiKey = process.env.MM_APPROVAL_API_KEY;

if (!apiKey) {
  console.error("❌ MM_APPROVAL_API_KEY fehlt in .env.local");
  process.exit(1);
}
if (!args.title || !args.url || !args.reviewer) {
  console.error(
    `❌ Usage:
  node scripts/create-approval.mjs --title "..." --url "https://..." --reviewer "max@kunde.de" [--name "Max"] [--notes "intern"]`,
  );
  process.exit(1);
}

const res = await fetch(MM_API_URL, {
  method: "POST",
  headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    clientId: CLIENT_ID,
    pageTitle: args.title,
    previewUrl: args.url,
    reviewerEmail: args.reviewer,
    reviewerName: args.name ?? undefined,
    internalNotes: args.notes ?? undefined,
    sendEmail: true,
  }),
});

const json = await res.json().catch(() => ({}));
if (!res.ok || !json.ok) {
  console.error(`❌ Fehler (${res.status}):`, json.error ?? json);
  process.exit(1);
}
console.log("✓ Freigabe-Anfrage angelegt + Mail verschickt");
console.log(`   ID:           ${json.approvalId}`);
console.log(`   Reviewer-URL: ${json.reviewerUrl}`);
console.log(`   Email sent:   ${json.emailSent ? "ja" : "NEIN — " + (json.emailError ?? "?")}`);
console.log(`   Im Portal:    https://base.muenzmedia.de/portal-v5/${CLIENT_ID}/freigaben`);

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith("--")) {
        out[key] = next;
        i++;
      } else {
        out[key] = true;
      }
    }
  }
  return out;
}
