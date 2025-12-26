import { DateRange } from "react-day-picker";

export async function getReservas(): Promise<DateRange[]> {
  try {
    const isServer = typeof window === "undefined";
    let url = "/api/reservas";

    if (isServer) {
      const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
      const host = process.env.NEXT_PUBLIC_URL || "localhost:3000";
      url = `${protocol}://${host}/api/reservas`;
    }

    const response = await fetch(url); // Asume que la API ya devuelve 'YYYY-MM-DD'

    if (!response.ok) {
      throw new Error("Error de red al obtener reservas");
    }

    const result = await response.json();

    if (result.success) {
      // ESTA ES LA CORRECCIÓN CLAVE
      return result.data.map((range: any) => ({
        // Forzamos la interpretación en zona horaria local
        from: new Date(range.from + "T00:00:00"),
        to: new Date(range.to + "T00:00:00"),
      }));
    } else {
      throw new Error(result.message || "No se pudieron cargar las reservas");
    }
  } catch (err) {
    console.error("Error fetching reservas:", err);
    throw err;
  }
}
