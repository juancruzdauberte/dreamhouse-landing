# =============================================================================
# outputs.tf
# Exporta los valores necesarios después del terraform apply.
# =============================================================================

# ID del Guardrail — agregar al .env como BEDROCK_GUARDRAIL_ID
output "guardrail_id" {
  description = "ID del Bedrock Guardrail — agregar al .env como BEDROCK_GUARDRAIL_ID"
  value       = aws_bedrock_guardrail.chatbot.guardrail_id
}

# Versión publicada del Guardrail — agregar al .env como BEDROCK_GUARDRAIL_VERSION
output "guardrail_version" {
  description = "Versión del Guardrail para usar en el chatbot (más estable que DRAFT)"
  value       = aws_bedrock_guardrail_version.chatbot.version
}
