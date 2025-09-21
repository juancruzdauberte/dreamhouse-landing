"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Send, CheckCircle, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/sections/animated-section";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <AnimatedSection animation="scaleIn">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-green-700">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-muted-foreground mb-6">
              Gracias por contactarnos. Te responderemos en menos de 2 horas.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Enviar otro mensaje
            </Button>
          </CardContent>
        </Card>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection animation="fadeInUp" delay={400}>
      <Card className="max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
        <CardContent className="p-8">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold mb-2">
              Contacta con nosotros
            </h3>
            <p className="text-muted-foreground">
              Completa el formulario y te responderemos a la brevedad
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nombre *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+543329305210"
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="transition-all duration-300 focus:scale-[1.02]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensaje *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu consulta, fechas de interés, número de huéspedes, etc."
                rows={4}
                className="transition-all duration-300 focus:scale-[1.02] resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full max-w-[300px] text-lg py-6 hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t text-center">
            <p className="text-sm text-muted-foreground mb-4">
              O contáctanos directamente:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 hover:bg-white hover:border-amber-800 hover:text-amber-800 transition-all duration-300 bg-transparent w-full max-w-[160px] md:max-w-[200px] py-1 cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "mailto:dreamhousebaradero779@gmail.com?subject=Consulta de Reserva - DreamHouse Baradero")
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Directo
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 transition-all duration-300 bg-transparent hover:bg-green-50 hover:border-green-500 hover:text-green-600 w-full max-w-[160px] md:max-w-[200px] py-1 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://wa.me/543329305210?text=Hola! Me interesa hacer una reserva en DreamHouse Baradero, del (poner fecha) al (poner fecha) para (cantidad de personas). ¿Podrían darme más información?",
                    "_blank"
                  )
                }
              >
                <svg
                  className="h-20 w-20 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
