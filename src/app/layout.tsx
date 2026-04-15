import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hubigroup.com"),
  title: {
    default: "Hubi Group — We build your dream team",
    template: "%s · Hubi Group",
  },
  description:
    "Hubi Group identifies, selects and attracts specialized talent in the pharma industry across Latin America. Executive search, staff augmentation, and recruiting services.",
  keywords: [
    "pharma recruiting",
    "Latin America talent",
    "executive search",
    "staff augmentation",
    "Hubi Group",
    "headhunting pharma",
  ],
  openGraph: {
    title: "Hubi Group — We build your dream team",
    description:
      "Specialized talent in pharma across Latin America. Executive search, staff augmentation, recruiter services.",
    type: "website",
    url: "https://hubigroup.com",
    siteName: "Hubi Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hubi Group — We build your dream team",
    description: "Specialized talent in pharma across Latin America.",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/Iso-principal-perfil-redes-sociales.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
