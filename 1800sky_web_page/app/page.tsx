import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
        
        {/* HEADER DEL SITIO  */} 
        <Header />

        <section className="flex-1 flex flex-row" id="main-content"> {/*  Contenedor principal */} 

          <div className="flex-1 flex flex-col justify-evenly mr-4">

             {/*  MAIN TITLE DEL SITIO  */}
              <section className="flex box-content" id="title-section">
                <div className="border-4 border-solid border-red-800 border-l-0">
              <MainTitle className="font-dotgothic16 " 
                avatar={
                  <div>
                        <Image src="/assets/icons/sky.svg" alt="SKY avatar" width={100} height={100} className="w-48 h-48"/>
                  </div>
                  }>
                1800 - SKY*
              </MainTitle>
                    </div>
              </section>

      
            {/* DESCRIPCIÓN */}
            <div className="text-4xl mt-8 px-4">
                  <p>A website-portfolio</p>
                  <p>all designed by me,</p>
                  <p>for me</p>
            </div>

              </div>

                 {/*  ASIDE IMAGE */}
               <aside className=" flex flex-col ">
                  <Image className="w-auto h-auto"src="/assets/icons/sky-face-2.svg" alt="" width={120} height={100}></Image>              
                </aside>

          </section>
        <Footer/>
    </main>
  );
}

