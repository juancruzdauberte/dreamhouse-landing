"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import Image from "next/image";

type Category =
  | "Todos"
  | "Cocina"
  | "Living-Comedor"
  | "Baños"
  | "Dormitorios"
  | "Patio"
  | "Garage";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "Todos">[];
  span?: "wide" | "tall" | "normal";
}

const allImages: GalleryImage[] = [
  // Cocina
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758324359/cocina_liqdn8.jpg",
    alt: "Cocina moderna equipada",
    category: ["Cocina"],
    span: "wide",
  },
  // Living
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318377/WhatsApp_Image_2025-09-08_at_22.06.14_1_uksjyk.jpg",
    alt: "Sala de estar luminosa",
    category: ["Living-Comedor"],
    span: "wide",
  },
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318378/WhatsApp_Image_2025-09-08_at_22.06.14_s49kqx.jpg",
    alt: "Living comedor integrado",
    category: ["Living-Comedor"],
    span: "normal",
  },
  // Baños
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318385/WhatsApp_Image_2025-09-08_at_22.06.10_ji1e9i.jpg",
    alt: "Garage",
    category: ["Garage"],
    span: "normal",
  },
  // Dormitorios
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318382/WhatsApp_Image_2025-09-08_at_22.06.12_3_n7synm.jpg",
    alt: "Dormitorio principal",
    category: ["Dormitorios"],
    span: "wide",
  },
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318385/WhatsApp_Image_2025-09-08_at_22.06.13_2_qcroog.jpg",
    alt: "Dormitorio 2",
    category: ["Dormitorios"],
    span: "normal",
  },
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318385/WhatsApp_Image_2025-09-08_at_22.06.13_g5uxgr.jpg",
    alt: "Dormitorio 3",
    category: ["Dormitorios"],
    span: "normal",
  },
  // Patio
  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1772026667/dh-patio_ubqhwr.jpg",
    alt: "Patio con piscina",
    category: ["Patio"],
    span: "wide",
  },

  {
    src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318378/WhatsApp_Image_2025-09-08_at_22.06.14_s49kqx.jpg",
    alt: "Galería del patio - parrilla",
    category: ["Patio"],
    span: "normal",
  },
];

const CATEGORIES: Category[] = [
  "Todos",
  "Cocina",
  "Living-Comedor",
  "Baños",
  "Dormitorios",
  "Patio",
  "Garage",
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "Todos"
      ? allImages
      : allImages.filter((img) => img.category.includes(activeCategory));

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevLightbox = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null,
    );
  const nextLightbox = () =>
    setLightbox((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null,
    );

  return (
    <>
      <section id="galeria" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="fadeInUp" className="text-center mb-12">
            <p className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4">
              Galería
            </p>
            <p className="text-xl text-muted-foreground">
              Descubrí cada rincón de tu próximo hogar temporal
            </p>
          </AnimatedSection>

          {/* Category Filter Pills */}
          <AnimatedSection animation="fadeInUp" delay={150} className="mb-10">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    border transition-all duration-300
                    ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                        : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground hover:scale-105"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Masonry-style Grid */}
          <AnimatedSection animation="fadeInUp" delay={300}>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
              {filtered.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        image.span === "wide" ? "h-72" : "h-64"
                      }`}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 h-8 w-8 drop-shadow-lg" />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>
                    {/* Alt text bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                No hay imágenes para esta categoría.
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox via Portal — escapa transforms de ancestros */}
      {lightbox !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black flex flex-col"
            onClick={closeLightbox}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0">
              <span className="text-white/60 text-sm font-medium tabular-nums">
                {lightbox + 1} / {filtered.length}
              </span>
              <button
                className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Image — ocupa todo el espacio restante */}
            <div
              className="flex flex-1 items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Desktop prev */}
              <button
                className="hidden md:flex flex-shrink-0 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors mx-2"
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                className="max-w-full max-h-full object-contain select-none"
                style={{ maxHeight: "calc(100dvh - 120px)" }}
                draggable={false}
              />

              {/* Desktop next */}
              <button
                className="hidden md:flex flex-shrink-0 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors mx-2"
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>

            {/* Bottom bar: caption + mobile arrows */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0 gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="md:hidden text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <p className="text-white/60 text-sm text-center flex-1 line-clamp-1">
                {filtered[lightbox].alt}
              </p>

              <button
                className="md:hidden text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors flex-shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
