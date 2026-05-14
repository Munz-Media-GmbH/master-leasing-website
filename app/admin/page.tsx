// ─────────────────────────────────────────────────────────────────────────────
// /admin → Münz-Media Kundenportal
//
// Diese Route leitet den Inhaber/Geschäftsführer dieser Website zum
// zentralen Münz-Media-Kundenportal weiter (base.muenzmedia.de/portal).
// Dort wird automatisch das richtige Client-Branding (Logo, Farben, Daten)
// via profile_id-Mapping in mm_clients geladen.
// ─────────────────────────────────────────────────────────────────────────────

import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminRedirect() {
  redirect("https://base.muenzmedia.de/portal");
}
