import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

interface Reserva {
  fecha_checkin_fk: string;
  fecha_checkout_ajustado: string;
}

export async function GET() {
  try {
    // Query que resta 1 día al checkout directamente en la BD
    // El último día ocupado es checkout - 1 día
    const reservas = await query<Reserva[]>(
      `SELECT 
        fecha_checkin_fk,
        DATE_SUB(fecha_checkout_fk, INTERVAL 1 DAY) as fecha_checkout_ajustado
       FROM fact_reservas 
       WHERE estado_reserva = 'Confirmada' 
       AND fecha_checkout_fk >= CURDATE()
       ORDER BY fecha_checkin_fk ASC`
    );

    // Transformamos las fechas al formato que espera el calendario
    const datesNotAvailable = reservas.map(reserva => ({
      from: new Date(reserva.fecha_checkin_fk),
      to: new Date(reserva.fecha_checkout_ajustado)
    }));

    return NextResponse.json({ 
      success: true, 
      data: datesNotAvailable 
    });
    
  } catch (error) {
    console.error('Error fetching reservas:', error);
    return NextResponse.json(
      { success: false, error: 'Error al obtener las reservas' },
      { status: 500 }
    );
  }
}

// Opcional: Revalidar cada 5 minutos
export const revalidate = 300;
