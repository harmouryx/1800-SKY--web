import Link from "next/link";

export default function Header () {
    return(
        <header className=" border border-b-olive-50">
            <nav className="p-4">
                <ul className="flex flex-wrap justify-between items-center gap-1 ">
                    <li className="font-noto-serif p-2"><Link href="/">About</Link></li>
                    <li className="font-noto-serif p-2"><Link href="/portfolio">Portfolio</Link></li>
                    <li className="font-noto-serif p-2"><Link href="/shop">Shop</Link></li>
                    <li className="font-noto-serif p-2"><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}