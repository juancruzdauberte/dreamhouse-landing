export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Dreamhouse Baradero",
    description:
      "Casa quinta de lujo para alquiler vacacional en Baradero, Buenos Aires, Argentina.",
    image: [
      "https://res.cloudinary.com/dttpgbmdx/image/upload/v1758318383/WhatsApp_Image_2025-09-08_at_22.06.11_2_xmyrtr.jpg",
    ],
    url: "https://www.dreamhousebaradero.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Baradero",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.8,
      longitude: -59.5,
    },
    telephone: "+54 3329 305210",
    priceRange: "$$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
