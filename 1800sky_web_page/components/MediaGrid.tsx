import Image from "next/image";
import path from "node:path";

function altFromSrc(src: string) {
    return path.basename(src, ".png").replace(/[-_.]/g, " ");
}

export default function MediaGrid({ images }: { images: string[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 md:px-12">
            {images.map((src) => (
                <div
                    key={src}
                    className="relative aspect-square border border-neutral-800 bg-neutral-900"
                >
                    <Image
                        className="object-cover"
                        src={src}
                        alt={altFromSrc(src)}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
            ))}
        </div>
    );
}