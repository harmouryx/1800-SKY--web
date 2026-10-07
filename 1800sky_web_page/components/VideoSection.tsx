import VideoPlayer from "@/components/VideoPlayer";
import type { Video } from "@/data/portfolio";

export default function VideoSection({ video }: { video: Video }) {
    const { id, file, title, description, mode } = video;

    return (
        <section
            id={id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-start mt-8"
        >
            <VideoPlayer file={file} mode={mode} />

            <article>
                <h3 className="font-noto-serif text-xl md:text-2xl font-bold">{title}</h3>
                <p className="font-sans text-sm text-neutral-400 mt-2">{description}</p>
            </article>
        </section>
    );
}