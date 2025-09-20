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
  title: "DreamHouse Baradero",
  description:
    "Descubre tu escape perfecto en DreamHouse Baradero. Casa quinta de lujo para alquiler vacacional en Buenos Aires, Argentina.",
  generator: "v0.app",
  keywords: [
    "Baradero",
    "Buenos Aires",
    "Pesca",
    "Naturaleza",
    "Colonia Suiza",
  ],
  icons: {
    icon: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758332216/dreamhouse.002.b16_ca7qgv.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body
        className={`font-sans overflow-x-hidden max-w-full ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
