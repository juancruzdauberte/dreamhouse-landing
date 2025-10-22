"use client";

import { Calendar } from "@/components/ui/calendar";
import { es } from "date-fns/locale";
import { use } from "react";
import { getReservas } from "@/lib/actions";

const reservasPromise = getReservas();

export default function CalendarDemo() {
  // 3. Pasa la promesa (que ahora está guardada) al hook 'use'
  //    Esto es seguro, porque 'reservasPromise' será el mismo objeto
  //    en cada renderizado.
  const datesNotAvailable = use(reservasPromise);

  const isDateBooked = (date: Date) =>
    datesNotAvailable.some((range) => {
      const from = range.from!;
      const to = range.to ?? range.from!;
      return date >= from && date <= to;
    });

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h4 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-5 md:mb-10">
          Calendario de disponibilidad
        </h4>

        {/* Recuerda que si 'use' falla, debes tener un error.tsx */}

        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-center gap-5 lg:gap-20">
          <div className="bg-white p-2 rounded-md border">
            <p className="flex items-center gap-2">
              <span className="text-green-700 text-2xl">•</span> Disponible
            </p>
            <p className="flex items-center gap-2">
              <span className="text-orange-500 text-2xl">•</span>No Disponible
            </p>
          </div>

          <Calendar
            mode="single"
            locale={es}
            className="rounded-md border w-full max-w-sm h-[400px] bg-white"
            disabled={[{ before: new Date() }, ...datesNotAvailable]}
            modifiers={{
              booked: (date) => isDateBooked(date),
              available: (date) => date >= new Date() && !isDateBooked(date),
            }}
            modifiersClassNames={{
              booked: "day-booked",
              available: "day-available",
            }}
          />
        </div>
      </div>

      <style jsx global>{`
        .day-booked::after {
          content: "";

          display: block;

          width: 6px;

          height: 6px;

          border-radius: 50%;

          background-color: red;

          margin: 0 auto;

          margin-top: 2px;
        }

        .day-available::after {
          content: "";

          display: block;

          width: 6px;

          height: 6px;

          border-radius: 50%;

          background-color: green;

          margin: 0 auto;

          margin-top: 2px;
        }
      `}</style>
    </section>
  );
}
