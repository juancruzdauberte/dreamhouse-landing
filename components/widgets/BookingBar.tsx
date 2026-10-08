"use client";

import { Calendar, Users, MessageCircle } from "lucide-react";
import { useState } from "react";

interface BookingBarProps {
  compact?: boolean;
}

// Función para convertir fecha de yyyy-mm-dd a dd/mm/yyyy
const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

export default function BookingBar({ compact = false }: BookingBarProps) {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("10");

  // Formatea las fechas para WhatsApp
  const formattedCheckin = formatDate(checkin);
  const formattedCheckout = formatDate(checkout);

  // URL de WhatsApp con fechas formateadas
  const whatsappUrl =
    "https://wa.me/543329305210?text=" +
    encodeURIComponent(
      `Hola! Estoy interesado en reservar una estadía.\n\nFechas de llegada: ${formattedCheckin}\nFechas de salida: ${formattedCheckout}\nHuéspedes: ${guests} personas`,
    );

  if (compact) {
    // Modo compacto para el modal flotante - Optimizado para Mobile
    return (
      <div className="w-full">
        <div
          className="bg-gradient-to-b from-stone-50 to-white rounded-xl border border-stone-200 p-6 space-y-5"
          style={{
            background:
              "linear-gradient(to bottom, rgba(245, 245, 244, 0.5), rgba(255, 255, 255, 1))",
          }}
        >
          {/* Grid responsivo - 1 columna en mobile, 2 en tablet, 4 en desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Check-in */}
            <div className="flex flex-col text-left group">
              <label
                className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-2.5 flex items-center gap-2 transition-colors group-focus-within:text-brand-terracotta"
                htmlFor="check-in-date"
              >
                <Calendar
                  size={16}
                  className="text-brand-terracotta flex-shrink-0"
                />
                <span>Llegada</span>
              </label>
              <input
                aria-label="Fecha de llegada"
                className="border-2 border-amber-800/30 px-4 py-3 text-sm font-medium text-brand-charcoal focus:ring-2 focus:ring-amber-800 focus:border-transparent cursor-pointer bg-white outline-none rounded-lg transition-all duration-200 hover:border-stone-400"
                id="check-in-date"
                type="date"
                value={checkin}
                onChange={(e) => setCheckin(e.target.value)}
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col text-left group">
              <label
                className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-2.5 flex items-center gap-2 transition-colors group-focus-within:text-brand-terracotta"
                htmlFor="check-out-date"
              >
                <Calendar
                  size={16}
                  className="text-brand-terracotta flex-shrink-0"
                />
                <span>Salida</span>
              </label>
              <input
                aria-label="Fecha de salida"
                className="border-2 border-amber-800/30 px-4 py-3 text-sm font-medium text-brand-charcoal focus:ring-2 focus:ring-amber-800 focus:border-transparent cursor-pointer bg-white outline-none rounded-lg transition-all duration-200 hover:border-stone-400 disabled:opacity-50 disabled:cursor-not-allowed"
                id="check-out-date"
                type="date"
                min={checkin}
                disabled={!checkin}
                value={checkout}
                onChange={(e) => setCheckout(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col text-left group">
              <label
                className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-2.5 flex items-center gap-2 transition-colors group-focus-within:text-brand-terracotta"
                htmlFor="guests-select"
              >
                <Users
                  size={16}
                  className="text-brand-terracotta flex-shrink-0"
                />
                <span>Personas</span>
              </label>
              <select
                className="border-2 border-amber-800/30 px-4 py-3 text-sm font-medium text-brand-charcoal focus:ring-2 focus:ring-amber-800 focus:border-transparent cursor-pointer bg-white outline-none rounded-lg transition-all duration-200 hover:border-stone-400"
                id="guests-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7">7 personas</option>
                <option value="8">8 personas</option>
                <option value="9">9 personas</option>
                <option value="10">10 personas</option>
                <option value="+10">+10 personas</option>
              </select>
            </div>

            {/* Submit Button - Full width en mobile, normal en desktop */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex items-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 bg-primary hover:bg-brand-terracotta-dark text-white font-semibold text-sm rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:scale-95 whitespace-nowrap"
              >
                <MessageCircle size={18} className="flex-shrink-0" />
                <span>Consultar</span>
              </a>
            </div>
          </div>

          {/* Mensaje informativo */}
          <div className="pt-2 border-t border-stone-200">
            <p className="text-xs text-brand-olive text-center opacity-80 leading-relaxed">
              📱 Recibirás un mensaje en WhatsApp con tu consulta.
              <br />
              ¡Nos pondremos en contacto rápidamente!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Modo normal (Desktop)
  return (
    <div
      className="relative max-w-5xl mx-auto z-20 px-4"
      data-purpose="booking-bar"
      id="disponibilidad"
    >
      <div
        className="bg-white/98 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-end animate-fade-in-up"
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Check-in */}
        <div className="flex flex-col text-left px-2 group">
          <label
            className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-2 flex items-center gap-1.5 transition-colors group-focus-within:text-brand-terracotta"
            htmlFor="check-in-date"
          >
            <Calendar size={14} className="text-brand-terracotta" />
            Check-in
          </label>
          <input
            aria-label="Fecha de llegada"
            className="border-0 p-0 text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
            id="check-in-date"
            type="date"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col text-left px-2 sm:border-l sm:border-amber-800 group">
          <label
            className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-2 flex items-center gap-1.5 transition-colors group-focus-within:text-brand-terracotta"
            htmlFor="check-out-date"
          >
            <Calendar size={14} className="text-brand-terracotta" />
            Check-out
          </label>
          <input
            aria-label="Fecha de salida"
            className="border-0 p-0 text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            id="check-out-date"
            type="date"
            min={checkin}
            disabled={!checkin}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </div>

        {/* Guests */}
        <div className="flex flex-col text-left px-2 lg:border-l lg:border-amber-800 group">
          <label
            className="text-xs font-bold text-brand-olive uppercase tracking-wider mb-2 flex items-center gap-1.5 transition-colors group-focus-within:text-brand-terracotta"
            htmlFor="guests-select"
          >
            <Users size={14} className="text-brand-terracotta" />
            Huéspedes
          </label>
          <select
            className="border-0 p-0 text-sm font-medium text-brand-charcoal focus:ring-0 cursor-pointer bg-transparent outline-none"
            id="guests-select"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="2">2 personas</option>
            <option value="3">3 personas</option>
            <option value="4">4 personas</option>
            <option value="5">5 personas</option>
            <option value="6">6 personas</option>
            <option value="7">7 personas</option>
            <option value="8">8 personas</option>
            <option value="9">9 personas</option>
            <option value="10">10 personas</option>
            <option value="+10">+10 personas</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-4 bg-primary hover:bg-brand-terracotta-dark text-white font-semibold text-sm rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:scale-95"
          >
            <MessageCircle size={18} />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
