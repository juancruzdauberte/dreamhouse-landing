/** @type {import('next').NextConfig} */
const nextConfig = {
  // Incluye el FAQ en el bundle serverless de Vercel.
  // Sin esto, readFileSync no encuentra el archivo en /vercel/path0.
  outputFileTracingIncludes: {
    '/api/chat': ['./dreamhouse-knowledge-base.md'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
