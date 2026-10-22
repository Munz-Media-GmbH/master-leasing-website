import type { MetadataRoute } from "next";
import { articles } from "@/lib/ratgeber";
import { getAllVehicleSlugs } from "@/lib/sanity";

const BASE = "https://master-leasing.com";

// Stand der letzten inhaltlichen Änderung – bei Content-Updates anpassen.
// (Nicht new Date(): ein lastmod, der sich bei jedem Abruf ändert, ignoriert Google.)
const UPDATED = new Date("2026-10-22");

// Nur indexierbare Seiten. Impressum, Datenschutz und AGB sind noindex → nicht in die Sitemap.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: UPDATED, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/auto-leasen-trotz-negativer-schufa`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/sale-und-leaseback`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fahrzeuge`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/geraeteleasing`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/landmaschinen-leasing`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/traktor-leasing`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ratgeber`, lastModified: UPDATED, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/ueberuns`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/kontakt`, lastModified: UPDATED, changeFrequency: "monthly", priority: 0.6 },
  ];

  const ratgeber: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/ratgeber/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const vehicles: MetadataRoute.Sitemap = (await getAllVehicleSlugs()).map((slug) => ({
    url: `${BASE}/fahrzeuge/${slug}`,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...pages, ...ratgeber, ...vehicles];
}
