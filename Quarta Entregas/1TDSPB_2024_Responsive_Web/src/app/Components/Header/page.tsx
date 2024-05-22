"use client";
import Link from "next/link";
import "./Header.css";
import { usePathname } from 'next/navigation';



const Header = () => {

    const pathname = usePathname();
    const isSpecialPage = ["/Pages/Faq", "/Pages/QuemSomos", "/Pages/NossoTime"].includes(pathname);

    return (
        <>
            <header className={`cabecalho ${isSpecialPage ? "cabecalho-cor-branca" : ""}`}>
                <nav className="menu">
                    <input type="checkbox" className={`menu-faketrigger ${isSpecialPage ? "menu-faketrigger-cor-branca" : ""}`} />
                    <div className={`menu-lines ${isSpecialPage ? "menu-lines-cor-preta" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`links-de-navegacao ${isSpecialPage ? "links-de-navegacao-cor-branca" : ""}`}>
                        <li><Link className={`link ${isSpecialPage ? "link-cor-preta" : ""}`} href="/">Home</Link></li>
                        <li><Link className={`link ${isSpecialPage ? "link-cor-preta" : ""}`} href="/Pages/Produtos">Produtos</Link></li>
                        <li><Link className={`link ${isSpecialPage ? "link-cor-preta" : ""}`} href="/Pages/QuemSomos">Quem Somos</Link></li>
                        <li><Link className={`link ${isSpecialPage ? "link-cor-preta" : ""}`} href="/Pages/Faq">FAQ</Link></li>
                        <li><Link className={`link ${isSpecialPage ? "link-cor-preta" : ""}`} href="/Pages/NossoTime">Nosso Time</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header;