"use client";
import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar el tamaño de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Llama a la función una vez al montar para establecer el estado inicial
    handleResize();

    // Agrega el listener para futuros cambios de tamaño
    window.addEventListener("resize", handleResize);

    // Limpia el listener al desmontar el componente para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
