import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactCompiler: true,

  // Allow preview tool origin for local dev
  allowedDevOrigins: ["127.0.0.1"],


  // Kompression aktivieren
  compress: true,

  images: {
    // WebP + AVIF auto-conversion
    formats: ["image/avif", "image/webp"],

    // Breakpoints für srcset
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Sanity CDN erlauben
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://base.muenzmedia.de https://cloud.ccm19.de https://www.googletagmanager.com https://www.googleadservices.com https://www.google.com https://googleads.g.doubleclick.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cloud.ccm19.de",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://cdn.sanity.io https:",
              "connect-src 'self' https://base.muenzmedia.de https://cloud.ccm19.de https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://*.api.sanity.io wss://*.api.sanity.io https://cdn.sanity.io",
              "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://*.doubleclick.net",
              "media-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/leasing-ohne-schufa",
        destination: "/geraeteleasing",
        permanent: true,
      },
      {
        source: "/leasing-ohne-schufa/:path*",
        destination: "/geraeteleasing",
        permanent: true,
      },
      // Backlinks/Wunsch-URLs (Gregor mailt /sale-and-leaseback-2)
      // → auf bestehenden deutschen Slug umleiten.
      {
        source: "/sale-and-leaseback-2",
        destination: "/sale-und-leaseback",
        permanent: true,
      },
      {
        source: "/sale-and-leaseback",
        destination: "/sale-und-leaseback",
        permanent: true,
      },
      {
        source: "/sale-and-leaseback/:path*",
        destination: "/sale-und-leaseback",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
