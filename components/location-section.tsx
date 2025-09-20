"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Car, Plane } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

export function LocationSection() {
  const nearbyAttractions = [
    { name: "Colonia Suiza", distance: "-5 min", type: "Naturaleza" },
    { name: "Puerto de Baradero", distance: "-5 min", type: "Recreación" },
    { name: "Rotonda de Baradero", distance: "-5 min", type: "Recreación" },
    { name: "Río de Baradero", distance: "-5 min", type: "Recreación" },
    { name: "Río Paraná", distance: "15 min", type: "Naturaleza" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Ubicación Privilegiada
          </h2>
          <p className="text-xl text-muted-foreground">
            En el corazón de Baradero, cerca de todo lo que importa
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map and Address */}
          <div className="space-y-6">
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="hover:shadow-lg bg-white transition-all duration-300 group">
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.54354768304!2d-59.512378999999996!3d-33.7982836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ba37a5f961f291%3A0x2a07d86015f4ca9e!2sche%20Guevara%20779%2C%20B2942%20Baradero%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1758322241047!5m2!1ses-419!2sar"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-300 group-hover:scale-105 w-full h-full"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-lg font-semibold">Che Guevara 779</p>
                    <p className="text-muted-foreground">
                      Baradero, Buenos Aires
                    </p>
                    <p className="text-muted-foreground">Argentina</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Transportation */}
            <div className="grid sm:grid-cols-2 gap-4">
              <AnimatedSection animation="fadeInLeft" delay={300}>
                <Card className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Car className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110" />
                      <CardTitle className="text-md">
                        Desde Capital Federal
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">2 horas</p>
                    <p className="text-sm text-muted-foreground">
                      130 km por Ruta 9
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInRight" delay={400}>
                <Card className="hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110" />
                      <CardTitle className="text-md">
                        Aeropuerto más cercano
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">2.5 horas</p>
                    <p className="text-sm text-muted-foreground">
                      Ezeiza (EZE)
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>

          {/* Nearby Attractions */}
          <div>
            <AnimatedSection animation="fadeInUp" delay={200}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Atracciones Cercanas
              </h3>
            </AnimatedSection>

            <div className="space-y-4">
              {nearbyAttractions.map((attraction, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={300 + index * 50}
                >
                  <Card className="hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-primary/20 group">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors duration-200">
                            {attraction.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            A {attraction.distance} en auto
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="group-hover:bg-primary group-hover:text-white transition-colors duration-200"
                        >
                          {attraction.type}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
