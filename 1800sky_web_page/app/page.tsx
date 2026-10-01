import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col box-border object-cover overflow-x-clip text-[clamp(1rem,1vw,2rem)] min-h-screen transition-transform duration-300 ease-in-out">

      {/* HEADER DEL SITIO  */}

      <Header />

      <div className="m-4 flex flex-1 flex-col border-2 border-amber-50 rounded transition-shadow duration-300 ease-out hover:shadow-[0_0_32px_2px_rgba(253,253,253,0.45)] ">
        {/* MAIN TITLE DEL SITIO */}
        <MainTitle className="font-dotgothic16"
          avatar={
            <div>
              <Image src="/assets/icons/sky.svg" alt="SKY avatar" width={100} height={100} className="w-auto h-auto rounded" />
            </div>
          }>
          1800 - SKY*
        </MainTitle>
      </div>




      {/*  ABOUT UPDATED HERE PORQUE SE VE FEO SIN NFO EL HOME Y FUERA BOTON  */}
      <Image className="w-auto h-auto" src="/assets/icons/sky-dark-img.svg" alt="" width={1648} height={108}></Image>

      <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">

        <section className="flex w-full max-w-4xl flex-col gap-12 px-6 py-12 md:py-20" id="main-content">
          <MainTitle className="font-dotgothic16 antialiased">About</MainTitle>

          {/* Sección: WHO AM I? */}
          <article className="flex flex-col gap-3">
            <h2 className="font-noto-serif text-lg">WHO AM I?
              <p className="font-sans text-sm"> I am a multidisciplinary  human, sometimes design some graphic stuff like the images presented,
                other days can build software using frameworks & modern techniques, and even I edit visual effects (vfx)
                or direct a campaign from zero, so for that reason. I let  my skills here so you can check what I know already.  </p>
            </h2>
          </article>

          <article className="flex flex-col gap-4">

            <h2 className="font-noto-serif text-lg">TOOLS:
              <p className="font-sans text-sm"> <strong>For SWE:</strong> C/C++, Java, Python, SQL, JavaScript, PowerShell, Git & GitHub </p>
              <p className="font-sans text-sm"> <strong> For Graphic Design & Multimedia:</strong> Adobe Suite (Ps, Ai, Ae, Pr), Figma </p>
            </h2>
          </article>


        </section>

        <section className="flex w-full items-center px-6 py-8 lg:py-20" id="aside-content">
          <Image src="/assets/portfolio-works/visuals/opentowork.gif" alt="Open To Work Worldwide Flyer" width={1080} height={1350} unoptimized className="h-auto w-full max-w-75" />
        </section>
      </div>
      <Footer />
    </main>
  );
}

