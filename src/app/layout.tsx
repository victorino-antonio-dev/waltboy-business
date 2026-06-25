import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL("https://waltboybusiness.com"),
  title: "WaltBoy Business | Assistência técnica, websites e design",
  description:
    "Assistência técnica informática, suporte remoto, websites profissionais e design gráfico para pequenos negócios na Grande Lisboa e arredores.",
  keywords: [
    "WaltBoy Business",
    "Victorino António",
    "assistência técnica informática",
    "websites profissionais",
    "design gráfico",
    "suporte remoto",
    "Grande Lisboa"
  ],
  authors: [{ name: "Victorino António" }],
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" }
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-touch-icon.png?v=3"
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "WaltBoy Business",
    description:
      "Tecnologia, design e suporte para pequenos negócios.",
    type: "website",
    locale: "pt_PT",
    images: ["/assets/wb-icon.png"]
  },
  alternates: {
    canonical: "https://waltboybusiness.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        ) : null}
      </body>
    </html>
  );
}
