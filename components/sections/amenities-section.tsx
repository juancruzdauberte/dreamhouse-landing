"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wifi,
  Car,
  Waves,
  ChefHat,
  Tv,
  Wind,
  Utensils,
  Bed,
  Bath,
  TreePine,
} from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";
import { NoTowelWidget } from "../widgets/NoTowelWidget";

export function AmenitiesSection() {
  const specifications = [
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Piscina",
      description: "Piscina con reposeras para disfrutar todo el año",
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Parrilla",
      description: "Área de parrilla completamente equipada",
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "WiFi Gratis",
      description: "Internet de buena velocidad en toda la propiedad",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Estacionamiento",
      description: "Espacio seguro para múltiples vehículos",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Aire Acondicionado",
      description: "Climatización en planta alta y baja",
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "Smart TV",
      description: "Entretenimiento con Netflix y streaming",
    },
    {
      icon: <Bed className="h-8 w-8" />,
      title: "3 Dormitorios",
      description: "3 camas matrimoniales y 3 individuales",
    },
    {
      icon: <Bath className="h-8 w-8" />,
      title: "2 Baños",
    },
    {
      icon: <NoTowelWidget />,
      title: "Toallas",
      description: "No ofrecemos toallas",
    },

    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Jardín",
      description: "Espacio verde amplio",
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Cocina",
      description: "Totalmente equipada",
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: "Jardín",
      description: "Espacio verde amplio",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6">
            Servicios y Comodidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas para una estadía perfecta
          </p>
        </AnimatedSection>

        {/* Specifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specifications.map((spec, index) => (
            <AnimatedSection
              key={index}
              animation="scaleIn"
              delay={index * 100}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary/80">
                    {spec.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{spec.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
