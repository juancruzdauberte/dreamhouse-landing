"use client";
import "next-cloudinary/dist/cld-video-player.css";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/sections/animated-section";
import { CldVideoPlayer } from "next-cloudinary";

export function PropertyDescription() {
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

          {/* --- CAMBIOS EN ESTA SECCIÓN --- */}
          <AnimatedSection
            animation="fadeInRight"
            delay={400}
            className="h-full"
          >
            <div className="overflow-hidden group hover:shadow-xl transition-all duration-500 h-full ">
              <div className="relative h-[500px] lg:h-[650px]">
                <CldVideoPlayer
                  src="IMG_7842_wd6zmf"
                  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoplay
                  muted
                  loop
                  controls={false}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
