import Link from "next/link";

export default function Header () {
    return(
        <header>
            <nav className="flex  ">
                <ul className="flex justify-items-center gap-20 ">
                    <li className="font-noto-serif"><Link href="/">Home</Link></li>
                    <li className="font-noto-serif"><Link href="/about">About</Link></li>
                    <li className="font-noto-serif"><Link href="/portfolio">Portfolio</Link></li>
                    <li className="font-noto-serif"><Link href="/shop">Shop</Link></li>
                    <li className="font-noto-serif"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}