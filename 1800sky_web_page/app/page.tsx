import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col box-border object-cover overflow-hidden text-[clamp(1rem,1vw,2rem)] min-h-screen ">
        
        {/* HEADER DEL SITIO  */} 

        <Header />

          <div className="flex-1 flex flex-col justify-evenly mr-4">

             {/*  MAIN TITLE DEL SITIO  */}
              <MainTitle className="font-dotgothic16 " 
                avatar={
                  <div>
                        <Image src="/assets/icons/sky.svg" alt="SKY avatar" width={100} height={100} className="w-auto h-auto"/>
                  </div>
                  }>
                1800 - SKY*
              </MainTitle>
                    </div>

      
            {/* DESCRIPCIÓN */}
            <div className="mx-auto">
                  <p>A website-portfolio
                  all designed by me,
                  for me</p>
            </div>
              

                 {/*  ASIDE IMAGE */}
               <aside className="flex flex-row">
                  <Image className="w-auto h-auto"src="/assets/icons/sky-face-2.svg" alt="" width={120} height={100}></Image>              
                </aside>


                 {/*  ABOUT UPDATED HERE PORQUE SE VE FEO SIN NFO EL HOME Y FUERA BOTON  */}
<Image className="w-auto h-auto" src="/assets/icons/sky-dark-img.svg" alt="" width={1648} height={108}></Image>

            <section className="flex flex-col grow w-full max-w-4xl px-6 py-12 md:py-20 gap-12" id="main-content">
                
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
        <Footer/>
    </main>
  );
}

