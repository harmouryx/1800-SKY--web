import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Header/>
        <section id="main-tittle-home-page" className=" border-4 border-solid border-red-800 border-l-0 flex flex-row justify-center items-center gap-4 p-6 ">
              <div id="main-title-div" className="">
              <MainTitle className="font-dotgothic16 ">1800 - SKY*</MainTitle>
              <Image src="/assets/icons/sky.svg" alt="" width={180} height={180}></Image>
              </div>
        </section>
              <Image src="/assets/icons/sky-face-2.svg" alt="" width={120} height={100}></Image>              
        <Footer/>
    </main>
  );
}
