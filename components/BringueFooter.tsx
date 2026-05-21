import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { pressKit } from "@/data/config";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 2c.37 3.12 2.14 4.98 5.4 5.18v3.52a9.42 9.42 0 0 1-5.32-1.68v6.5c0 3.27-2.01 6.48-6.42 6.48C6.34 22 3.7 19.45 3.7 15.98c0-3.82 3.01-6.32 6.72-6.2.33 0 .66.04.98.11v3.63a4.14 4.14 0 0 0-1.14-.16c-1.63 0-2.8 1.03-2.8 2.53 0 1.36.96 2.36 2.43 2.36 1.66 0 2.82-1 2.82-3.05V2h3.89Z" />
    </svg>
  );
}

export function BringueFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-10 sm:py-12">
      <div className="shell">

        {/* Top row: logo + sitemap + contact + socials */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Image
              src="/logo/logo-villes.png"
              alt="La Bringue"
              width={900}
              height={182}
              className="h-auto w-28 brightness-0 invert sm:w-36"
            />
            <p className="mt-3 font-sans text-[0.82rem] leading-6 text-[#666]">
              Girls Only Party — France, Belgique & Luxembourg
            </p>
          </div>

          {/* Plan du site */}
          <div>
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white">
              Plan du site
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Concept", href: "/#concept" },
                { label: "Formats", href: "/#services" },
                { label: "Villes", href: "/#cities" },
                { label: "Galerie", href: "/#gallery" },
                { label: "Presse", href: "/#press" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[0.82rem] text-[#666] transition hover:text-[#f4a3da]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Villes */}
          <div>
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white">
              Villes
            </p>
            <ul className="mt-3 space-y-2">
              {pressKit.cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/cities/${city.slug}`}
                    className="font-sans text-[0.82rem] text-[#666] transition hover:text-[#f4a3da]"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + socials */}
          <div className="space-y-6">
            <div>
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white">
                Contact
              </p>
              <a
                href={`mailto:${pressKit.contact.email}`}
                className="mt-1.5 block font-sans text-[0.82rem] text-[#666] transition hover:text-[#f4a3da]"
              >
                {pressKit.contact.email}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/labringue"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram La Bringue"
                className="inline-flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#666] transition hover:text-[#f4a3da]"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
              <a
                href={pressKit.contact.tiktok}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok La Bringue"
                className="inline-flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#666] transition hover:text-[#f4a3da]"
              >
                <TikTokIcon className="size-4" />
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[10px] tracking-[0.1em] text-[#3a3a3a]">
            © {new Date().getFullYear()} La Bringue — Tous droits réservés
          </p>

          <a
            href="https://presskit.fr"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white/30 transition hover:text-white/60"
          >
            <span>Powered by</span>
            <span className="border border-white/20 px-2 py-0.5 text-white/50">presskit.fr</span>
          </a>

          <p className="font-sans text-[10px] font-black uppercase tracking-[0.18em] text-[#3a3a3a]">
            Safe Place
          </p>
        </div>
      </div>
    </footer>
  );
}
