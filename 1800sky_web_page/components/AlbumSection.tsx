import type { Album } from "@/data/portfolio";
import ZoomImg from "@/components/ZoomImg";

const ARTWORKS_PATH = "/assets/portfolio-works/artworks";

export default function AlbumSection({ album }: { album: Album }) {
  const { id, title, description, images, spotifyAlbumId } = album;
  const hasMultipleImages = images.length > 1;

  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-start mt-8"
    >
      {images.map((image) => (
        <div
          key={image.file}
          className="w-full aspect-square relative border border-neutral-800 bg-neutral-900"

        >
          <ZoomImg src={`${ARTWORKS_PATH}/${image.file}`} alt={image.alt} />
        </div>
      ))}

      {/* Spotify + text: sits next to a single image, spans full width under several */}
      <div
        className={`flex flex-col gap-6 w-full ${hasMultipleImages ? "md:col-span-2" : ""}`}
      >
        {spotifyAlbumId && (
          <div className="w-full rounded-xl overflow-hidden border border-neutral-800">
            <iframe
              title={`${title} - Spotify album`}
              src={`https://open.spotify.com/embed/album/${spotifyAlbumId}?utm_source=generator`}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        )}

        <article className="flex flex-col gap-2">
          <h3 className="font-noto-serif text-lg md:text-xl font-medium">{title}</h3>
          <p className="font-sans text-sm text-neutral-400">{description}</p>
        </article>
      </div>
    </section>
  );
}