# bedrock.tf — SIMPLIFICADO
# El Bedrock Knowledge Base y el IAM Role asociado fueron eliminados.
# La arquitectura actual usa ConverseCommand con el FAQ en el system prompt.
#
# Recursos eliminados:
#   - aws_iam_role.bedrock_kb        (role para Bedrock → S3/OpenSearch)
#   - aws_iam_role_policy.bedrock_kb (permisos S3 + Titan Embed + OpenSearch)
#   - aws_bedrockagent_knowledge_base.dreamhouse
#   - aws_bedrockagent_data_source.dreamhouse
#
# Lo que persiste: guardrail.tf (filtros de contenido, topics, PII)
#
# NOTA: los permisos bedrock:InvokeModel y bedrock:ApplyGuardrail deben estar
# en el IAM User/Role que usa el servidor Next.js (credentials del entorno).
