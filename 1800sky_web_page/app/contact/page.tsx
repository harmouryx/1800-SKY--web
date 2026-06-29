import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";
import MainTitle from "@/components/MainTitle";

export default function Contact() {
    return(
        <main className="flex flex-col min-h-screen bg-black text-white">
            <Header/>
            
            <section id="contact-layout" className="flex-1 flex flex-col md:flex-row max-w-6xl w-full mx-auto px-6 py-12 md:py-24 gap-12 md:gap-20 items-start justify-between">
                
                <article id="contact-info-panel" className="flex-1 flex flex-col justify-between h-full gap-8">
                    <header id="contact-title-container" className="flex flex-col">
                        <MainTitle className="font-dotgothic16 text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none uppercase tracking-tight select-none">
                            CONTACT<br />INFO
                        </MainTitle>
                    </header>
                    
                    <nav id="contact-social-links" className="mt-8 md:mt-16">
                        <ul className="flex flex-col gap-4 font-dotgothic16 text-2xl sm:text-3xl">
                            <li>
                                <a 
                                    className="text-red-700 hover:text-red-500 underline decoration-2 underline-offset-8 transition-colors" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://www.instagram.com/skytrayzx"
                                >
                                    Vía Instagram
                                </a>
                            </li>
                            <li>
                                <a 
                                    className="text-red-700 hover:text-red-500 underline decoration-2 underline-offset-8 transition-colors" 
                                    href="mailto:dreamooonium@gmail.com"
                                >
                                    Vía Email
                                </a>
                            </li>
                        </ul>
                    </nav>
                </article>

                <aside id="contact-form-panel" className="flex-1 w-full max-w-md">
                    <ContactForm />
                </aside>

            </section>
            
            <Footer/>
        </main>
    );
}