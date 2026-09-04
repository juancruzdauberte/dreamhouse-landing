import {
  BedrockAgentRuntimeClient,
  RetrieveAndGenerateCommand,
} from "@aws-sdk/client-bedrock-agent-runtime";
import { NextRequest, NextResponse } from "next/server";

const client = new BedrockAgentRuntimeClient({
  region: process.env.AWS_REGION ?? "us-east-1",
});

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
    const command = new RetrieveAndGenerateCommand({
      input: { text: message.trim() },
      retrieveAndGenerateConfiguration: {
        type: "KNOWLEDGE_BASE",
        knowledgeBaseConfiguration: {
          knowledgeBaseId: process.env.BEDROCK_KNOWLEDGE_BASE_ID!,
          modelArn: process.env.BEDROCK_MODEL_ARN!,
          generationConfiguration: {
            guardrailConfiguration: {
              guardrailId: process.env.BEDROCK_GUARDRAIL_ID!,
              guardrailVersion: process.env.BEDROCK_GUARDRAIL_VERSION ?? "1",
            },
            promptTemplate: {
              textPromptTemplate:
                "Sos un asistente de DreamHouse. Respondé en español de forma clara y directa usando solo la información disponible.\n\nInformación:\n$search_results$\n\nPregunta: $query$\nRespuesta:",
            },
          },
        },
      },
    });

    const response = await client.send(command);
    const reply =
      response.output?.text ??
      "No encontré información sobre eso. ¿Podés reformular la pregunta?";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("[api/chat] Bedrock error:", error);
    return NextResponse.json(
      { error: "Error al consultar el asistente" },
      { status: 500 }
    );
  }
}
