/**
 * Sprint 88: Zentraler Freigabe-Trigger via Münz-Media-API.
 *
 * Dieses Template wird in jedes Kunden-Repo als `lib/mm-approval.ts`
 * kopiert. `master-leasing` wird beim Kopieren durch die korrekte
 * mm_clients.id ersetzt (z.B. "engemann", "leckcheck").
 *
 * Doku: https://github.com/Munz-Media-GmbH/muenz-media-website-website/blob/main/docs/LEAD-API-CLIENT-INTEGRATION.md
 */
const MM_API_URL =
  process.env.MM_APPROVAL_API_URL ?? "https://base.muenzmedia.de/api/freigabe/create";

const CLIENT_ID = "master-leasing";

export interface ApprovalInput {
  pageTitle: string;
  previewUrl: string;
  reviewerEmail: string;
  reviewerName?: string;
  internalNotes?: string;
  sendEmail?: boolean;
}

export interface ApprovalResult {
  ok: boolean;
  approvalId?: string;
  token?: string;
  reviewerUrl?: string;
  emailSent?: boolean;
  emailError?: string;
  error?: string;
}

export async function requestApprovalFromMM(
  input: ApprovalInput,
): Promise<ApprovalResult> {
  const apiKey = process.env.MM_APPROVAL_API_KEY;
  if (!apiKey) {
    console.error("[mm-approval] MM_APPROVAL_API_KEY missing");
    return { ok: false, error: "MM_APPROVAL_API_KEY not configured" };
  }
  try {
    const res = await fetch(MM_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        clientId: CLIENT_ID,
        pageTitle: input.pageTitle,
        previewUrl: input.previewUrl,
        reviewerEmail: input.reviewerEmail,
        reviewerName: input.reviewerName ?? undefined,
        internalNotes: input.internalNotes ?? undefined,
        sendEmail: input.sendEmail ?? true,
      }),
    });
    const json = (await res.json().catch(() => ({}))) as ApprovalResult;
    if (!res.ok) {
      console.error("[mm-approval] non-2xx:", res.status, json);
      return { ok: false, error: json.error ?? `HTTP ${res.status}` };
    }
    return json;
  } catch (e) {
    const msg = e instanceof Error ? e.message : "unknown";
    console.error("[mm-approval] fetch failed:", msg);
    return { ok: false, error: msg };
  }
}
