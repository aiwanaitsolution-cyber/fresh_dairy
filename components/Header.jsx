"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSite } from "./SiteProvider";
const links = [
  ["/", "Home"],
  ["/about-us", "About us"],
  ["/product", "Product"],
  ["/future-plans", "Future plans"],
  ["/gallery", "Gallery"],
];
export function BrandLogo() {
  return (
    <Link className="logo brand-logo" href="/" aria-label="FreshDay home">
      <img
        className="brand-mark"
        src="/assets/brand/freshday-mark.png"
        alt=""
        width="44"
        height="48"
      />
      <img
        className="brand-wordmark"
        src="/assets/brand/freshday-wordmark.png"
        alt="FreshDay. Priority is only for Purity."
        width="145"
        height="61"
      />
    </Link>
  );
}
export default function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const { bag, setCartOpen } = useSite();
  useEffect(() => {
    setMenu(false);
  }, [pathname]);
  useEffect(() => {
    const escape = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <>
      <Link className="skip" href="#main">
        Skip to content
      </Link>
      <div className="announcement">
        Something fresh is on its way.{" "}
        <Link href="/app">The FreshDay app is coming soon ↗</Link>
      </div>
      <header>
        <BrandLogo />
        <nav
          id="nav"
          aria-label="Main navigation"
          className={menu ? "open" : ""}
        >
          {links.map(([href, title]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setMenu(false)}
            >
              {title}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="bag"
            onClick={() => setCartOpen(true)}
            aria-label="Open your selection"
          >
            Your bag <span>{bag.length}</span>
          </button>
          <button
            id="menu"
            aria-label="Toggle navigation"
            aria-expanded={menu}
            aria-controls="nav"
            onClick={() => setMenu((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
