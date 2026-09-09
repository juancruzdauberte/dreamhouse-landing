import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION ?? "us-east-1",
});

// FAQ cargado una vez en memoria al iniciar el servidor.
// El archivo vive en la raíz del repositorio y se lee en runtime.
const FAQ_CONTENT = readFileSync(
  join(process.cwd(), "dreamhouse-knowledge-base.md"),
  "utf-8"
);

const SYSTEM_PROMPT = `Eres un asistente virtual de DreamHouse Baradero, una casa quinta de lujo para alquiler vacacional.
Tu rol es responder preguntas sobre la propiedad, sus amenidades, precios, disponibilidad y políticas de reserva.
Responde en español, de forma clara, directa y amigable.
Usa ÚNICAMENTE la información del siguiente documento. Si la respuesta no está disponible en el documento, indícalo y sugiere contactar por WhatsApp al +54 3329 305210 o por email a dreamhousebaradero779@gmail.com.

INFORMACIÓN DE LA PROPIEDAD:
${FAQ_CONTENT}`;

export async function POST(req: NextRequest) {
  let body: { message?: string };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { message } = body;

  if (!message || message.trim() === "") {
    return NextResponse.json({ error: "message is required" }, { status: 400 });
  }

  try {
    const command = new ConverseCommand({
      modelId: process.env.BEDROCK_MODEL_ARN!,
      system: [{ text: SYSTEM_PROMPT }],
      messages: [
        {
          role: "user",
          content: [{ text: message.trim() }],
        },
      ],
      guardrailConfig: {
        guardrailIdentifier: process.env.BEDROCK_GUARDRAIL_ID!,
        guardrailVersion: process.env.BEDROCK_GUARDRAIL_VERSION ?? "1",
      },
      inferenceConfig: {
        maxTokens: 512,
        temperature: 0.1,
        topP: 0.9,
      },
    });

    const response = await client.send(command);

    const reply =
      response.output?.message?.content?.[0]?.text ??
      "No encontré información sobre eso. ¿Puedes reformular la pregunta?";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[api/chat] Bedrock error:", error);
    return NextResponse.json(
      { error: "Error al consultar el asistente" },
      { status: 500 }
    );
  }
}
