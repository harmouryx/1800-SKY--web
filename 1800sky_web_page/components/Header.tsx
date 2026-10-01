"use client";

import Link from "next/link";

export default function Header() {

    return (
        <header className=" border-2 border-solid  border-red-500">
            <nav className="p-8">
                <ul className="flex flex-wrap justify-between items-center gap-0.5 ">
                    <li className="font-noto-serif p-2"><Link href="/">About</Link></li>
                    <li className="font-noto-serif p-2"><Link href="/portfolio">Portfolio</Link></li>
                    <li className="font-noto-serif p-2"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header >
    );
}