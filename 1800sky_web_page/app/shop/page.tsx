import Header from "@/components/Header"
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function About(){
    return(
        <main>
            <Header/>
            <MainTitle className="font-dotgothic16">Shop</MainTitle>
            <h1> This page is currently under construction, stay tuned for the official release</h1>
            <Image src="/assets/icons/sky-face-1.svg" alt="" width={1034} height={100}></Image>
            <Footer/>
        </main>
    );
}