import Header from "@/components/Header"
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function About(){
    return(
        <main>
            <Header/>
            <Image src="/assets/icons/sky-face-3.svg" alt="" width={1034} height={100}></Image>
            <MainTitle className="font-dotgothic16">Portfolio</MainTitle>
            <h3 className="font-noto-serif text-lg"> MUSIC ALBUM ARTWORKS
                    <p className="font-sans text-sm"> Partnered with local and up-and-coming artists  on their own cover artworks </p>
            </h3>
            <section id="works-section">
            <iframe  
            title="works" 
            data-testid="embed-iframe" 
            src="https://open.spotify.com/embed/album/7qTmZkKR5iilhQkjado98c?utm_source=generator&si=d2f4d9ad7d334ff4" 
            width="100%" 
            height="352"  
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
            </iframe>
            <Image
              src="/assets/portfolio-works/bruklyn-idea_4.png"
              alt="kobe-artwork-cover-bruklyn"
              width={1080}
              height={1080}
            />
            </section>



            <section id="works-section">

            <iframe
            title="works" 
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/album/5x7sU2jdwMTI2ZvnU1sw4Q?utm_source=generator&si=cd5787d732884e47"
            width="100%"
            height="352"
            allow="autoplay; 
            clipboard-write; 
            encrypted-media; 
            fullscreen; 
            picture-in-picture" 
            loading="lazy">
                
            </iframe>
            <Image
              src="/assets/portfolio-works/musica_en_casa_alter_4.png"
              alt="kobe-artwork-cover-bruklyn"
              width={1080}
              height={1080}
            />
            <Image
              src="/assets/portfolio-works/back_cover_musica_en_casa.png"
              alt="kobe-artwork-cover-bruklyn"
              width={1080}
              height={1080}
            />
            </section>

            
            <Footer/>
        </main>
    );
}