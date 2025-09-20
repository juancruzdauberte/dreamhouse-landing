"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318383/WhatsApp_Image_2025-09-08_at_22.06.11_2_xmyrtr.jpg",
      alt: "Exterior con piscina",
    },
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758394502/WhatsApp_Image_2025-09-20_at_15.52.10_1_vzy2pj.jpg",
      alt: "Sector de piscina",
    },
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318377/WhatsApp_Image_2025-09-08_at_22.06.14_1_uksjyk.jpg",
      alt: "Sala de estar",
    },
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318382/WhatsApp_Image_2025-09-08_at_22.06.12_3_n7synm.jpg",
      alt: "Dormitorio principal",
    },
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758324359/cocina_liqdn8.jpg",
      alt: "Cocina moderna",
    },
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318378/WhatsApp_Image_2025-09-08_at_22.06.14_s49kqx.jpg",
      alt: "Área de parrilla",
    },
    {
      src: "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318385/WhatsApp_Image_2025-09-08_at_22.06.10_ji1e9i.jpg",
      alt: "Cochera",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Galería
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubrí cada rincón de tu próximo hogar temporal
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <AnimatedSection
            animation="fadeInLeft"
            delay={200}
            className="lg:col-span-2"
          >
            <div className="overflow-hidden group">
              <div className="relative">
                <img
                  src={images[currentImage].src || "/placeholder.svg"}
                  alt={images[currentImage].alt}
                  className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110 transition-all duration-200 cursor-pointer"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110 transition-all duration-200 cursor-pointer"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {currentImage + 1} / {images.length}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Thumbnail Grid */}
          <AnimatedSection
            animation="fadeInRight"
            delay={400}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4 overflow-hidden p-2">
              {images.slice(0, 7).map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    currentImage === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105 shadow-lg"
                      : "hover:scale-105 hover:shadow-md border-2 border-transparent hover:border-primary/20"
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-40 md:h-24 object-cover transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Video Tour Card */}
            {/* <Card className="overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-0 relative">
                <video
                  src="https://player.cloudinary.com/embed/?cloud_name=dttpgbmdx&public_id=WhatsApp_Video_2025-09-19_at_20.29.38_zphtuf&profile=cld-default"
                  className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
                  <div className="bg-white rounded-full p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">
                  Tour Virtual
                </div>
              </CardContent>
            </Card> */}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
