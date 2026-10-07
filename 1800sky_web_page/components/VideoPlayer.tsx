import type { VideoMode } from "@/data/portfolio";

interface VideoPlayerProps {
    file: string;
    mode: VideoMode;
}

export default function VideoPlayer({ file, mode }: VideoPlayerProps) {
    const src = `/api/video?pathname=${encodeURIComponent(file)}`;

    return mode === "controls" ? (
        <video className="w-full" controls playsInline preload="metadata">
            <source src={src} type="video/mp4" />
        </video>
    ) : (
        <video className="w-full" autoPlay loop muted playsInline preload="metadata">
            <source src={src} type="video/mp4" />
        </video>
    );
}