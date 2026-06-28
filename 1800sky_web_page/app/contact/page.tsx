import Header from "@/components/Header"
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import ContactForm from "@/components/forms/ContactForm";

export default function About(){
        
    return(
        <main>
            <Header/>
            <MainTitle className="font-dotgothic16">Contact Info</MainTitle>
            <ContactForm></ContactForm>
            <ul>
                <li><a className="font-dotgothic16 underline" target="_blank" rel="noopener" href="https://www.instagram.com/skytrayzx"> Via Instagram </a></li>
                <li><a className="font-dotgothic16 underline" href="mailto:dreamooonium@gmail.com">Via Email</a></li>
            </ul>
            <Footer/>
        </main>
    );
}