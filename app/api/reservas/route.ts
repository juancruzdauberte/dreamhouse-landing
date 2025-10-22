// /api/reservas/route.js
import { NextResponse } from "next/server";
import { query } from "@/lib/db";

interface ReservaFromDB {
  from: string;
  to: string;
}

export async function GET() {
  try {
    const reservas = await query<ReservaFromDB[]>(
      `SELECT 
         DATE_FORMAT(fecha_checkin_fk, '%Y-%m-%d') as \`from\`,
         DATE_FORMAT(DATE_SUB(fecha_checkout_fk, INTERVAL 1 DAY), '%Y-%m-%d') as \`to\`
       FROM fact_reservas 
       WHERE estado_reserva = 'Confirmada' 
       AND fecha_checkout_fk >= CURDATE()
       ORDER BY fecha_checkin_fk ASC`
    );

    return NextResponse.json({
      success: true,
      data: reservas,
    });
  } catch (error) {
    throw error;
  }
}

export const revalidate = 300;
