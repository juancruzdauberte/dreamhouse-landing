import { DateRange } from "react-day-picker";

export async function getReservas(): Promise<DateRange[]> {
  try {
    const response = await fetch("/api/reservas");

    if (!response.ok) {
      throw new Error("Error de red al obtener reservas");
    }

    const result = await response.json();

    if (result.success) {
      // Convertir strings de fecha a objetos Date
      return result.data.map((range: any) => ({
        from: new Date(range.from),
        to: new Date(range.to),
      }));
    } else {
      // Si la API reporta un error, lánzalo
      throw new Error(result.message || "No se pudieron cargar las reservas");
    }
  } catch (err) {
    console.error("Error fetching reservas:", err);
    // Vuelve a lanzar el error para que el Error Boundary lo capture
    throw err;
  }
}
