import sgMail from "@sendgrid/mail";

function getApiKey(): string {
  return (process.env.SENDGRID_API_KEY || process.env.SG_API_KEY || "").trim();
}

const SENDGRID_EMAIL = "noreply@muenzmedia.de";

// --- Master Leasing ---
const CLIENT_BRAND = "Master Leasing";
const CLIENT_REPLY_TO = "anfrage@master-leasing.com";

// --- Global (nie ändern) ---
const INTERNAL_BRAND = "Muenz Media";

interface SendMailOptions {
  to: string[];
  bcc?: string[];
  subject: string;
  html: string;
  replyTo?: string;
}

// An Endkunden: Absender = Master Leasing
export async function sendCustomerMail({
  to,
  subject,
  html,
  replyTo,
}: Omit<SendMailOptions, "bcc">) {
  const key = getApiKey();
  if (!key) throw new Error("SendGrid API Key missing");
  sgMail.setApiKey(key);
  const [response] = await sgMail.send({
    to,
    from: { name: CLIENT_BRAND, email: SENDGRID_EMAIL },
    replyTo: replyTo || CLIENT_REPLY_TO,
    subject,
    html,
  });
  return response;
}

// An Team: Absender = Muenz Media
export async function sendTeamMail({
  to,
  bcc,
  subject,
  html,
  replyTo,
}: SendMailOptions) {
  const key = getApiKey();
  if (!key) throw new Error("SendGrid API Key missing");
  sgMail.setApiKey(key);
  const [response] = await sgMail.send({
    to,
    from: { name: INTERNAL_BRAND, email: SENDGRID_EMAIL },
    subject,
    html,
    ...(bcc?.length ? { bcc } : {}),
    ...(replyTo ? { replyTo } : {}),
  });
  return response;
}
