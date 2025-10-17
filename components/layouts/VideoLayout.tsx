import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
type VideoLayoutProps = {
  id: string;
  showControls?: boolean; // Prop para mostrar controles (opcional)
  isMuted?: boolean; // Prop para controlar el sonido (opcional)
  aspec_ratio: string;
};
export default function VideoLayout({ id, aspec_ratio }: VideoLayoutProps) {
  return (
    <CldVideoPlayer
      key={id}
      src={id}
      transformation={{
        crop: "fill",
        aspect_ratio: aspec_ratio,
        gravity: "center",
      }}
      className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      muted
      aspectRatio={aspec_ratio}
      controls={false}
      autoplay
      loop
    />
  );
}
