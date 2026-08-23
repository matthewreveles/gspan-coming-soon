import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gspan.tetrahydrocanyon.com"),
  title: "G-SPAN | Web + In-Store Cannabis Advertising",
  description:
    "Plan, traffic and measure cannabis advertising campaigns across web placements and in-store screens from one G-SPAN control plane.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "G-SPAN | Web + In-Store Cannabis Advertising",
    description:
      "One campaign across web advertising, in-store screens, creative operations and performance reporting.",
    url: "/",
    siteName: "G-SPAN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
