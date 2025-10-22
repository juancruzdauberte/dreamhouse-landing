import { DateRange } from "react-day-picker";

export async function getReservas(): Promise<DateRange[]> {
  try {
    const response = await fetch("/api/reservas"); // Asume que la API ya devuelve 'YYYY-MM-DD'

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
