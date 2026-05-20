import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const token = process.env.SANITY_API_TOKEN;

export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2025-04-01",
      useCdn: !token,
      token,
    })
  : null;

const builder = projectId && client ? imageUrlBuilder(client) : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: SanityImageSource): any {
  if (!builder) return { url: () => "", width: () => ({ height: () => ({ fit: () => ({ url: () => "" }) }) }) };
  return builder.image(source);
}

export interface SanityVehicle {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImageSource;
  images?: SanityImageSource[];
  subtitel?: string;
  monthlyRate?: number;
  description?: string;
  specs?: { label: string; value: string }[];
  href?: string;
  isActive: boolean;
  order: number;
  // Filter-Felder (Listing)
  typ?: string;
  motor?: string;
  leistung?: number;
  verbrauch?: string;
  farbe?: string;
}

/**
 * Bereits aufgelöste Variante für Client-Listings —
 * Bild-URL ist string statt SanityImageSource, damit das Sanity-SDK
 * nicht ins Client-Bundle gezogen wird.
 */
export interface VehicleListItem {
  id: string;
  slug: string;
  title: string;
  subtitel: string;
  imageUrl: string;
  typ: string;
  motor: string;
  leistung: number;
  verbrauch: string;
  farbe: string;
  monthlyRate?: number;
}

const VEHICLE_LIST_FIELDS = `_id, title, slug, image, subtitel, monthlyRate, href, isActive, order, typ, motor, leistung, verbrauch, farbe`;
const VEHICLE_DETAIL_FIELDS = `_id, title, slug, image, images, subtitel, monthlyRate, description, specs, href, isActive, order, typ, motor, leistung, verbrauch, farbe`;

export async function getVehicles(): Promise<SanityVehicle[]> {
  if (!client) return [];
  try {
    return await client.fetch(
      `*[_type == "vehicle" && isActive == true] | order(order asc) { ${VEHICLE_LIST_FIELDS} }`
    );
  } catch {
    return [];
  }
}

/**
 * Liefert Fahrzeuge fürs Listing — Bild-URL vorab aufgelöst,
 * Filter-Felder mit sicheren Defaults.
 */
export async function getVehiclesForListing(): Promise<VehicleListItem[]> {
  const raw = await getVehicles();
  return raw
    .filter((v) => v.slug?.current)
    .map((v) => ({
      id: v._id,
      slug: v.slug.current,
      title: v.title ?? "Fahrzeug",
      subtitel: v.subtitel ?? "",
      imageUrl: v.image
        ? urlFor(v.image).width(800).height(600).fit("crop").url()
        : "",
      typ: v.typ ?? "pkw",
      motor: v.motor ?? "benzin",
      leistung: typeof v.leistung === "number" ? v.leistung : 0,
      verbrauch: v.verbrauch ?? "—",
      farbe: v.farbe ?? "—",
      monthlyRate: v.monthlyRate,
    }));
}

export async function getVehicleBySlug(slug: string): Promise<SanityVehicle | null> {
  if (!client) return null;
  try {
    const results = await client.fetch(
      `*[_type == "vehicle" && slug.current == $slug][0] { ${VEHICLE_DETAIL_FIELDS} }`,
      { slug }
    );
    return results ?? null;
  } catch {
    return null;
  }
}

export async function getAllVehicleSlugs(): Promise<string[]> {
  if (!client) return [];
  try {
    const results = await client.fetch(
      `*[_type == "vehicle" && isActive == true && defined(slug.current)] { "slug": slug.current }`
    );
    return results.map((r: { slug: string }) => r.slug);
  } catch {
    return [];
  }
}
