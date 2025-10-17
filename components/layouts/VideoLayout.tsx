import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function VideoLayout({ id }: { id: string }) {
  return (
    <CldVideoPlayer
      src={id}
      className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      autoplay
      muted
      loop
      controls={false}
    />
  );
}
