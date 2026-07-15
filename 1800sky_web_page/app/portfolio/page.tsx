import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="flex flex-col sm:min-[320px] overflow-hidden ">

      <Header />

        <Image
          className="w-full h-auto object-cover"
          src="/assets/icons/sky-face-3.svg"
          alt="Sky face banner"
          width={1034}
          height={100}
          />

        {/* Título */}
          <div className="border-4 border-solid border-blue-800 border-l-0 p-6 mb-12 mt-12 md:p-10">
            <MainTitle className="font-dotgothic16 ">
              PORTFOLIO
            </MainTitle>
          </div>


      {/* Wrapper global */}
      <section className="flex flex-col mx-auto grow w-full max-w-6xl gap-12 pb-20">
        
        {/* Header de Categoría */}
        <article className="px-6 md:px-12">
          <h2 className="font-noto-serif text-xl md:text-2xl font-bold">
            MUSIC ALBUM ARTWORKS
          </h2>
          <p className="font-sans text-sm text-neutral-400 mt-2">
            Partnered with local and up-and-coming artists on their own cover artworks
          </p>
        </article>

        {/* ========================================= */}
        {/* PROYECTO 1: KOBE                          */}
        {/* ========================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-start" id="kobe-section">
          
          {/* EL FIX: Caja contenedora con relative y aspect-square */}
          <div className="w-full aspect-square relative border border-neutral-800 bg-neutral-900">
            <Image
              className="object-cover"
              src="/assets/portfolio-works/bruklyn-idea_4.png"
              alt="kobe-artwork-cover-bruklyn"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="w-full rounded-xl overflow-hidden border border-neutral-800">
                <iframe
                title="works"
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/album/7qTmZkKR5iilhQkjado98c?utm_source=generator&si=d2f4d9ad7d334ff4"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                ></iframe>
            </div>

            <article className="flex flex-col gap-2">
              <h3 className="font-noto-serif text-lg md:text-xl font-medium">
                KOBE - BRUKLYN & Teo Mp
              </h3>
              <p className="font-sans text-sm text-neutral-400">
                Design inspired by the “Virgen Inmaculada Concepción de Quito” and “El Panecillo” place
              </p>
            </article>
          </div>
        </section>

        {/* ========================================= */}
        {/* PROYECTO 2: MÚSICA HECHA EN CASA          */}
        {/* ========================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-start mt-8" id="musica-casa-section">
          
          <div className="w-full aspect-square relative border border-neutral-800 bg-neutral-900">
            <Image
              className="object-cover"
              src="/assets/portfolio-works/musica_en_casa_alter_4.png"
              alt="Musica hecha en casa"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="w-full aspect-square relative border border-neutral-800 bg-neutral-900">
            <Image
              className="object-cover"
              src="/assets/portfolio-works/back_cover_musica_en_casa.png"
              alt="Contraportada"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-neutral-800">
            <iframe
              title="works"
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/album/5x7sU2jdwMTI2ZvnU1sw4Q?utm_source=generator&si=cd5787d732884e47"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <article className="flex flex-col gap-3 justify-center h-full py-4">
            <h3 className="font-noto-serif text-lg md:text-xl font-medium">
              MÚSICA HECHA EN CASA - Lil Otack
            </h3>
            <p className="font-sans text-sm text-neutral-400">
              Design inspired by the “Virgen Inmaculada Concepción de Quito” and “El Panecillo” place
            </p>
          </article>

        </section>
      </section>

      <Footer />
    </main>
  );
}