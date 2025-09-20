"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318385/WhatsApp_Image_2025-09-08_at_22.06.13_1_zi0lt9.jpg"
          alt="DreamHouse Baradero exterior"
          fill
          className="object-cover transition-transform duration-[3000ms] ease-out hover:scale-105 "
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div
          className={`mb-6 sm:mb-8 transition-all duration-1200 ease-out delay-300 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Image
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318130/dreamhouse.002.b16_ibpty8.jpg"
            alt="DreamHouse Baradero"
            width={200}
            height={120}
            className="mx-auto mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300 w-32 sm:w-40 md:w-48 h-auto rounded-full"
          />
        </div>

        <h1
          className={`font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tu escape soñado
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-pretty opacity-90 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-700 ${
            isLoaded ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Descubrí la <em className="font-bold text-amber-200">tranquilidad</em>{" "}
          perfecta en nuestra casa quinta de lujo en Baradero, Provincia de
          Buenos Aires.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 ease-out delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="lg"
            className="bg-amber-700 hover:bg-amber-900/70 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full max-w-[200px] sm:w-auto transform hover:scale-105 transition-all duration-200 hover:shadow-lg cursor-pointer"
            onClick={() =>
              document
                .getElementById("reservar")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Reservar Ahora
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full max-w-[200px] sm:w-auto transform hover:scale-105 transition-all duration-200 hover:shadow-lg cursor-pointer"
            onClick={() =>
              document
                .getElementById("galeria")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Galería
          </Button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 sm:bottom-9  left-1/2 transform -translate-x-1/2 text-white animate-bounce transition-all duration-1000 ease-out delay-1200 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          className={`absolute  left-1/2 transform -translate-x-1/2 text-white animate-bounce transition-all duration-1000 ease-out delay-1200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          href="#descripcion"
        >
          <svg
            className="w-6 h-6 hover:scale-110 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
      \
    </section>
  );
}
