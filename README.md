# Dreamhouse Baradero - Landing Page

Bienvenido al repositorio de la landing page para **Dreamhouse Baradero**, una plataforma web moderna para la reserva de alojamientos temporarios. Este proyecto está construido con un stack tecnológico robusto para asegurar performance, accesibilidad y una gran experiencia de usuario.

## 🚀 Características Principales

- **Diseño Moderno y Responsivo**: Interfaz de usuario elegante y adaptable a todos los dispositivos.
- **Secciones Dinámicas**:
  - **Hero Section**: Impactante primera impresión con imágenes de alta calidad.
  - **Descripción**: Detalles de la propiedad.
  - **Galería**: Visualización de fotos de la propiedad.
  - **Servicios (Amenities)**: Lista de comodidades.
  - **Disponibilidad**: Calendario o sección para consultar fechas libres.
  - **Ubicación**: Mapa e información de localización.
  - **FAQ**: Preguntas frecuentes para resolver dudas de los huéspedes.
- **Animaciones**: Integración de animaciones suaves (`framer-motion`, `tailwindcss-animate`) para una experiencia fluida.
- **Integración con WhatsApp**: Botón flotante para contacto directo.
- **Call to Action (CTA)**: Secciones estratégicas para incentivar la reserva.

## 🛠 Stack Tecnológico

Este proyecto utiliza las siguientes tecnologías clave:

### Frontend

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) (Primitive components)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Animaciones**: `tailwindcss-animate`, `tw-animate-css`
- **Formularios**: `react-hook-form`, `zod` (validación)
- **Carruseles**: `embla-carousel-react`
- **Notificaciones**: `sonner`

### Backend / Base de Datos

- **Base de Datos**: MySQL
- **Cliente DB**: `mysql2`
- **API**: Next.js Server Actions y API Routes

## 📁 Estructura del Proyecto

- `/app`: Rutas y páginas de la aplicación (Next.js App Router).
- `/components`: Componentes reutilizables de React (layouts, secciones, widgets).
- `/lib`: Utilidades y configuración de base de datos (`db.ts`).
- `/public`: Archivos estáticos (imágenes, fuentes).
- `/styles`: Archivos de estilos globales.
