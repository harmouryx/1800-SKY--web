"use client";

import Image from "next/image";
import { useRef } from "react";

interface ZoomImgProps {
    src: string;
    alt: string;
}

export default function ZoomImg({ src, alt }: ZoomImgProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const open = () => dialogRef.current?.showModal();
    const close = () => dialogRef.current?.close();

    return (
        <>
            {/* Miniatura: llena el contenedor relative/aspect-square del padre */}
            <button
                type="button"
                onClick={open}
                aria-label={`Expand image: ${alt}`}
                className="absolute inset-0 cursor-zoom-in"
            >
                <Image
                    className="object-cover"
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </button>

            {/* <dialog> nativo: Esc, foco atrapado y fondo oscuro vienen incluidos */}
            <dialog
                ref={dialogRef}
                onClick={(e) => {
                    // clic en el fondo (fuera de la imagen) cierra
                    if (e.target === e.currentTarget) close();
                }}
                className="m-auto bg-transparent p-0 outline-none backdrop:bg-black/90"
            >
                <Image
                    src={src}
                    alt={alt}
                    width={1600}
                    height={1600}
                    sizes="95vw"
                    style={{ width: "auto", height: "auto" }}
                    className="max-h-[90vh] max-w-[95vw] object-contain"
                />
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="absolute right-2 top-2 rounded-xs bg-black/70 px-3 py-1 text-white hover:bg-black"
                >
                    ✕
                </button>
            </dialog>
        </>
    );
}