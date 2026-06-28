import Header from "@/components/Header"
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About(){
    return(
        <main>
            <Header/>
                <Image src="/assets/icons/sky-dark-img.svg" alt="" width={1648} height={108}></Image>
            <MainTitle className="font-dotgothic16">About</MainTitle>
                <h3 className="font-noto-serif text-lg">WHO AM I?
                    <p className="font-sans text-sm"> I am a multidisciplinary  human, sometimes design some graphic stuff like the images presented,
                        other days can build software using frameworks & modern techniques, and even I edit visual effects (vfx) 
                        or direct a campaign from zero, so for that reason. I let  my skills here so you can check what I know already.  </p>
                </h3>
                <h3 className="font-noto-serif text-lg">TOOLS:
                    <p className="font-sans text-sm"> <strong>For SWE:</strong> C/C++, Java, Python, SQL, JavaScript, PowerShell, Git & GitHub </p>
                    <p className="font-sans text-sm"> <strong> For Graphic Design & Multimedia:</strong> Adobe Suite (Ps, Ai, Ae, Pr), Figma </p>
                </h3>
            <Footer/>
        </main>
    );
}