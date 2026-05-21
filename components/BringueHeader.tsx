"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { anchor: "concept", label: "Concept" },
  { anchor: "services", label: "Formats" },
  { anchor: "vision", label: "Vision" },
  { anchor: "cities", label: "Villes" },
  { anchor: "gallery", label: "Photos" },
  { anchor: "videos", label: "Presse" },
];

export function BringueHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function href(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 sm:pt-2">
      <nav
        className={`w-full border-y border-white/10 bg-black/78 px-4 py-3 backdrop-blur-md transition sm:mx-auto sm:max-w-[1440px] sm:px-8 lg:px-12 ${
          hasScrolled ? "sm:border-white/10 sm:bg-black/82" : "sm:border-transparent sm:bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo/logo-header.png"
              alt="La Bringue"
              width={726}
              height={599}
              className="h-auto w-[58px] sm:w-[72px]"
              priority
            />
          </Link>

          <div className="hidden items-center gap-x-6 border-b border-white/10 pb-2 font-sans text-[10px] uppercase tracking-[0.32em] text-[#d8d8d8] sm:flex">
            {navLinks.map((link) => (
              <Link key={link.anchor} href={href(link.anchor)} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link
              href={href("contact")}
              className="rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.26em] text-black transition hover:bg-[#f4a3da]"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            className="relative h-10 w-10 rounded-full border border-white/15 text-white sm:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="absolute left-1/2 top-1/2 block h-4 w-5 -translate-x-1/2 -translate-y-1/2">
              <span className={`absolute left-0 top-0 h-px w-5 bg-white transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 bg-white transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 bg-white transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 text-right sm:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.anchor}
                href={href(link.anchor)}
                className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#d8d8d8]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={href("contact")}
              className="font-sans text-[11px] font-black uppercase tracking-[0.28em] text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
