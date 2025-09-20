import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dreamhouse Baradero",
  description:
    "Descubre tu escape perfecto en DreamHouse Baradero. Casa quinta de lujo para alquiler vacacional en Baradero, Buenos Aires, Argentina. Reserva ahora tu estadía ideal.",
  keywords: [
    "Dreamhouse",
    "Dream House",
    "Baradero",
    "pueblo mas antiguo Buenos Aires",
    "casa quinta",
    "alquiler vacacional",
    "Buenos Aires",
    "Argentina",
    "pesca",
    "tranquilidad",
    "paz",
    "pueblo",
    "casa de campo",
    "fin de semana",
    "turismo Baradero",
  ],
  authors: [{ name: "Dreamhouse Baradero" }],
  creator: "Dreamhouse Baradero",
  publisher: "Dreamhouse Baradero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.dreamhousebaradero.com",
    siteName: "Dreamhouse Baradero",
    title: "Dreamhouse Baradero - Casa de Alquiler Vacacional",
    description:
      "Casa quinta de lujo para alquiler vacacional en Baradero, Buenos Aires, Argentina.",
    images: [
      {
        url: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318383/WhatsApp_Image_2025-09-08_at_22.06.11_2_xmyrtr.jpg",
        width: 1200,
        height: 630,
        alt: "Dreamhouse Baradero - Casa de Alquiler Vacacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dreamhouse Baradero - Casa de Alquiler Vacacional",
    description:
      "Casa quinta de lujo para alquiler vacacional en Baradero, Buenos Aires, Argentina.",
    images: [
      "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318385/WhatsApp_Image_2025-09-08_at_22.06.13_1_zi0lt9.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.dreamhousebaradero.com",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="geo.region" content="AR-BA" />
        <meta
          name="geo.placename"
          content="Baradero, Buenos Aires, Argentina"
        />
        <meta name="geo.position" content="-33.8,-59.5" />
        <meta name="ICBM" content="-33.8,-59.5" />
        <link rel="canonical" href="https://www.dreamhousebaradero.com" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758332216/dreamhouse.002.b16_ca7qgv.ico"
          sizes="any"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758332216/dreamhouse.002.b16_ca7qgv.ico"
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758332216/dreamhouse.002.b16_ca7qgv.ico"
        />
      </head>
      <body
        className={`font-sans overflow-x-hidden max-w-full ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
