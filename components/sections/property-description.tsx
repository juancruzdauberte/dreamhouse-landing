"use client";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/sections/animated-section";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoLayout from "../layouts/VideoLayout";
import { useIsMobile } from "@/hooks/use-mobile";

export function PropertyDescription() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Este efecto se ejecuta solo en el cliente, una vez que el componente se monta.
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const videos = [
    "WhatsApp_Video_2025-09-19_at_20.29.38_ondrsh",
    "IMG_7842_wd6zmf",
    "IMG_7613_o8ywoa",
    "IMG_7838_eqjhym",
    "IMG_7834_zejyh2",
  ];

  const changeVideo = (newIndex: number) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentVideo(newIndex);
      setIsChanging(false);
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

  const isMobile = useIsMobile();

  // --- Renderizado principal ---
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
            {/* ... (Tu sección de texto y badges se mantiene igual) ... */}
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
                {/* --- LÓGICA DE MONTAJE APLICADA AQUÍ --- */}
                {!hasMounted ? (
                  // Placeholder mientras el componente se monta en el cliente
                  <div
                    className="w-full bg-gray-200 animate-pulse rounded-lg"
                    // Usamos el aspect ratio de desktop como base para evitar saltos de diseño
                    style={{ aspectRatio: "1 / 1" }}
                  />
                ) : (
                  // Una vez montado, renderiza el video con el aspect ratio correcto
                  <div
                    className={`relative w-full transition-opacity duration-300 ${
                      isChanging ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <VideoLayout
                      key={videos[currentVideo]} // La key es crucial para que el video cambie
                      id={videos[currentVideo]}
                      aspect_ratio={isMobile ? "9:16" : "1:1"} // Corregido typo: aspectRatio
                    />
                  </div>
                )}
              </div>

              {/* ... (Tus botones e indicadores se mantienen igual) ... */}
              {videos.length > 1 && (
                <>
                  <button
                    onClick={prevVideo}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextVideo}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {videos.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => changeVideo(index)} // Usamos changeVideo para la transición
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentVideo
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
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
