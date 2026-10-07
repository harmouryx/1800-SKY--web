import Image from "next/image";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import AlbumSection from "@/components/AlbumSection";
import VideoSection from "@/components/VideoSection";
import VideoPlayer from "@/components/VideoPlayer";
import { albums, reels, visuals } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <main className="flex flex-col sm:min-[320px] overflow-x-clip">
      <Header />

      <Image
        className="w-full h-auto object-cover"
        src="/assets/icons/sky-face-3.svg"
        alt="Sky face banner"
        width={1034}
        height={100}
      />

      <div className="border-4 border-solid border-blue-800 border-l-0 p-6 mb-12 mt-12 md:p-10">
        <MainTitle className="font-dotgothic16">PORTFOLIO</MainTitle>
      </div>

      <section className="flex flex-col mx-auto grow w-full max-w-6xl gap-12 pb-20">
        <SectionHeader
          title="MUSIC ALBUM ARTWORKS"
          description="Partnered with local and up-and-coming artists on their own cover artworks"
        />
        {albums.map((album) => (
          <AlbumSection key={album.id} album={album} />
        ))}

        <SectionHeader
          title="MULTIMEDIA REELS AND VISUALS"
          description="Videos and visuals edited and designed for artists and content creators"
        />
        {reels.map((video) => (
          <VideoSection key={video.id} video={video} />
        ))}

        <SectionHeader
          title="VISUALS"
          description="Visuals with a dreamy or surreal colours"
        />
        <section
          id="morevisuals-section"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-start mt-8"
        >
          {visuals.map((file) => (
            <VideoPlayer key={file} file={file} mode="loop" />
          ))}
        </section>
      </section>

      <Footer />
    </main>
  );
}