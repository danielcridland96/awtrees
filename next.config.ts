import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  // unsafe-eval needed in dev for React error overlays; unsafe-inline for Next.js hydration chunks
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  // unsafe-inline required for Tailwind v4 utility classes injected at runtime
  "style-src 'self' 'unsafe-inline'",
  // next/font/google self-hosts fonts — no external font origin needed
  "font-src 'self'",
  // next/image generates blob: URLs; data: for inline SVG backgrounds
  "img-src 'self' blob: data:",
  // Server Actions POST to same origin; no external connect needed
  "connect-src 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Clickjacking protection (redundant with frame-ancestors but improves older browser support)
  { key: "X-Frame-Options", value: "DENY" },
  // Block MIME-type sniffing attacks
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send origin on cross-origin requests; suppress full referrer path
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Force HTTPS for 2 years, include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Disable unused browser APIs to reduce attack surface
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // Allow DNS prefetch for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
