"use client";

import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/sections/animated-section";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318130/dreamhouse.002.b16_ibpty8.jpg"
                alt="DreamHouse Baradero"
                width={60}
                height={36}
                className="hover:scale-110 transition-transform duration-300 rounded-full"
              />
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold">
                  Dreamhouse
                </h3>
                <p className="text-sm text-muted-foreground">
                  Baradero, Buenos Aires.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Tu escape perfecto en Baradero. Casa quinta de lujo para alquiler
              vacacional con todas las comodidades que necesitas para una
              estadía inolvidable.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <Instagram
                  className="h-5 w-5"
                  href="https://www.instagram.com/dream_house367/"
                  target="_blank"
                />
              </a>
              <a
                href="https://www.tiktok.com/@dreamhouse165?_t=ZM-8zryCOYfmQe&_r=1"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-all duration-200"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 group">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Che+Guevara+779,+Baradero,+Buenos+Aires,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <p>Che Guevara 779</p>
                  <p>Baradero, Buenos Aires</p>
                  <p>Argentina</p>
                </a>
              </div>
              <div className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
                <a
                  href="mailto:dreamhousebaradero779@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  dreamhousebaradero779@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {[
                { href: "#galeria", text: "Galería" },
                { href: "#servicios", text: "Servicios" },
                { href: "#ubicacion", text: "Ubicación" },
                { href: "#reservar", text: "Reservar" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Separator className="my-8" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 DreamHouse Baradero. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
