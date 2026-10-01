"use client";

import Link from "next/link";

export default function Header() {

    return (
        <header className="sticky top-0 z-50 bg-amber-50 shadow-xl">
            <nav className=" p-8">
                <ul className="p-2 flex flex-wrap justify-evenly items-center gap-0.5 text-gray-700 hover:text-black">
                    <li className="font-noto-serif hover:font-bold"><Link href="/">About</Link></li>
                    <li className="font-noto-serif hover:font-bold "><Link href="/portfolio">Portfolio</Link></li>
                    <li className="font-noto-serif hover:font-bold "><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header >
    );
}