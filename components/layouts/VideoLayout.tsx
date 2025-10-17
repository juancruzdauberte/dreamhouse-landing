import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
type VideoLayoutProps = {
  id: string;
  showControls?: boolean; // Prop para mostrar controles (opcional)
  isMuted?: boolean; // Prop para controlar el sonido (opcional)
};
export default function VideoLayout({ id }: VideoLayoutProps) {
  return (
    <CldVideoPlayer
      key={id}
      src={id}
      transformation={{
        crop: "fill",
        aspect_ratio: "1:1",
        gravity: "center",
      }}
      className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      muted
      controls={false}
      autoplay
      loop
    />
  );
}
