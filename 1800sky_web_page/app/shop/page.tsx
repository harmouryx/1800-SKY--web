import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <MainTitle className="font-dotgothic16">Shop</MainTitle>

        <div className="max-w-2xl rounded-lg border border-neutral-800 bg-neutral-950/70 p-4 sm:p-6">
          <h1 className="text-base leading-relaxed text-neutral-300 sm:text-lg">
            This page is currently under construction, stay tuned for the official release!
          </h1>
        </div>

        <Image
          className="h-auto w-full max-w-3xl object-contain"
          src="/assets/icons/sky-face-1.svg"
          alt="Sky illustration"
          width={1034}
          height={100}
        />
      </section>

      <Footer />
    </main>
  );
}