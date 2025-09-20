import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son requeridos" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "DreamHouse <noreply@dreamhousebaradero.com>",
      to: ["dreamhousebaradero779@gmail.com"],
      subject: `Nueva consulta de ${name} - DreamHouse Baradero`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #8B4513; margin-bottom: 20px; text-align: center;">Nueva Consulta - DreamHouse Baradero</h2>
            
            <div style="background-color: #f8f8f8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #333; margin-top: 0;">Información del Cliente:</h3>
              <p style="margin: 8px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              ${
                phone
                  ? `<p style="margin: 8px 0;"><strong>Teléfono:</strong> ${phone}</p>`
                  : ""
              }
            </div>
            
            <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #8B4513;">
              <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666; font-size: 14px;">
                Este mensaje fue enviado desde el formulario de contacto de DreamHouse Baradero
              </p>
              <p style="color: #666; font-size: 12px;">
                Fecha: ${new Date().toLocaleString("es-AR", {
                  timeZone: "America/Argentina/Buenos_Aires",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email enviado correctamente", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
