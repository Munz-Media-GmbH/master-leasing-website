/**
 * MuenzMediaBlock
 *
 * Webdesign & Hosting credit block in Münz Media brand design.
 * Used in impressum and footer.
 *
 * UTM tracking: utm_source = client project slug (e.g. "master-leasing").
 */

interface Props {
  /** e.g. "master-leasing" */
  utmSource: string;
  /** defaults to "impressum" — use "footer" for footer placement */
  utmMedium?: "impressum" | "footer";
}

export default function MuenzMediaBlock({
  utmSource,
  utmMedium = "impressum",
}: Props) {
  const href = `https://muenzmedia.de?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=webdesign-credit`;

  return (
    <div className="mm-credit-block">
      <svg
        className="mm-credit-bg"
        viewBox="0 0 526.9 368.93"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          y="289.22" width="526.86" height="79.7"
          fill="none" stroke="#BCA183" strokeWidth="4"
        />
        <polygon
          points="526.9 0 526.9 249.71 475.2 249.71 475.2 130.93 351.99 249.7 279.27 249.7 526.9 0"
          fill="none" stroke="#BCA183" strokeWidth="4" strokeLinejoin="miter"
        />
        <polygon
          points=".05 0 .05 249.7 51.75 249.7 51.75 130.92 174.96 249.7 247.68 249.7 .05 0"
          fill="none" stroke="#BCA183" strokeWidth="4" strokeLinejoin="miter"
        />
      </svg>

      <div className="mm-credit-content">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/M-logo-muenzmedia_gold.svg"
          alt="Münz Media"
          className="mm-credit-logo"
          width={40}
          height={28}
        />
        <div>
          <div className="mm-credit-label">Webdesign &amp; Hosting</div>
          <div className="mm-credit-name">Münz Media GmbH</div>
        </div>
      </div>

      <div className="mm-credit-cta-wrap">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mm-credit-cta"
        >
          muenzmedia.de ↗
        </a>
      </div>
    </div>
  );
}
