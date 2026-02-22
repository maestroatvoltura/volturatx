import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voltura Digital Assets | Premium Texas Domain Acquisitions",
  description: "Voltura Digital Assets specializes in high-value, geo-targeted domain acquisitions in Texas. We acquire, develop, and liquidate premium digital real estate for the state's leading industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-cream text-navy-900`}
      >
        {children}
      </body>
    </html>
  );
}
