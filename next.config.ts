import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
