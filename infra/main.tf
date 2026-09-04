# =============================================================================
# main.tf
# Punto de entrada de la infraestructura de DreamHouse Baradero.
# Define los providers requeridos y la versión mínima de Terraform.

# =============================================================================

terraform {
  # Versión mínima de Terraform requerida
  required_version = ">= 1.6"

  required_providers {
    # Provider de AWS — versión 5.x mínima porque aws_bedrockagent_* solo
    # existe a partir de esa versión
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0"
    }

    # Provider random — usado para generar el sufijo único del bucket S3
    # (S3 requiere nombres únicos globales en toda AWS)
    random = {
      source  = "hashicorp/random"
      version = ">= 3.0"
    }

    # Provider opensearch — necesario para crear el índice vectorial dentro
    # de la colección OpenSearch Serverless antes de que Bedrock pueda usarla.
    # Cuando se crea un KB desde la consola AWS, este índice se crea automáticamente.
    # Vía Terraform, hay que crearlo explícitamente con el mapping correcto.
    opensearch = {
      source  = "opensearch-project/opensearch"
      version = ">= 2.0"
    }
  }
}

# Configura el provider de AWS con la región definida en variables.tf
# Terraform usará las credenciales del entorno (AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY)
# o el archivo ~/.aws/credentials si están configuradas localmente
provider "aws" {
  region = var.aws_region
}
