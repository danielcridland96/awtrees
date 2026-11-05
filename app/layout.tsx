import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A.W. Land & Tree Care | Tree Surgeon in Berkshire",
  description:
    "NPTC qualified, fully insured tree surgeons serving Newbury and North Berkshire. Tree surgery, hedge cutting, fencing, landscaping, estate maintenance. Free quotes.",
  keywords: [
    "tree surgeon Berkshire",
    "tree surgery Newbury",
    "hedge cutting Berkshire",
    "estate maintenance Newbury",
    "NPTC qualified tree surgeon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {/* Logo watermark: fixed, centred, non-interactive, sits under the sticky header */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-40 bg-center bg-no-repeat opacity-[0.06]"
          style={{
            backgroundImage: "url(/logo.svg)",
            backgroundSize: "min(80vw, 640px)",
          }}
        />
        {children}
      </body>
    </html>
  );
}
