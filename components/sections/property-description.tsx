"use client";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/sections/animated-section";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoLayout from "../layouts/VideoLayout";

export function PropertyDescription() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  // Array de videos - agrega aquí los IDs de tus videos de Cloudinary
  const videos = [
    "WhatsApp_Video_2025-09-19_at_20.29.38_ondrsh",
    "IMG_7842_wd6zmf",
    "IMG_7613_o8ywoa",
    "IMG_7838_eqjhym",
    "IMG_7834_zejyh2",
  ];
  // const videoWithControlsId = "WhatsApp_Video_2025-09-19_at_20.29.38_ondrsh";

  const changeVideo = (newIndex: number) => {
    setIsChanging(true); // Inicia la transición (fade out)

    // Espera a que termine la animación de fade-out (300ms)
    setTimeout(() => {
      setCurrentVideo(newIndex);
      setIsChanging(false); // Termina la transición (fade in)
    }, 300);
  };

  const nextVideo = () => {
    const newIndex = (currentVideo + 1) % videos.length;
    changeVideo(newIndex);
  };

  const prevVideo = () => {
    const newIndex = (currentVideo - 1 + videos.length) % videos.length;
    changeVideo(newIndex);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6 text-balance">
            Una Experiencia Única
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            DreamHouse Baradero es más que una casa de alquiler, es tu refugio
            perfecto para desconectar y crear recuerdos inolvidables
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <AnimatedSection
            animation="fadeInLeft"
            delay={200}
            className="space-y-6"
          >
            <div>
              <p className="text-2xl font-semibold mb-4">Diseño y Confort</p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestra propiedad combina la elegancia moderna con la calidez
                del hogar. Cada espacio ha sido cuidadosamente diseñado para
                ofrecerte la máxima comodidad durante tu estadía.
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-4">
                Ubicación Privilegiada
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Situada en el corazón de Baradero, tendrás acceso fácil a las
                principales atracciones de la ciudad mientras disfrutas de la
                tranquilidad de un entorno natural.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Capacidad 9 personas",
                "3 Dormitorios",
                "6 camas",
                "2 Baños",
                "Piscina",
                "Jardín",
                "Aire acondicionado",
                "Parrilla",
                "Cochera",
              ].map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="hover:scale-105 transition-transform duration-200 hover:bg-primary hover:text-white"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection
            animation="fadeInRight"
            delay={400}
            className="h-full flex items-center"
          >
            <div className="relative w-full group">
              <div className="overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div
                  className={`relative w-full transition-opacity duration-300 ${
                    isChanging ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <VideoLayout id={videos[currentVideo]} />
                </div>
              </div>

              {/* Botones de navegación - solo si hay más de 1 video */}
              {videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Video anterior"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Video siguiente"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Indicadores de posición */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentVideo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentVideo
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                        aria-label={`Ir al video ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
