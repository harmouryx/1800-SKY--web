import Link from "next/link";

export default function Header () {
    return(
        <header className="bg-neutral-800">
            <nav className="items-center py-6 px-8">
                <div className="flex-1 shrink">
                <ul className="flex justify-between gap">
                    <li className="font-noto-serif"><Link href="/">Home</Link></li>
                    <li className="font-noto-serif"><Link href="/about">About</Link></li>
                    <li className="font-noto-serif"><Link href="/portfolio">Portfolio</Link></li>
                    <li className="font-noto-serif"><Link href="/shop">Shop</Link></li>
                    <li className="font-noto-serif"><Link href="/contact">Contact</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    );
}