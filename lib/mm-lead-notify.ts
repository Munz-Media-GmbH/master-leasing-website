/**
 * Sprint 81: Zentraler Lead-Versand via Münz-Media-API.
 * Doku: https://github.com/Munz-Media-GmbH/muenz-media-website-website/blob/main/docs/LEAD-API-CLIENT-INTEGRATION.md
 */
const MM_API_URL =
  process.env.MM_LEAD_API_URL ?? "https://base.muenzmedia.de/api/lead-notify";

const CLIENT_ID = "master-leasing";

export type LeadType =
  | "anfrage"
  | "bewerber"
  | "download"
  | "newsletter"
  | "kontakt"
  | "beratung"
  | "tracking";

export interface LeadNotifyInput {
  leadType: LeadType;
  formId?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  source?: string | null;
  data?: Record<string, unknown>;
  marketingConsent?: boolean;
  skipCustomerReply?: boolean;
}

export interface LeadNotifyResult {
  ok: boolean;
  leadId?: number | null;
  notifications?: {
    team?: { to: string | null; sent: boolean; error?: string };
    customer?: { to: string | null; sent: boolean; error?: string };
  };
  error?: string;
}

export async function notifyLeadToMM(input: LeadNotifyInput): Promise<LeadNotifyResult> {
  const apiKey = process.env.MM_LEAD_API_KEY;
  if (!apiKey) {
    console.error("[mm-lead-notify] MM_LEAD_API_KEY missing");
    return { ok: false, error: "MM_LEAD_API_KEY not configured" };
  }
  try {
    const res = await fetch(MM_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        clientId: CLIENT_ID,
        leadType: input.leadType,
        formId: input.formId ?? null,
        lead: {
          name: input.name ?? null,
          email: input.email ?? null,
          phone: input.phone ?? null,
          company: input.company ?? null,
          source: input.source ?? null,
          data: input.data ?? null,
          marketingConsent: input.marketingConsent ?? false,
        },
        skipCustomerReply: input.skipCustomerReply ?? false,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as LeadNotifyResult;
    if (!res.ok) {
      console.error("[mm-lead-notify] non-2xx:", res.status, json);
      return { ok: false, error: json.error ?? `HTTP ${res.status}` };
    }
    return json;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown";
    console.error("[mm-lead-notify] fetch failed:", msg);
    return { ok: false, error: msg };
  }
}
