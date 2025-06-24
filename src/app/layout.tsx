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
  title: "DOOD'INK - Salon de tatouage privé à Falleron (Vendée)",
  description: "DOOD'INK, salon de tatouage privé à Falleron (Vendée). Spécialités : ornemental, floral, cartoon, lettrage, flash, projet perso. Contactez-nous pour réaliser votre projet tattoo dans un cadre professionnel et convivial.",
  keywords: [
    "tatouage",
    "tatoueur",
    "salon tatouage",
    "tattoo",
    "tattoo artist",
    "Falleron",
    "Vendée",
    "ornemental",
    "floral",
    "cartoon",
    "lettrage",
    "flash tattoo",
    "projet perso",
    "DOOD'INK"
  ],
  openGraph: {
    title: "DOOD'INK - Salon de tatouage privé à Falleron (Vendée)",
    description: "Tatouages ornementaux, floraux, cartoon, lettrage, flash et projets personnalisés à Falleron. Contactez DOOD'INK pour un tattoo unique !",
    url: "https://doodink.vercel.app/",
    type: "website",
    images: [
      {
        url: "/logo-doodink.png",
        width: 320,
        height: 320,
        alt: "Logo DOOD'INK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DOOD'INK - Salon de tatouage privé à Falleron (Vendée)",
    description: "Tatouages ornementaux, floraux, cartoon, lettrage, flash et projets personnalisés à Falleron. Contactez DOOD'INK pour un tattoo unique !",
    images: [
      "/logo-doodink.png"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
