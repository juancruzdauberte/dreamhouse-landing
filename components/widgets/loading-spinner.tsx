"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
          <span className="text-white font-bold">Cargando...</span>
        </div>
      </div>
    </div>
  );
}
