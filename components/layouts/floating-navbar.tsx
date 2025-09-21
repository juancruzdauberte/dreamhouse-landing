"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function FloatingNavbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Galería", id: "galeria" },
    { label: "Servicios", id: "servicios" },
    { label: "Disponibilidad", id: "disponibilidad" },
    { label: "Ubicación", id: "ubicacion" },
    { label: "Contacto", id: "reservar" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <Image
                src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318130/dreamhouse.002.b16_ibpty8.jpg"
                alt="DreamHouse"
                width={120}
                height={32}
                className="h-10 w-auto rounded-full"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-primary px-2 md:px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105 cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("reservar")}
                className="bg-amber-700 hover:bg-amber-900/45 text-white px-4 py-1.5 text-sm transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Reservar
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <div
                className={`transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-95 pointer-events-none"
                    : "opacity-100 scale-100"
                }`}
              >
                <Button
                  onClick={() => scrollToSection("reservar")}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white text-xs rounded-sm"
                >
                  Reservar
                </Button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200/20 overflow-x-hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection("reservar")}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Reservar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
