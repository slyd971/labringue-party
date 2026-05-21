"use client";

import Link from "next/link";
import { MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import { pressKit } from "@/data/config";
import { SectionTitle } from "./SectionTitle";

export function CitiesSection() {
  return (
    <section className="bg-white py-24 text-black md:py-32">
      <div className="section-shell">
        <SectionTitle
          eyebrow={pressKit.sectionCopy.cities.eyebrow}
          title={pressKit.sectionCopy.cities.title}
          kicker={pressKit.sectionCopy.cities.kicker}
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_360px]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative min-h-[640px] overflow-hidden bg-black"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(255,0,145,.24),transparent_34%),radial-gradient(circle_at_38%_82%,rgba(217,255,0,.14),transparent_26%)]" />
            <svg
              aria-hidden="true"
              viewBox="0 0 900 680"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M406 62 504 82 570 140 558 226 604 280 568 354 604 432 548 524 458 558 374 526 322 452 256 428 286 336 246 264 292 180 354 152Z"
                fill="rgba(255,255,255,.92)"
                stroke="#FF9DDE"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M280 472 376 526 458 558 532 544 610 584 678 592 724 632 674 672 548 654 420 646 306 628 198 580 176 516Z"
                fill="rgba(255,255,255,.86)"
                stroke="#FF9DDE"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M592 486 642 466 674 494 650 528 602 530Z"
                fill="rgba(255,255,255,.78)"
                stroke="#FF9DDE"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path d="M404 60 406 558" stroke="rgba(0,0,0,.08)" strokeWidth="2" />
              <path d="M176 516 724 632" stroke="rgba(0,0,0,.08)" strokeWidth="2" />
            </svg>

            <div className="absolute left-6 top-6 z-10 flex items-center gap-3 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime text-black">
                <MapPinned className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[10px] font-black uppercase tracking-[0.28em] text-lime">
                  Carte interactive
                </span>
                <span className="display-type block text-4xl uppercase leading-none">France / Espagne</span>
              </span>
            </div>

            {pressKit.cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035, type: "spring", stiffness: 220, damping: 18 }}
                className="absolute z-20"
                style={{
                  left: `${city.mapPosition.x}%`,
                  top: `${city.mapPosition.y}%`,
                  transform: "translate(-50%, -50%)"
                }}
              >
                <Link
                  href={`/cities/${city.slug}`}
                  aria-label={`Voir la page La Bringue ${city.name}`}
                  className="group relative flex items-center justify-center"
                >
                  <span className="absolute h-8 w-8 rounded-full bg-magenta/25 opacity-80 transition group-hover:scale-[2.1] group-hover:bg-lime/20" />
                  <span className="relative h-4 w-4 rounded-full border-2 border-black bg-magenta shadow-neon transition group-hover:scale-125 group-hover:bg-lime" />
                  <span
                    className={`pointer-events-none absolute whitespace-nowrap rounded-full border border-white/18 bg-black/86 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-0 shadow-neon backdrop-blur transition group-hover:opacity-100 ${
                      city.mapPosition.side === "left"
                        ? "right-6"
                        : city.mapPosition.side === "bottom"
                          ? "top-6"
                          : "left-6"
                    }`}
                  >
                    {city.name}
                    <span className="ml-2 text-lime">{city.editions}</span>
                  </span>
                </Link>
              </motion.div>
            ))}

            <div className="absolute bottom-5 left-5 right-5 z-10 grid gap-2 text-white md:grid-cols-3">
              <div className="border border-white/12 bg-white/[0.06] p-4 backdrop-blur">
                <p className="display-type text-5xl leading-none text-lime">+10</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/72">villes implantées</p>
              </div>
              <div className="border border-white/12 bg-white/[0.06] p-4 backdrop-blur">
                <p className="display-type text-5xl leading-none text-magenta">2019</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/72">départ à Paris</p>
              </div>
              <div className="border border-white/12 bg-white/[0.06] p-4 backdrop-blur">
                <p className="display-type text-5xl leading-none text-white">2024</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-white/72">Bruxelles, Nantes, Cannes</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="border border-black/10 bg-black p-5 text-white lg:max-h-[640px] lg:overflow-auto"
          >
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-lime">
              Cliquez une ville
            </p>
            <div className="grid gap-2">
              {pressKit.cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/cities/${city.slug}`}
                  className="group flex items-center justify-between gap-4 border border-white/10 bg-white/[0.04] p-4 transition hover:border-magenta hover:bg-magenta/10"
                >
                  <span>
                    <span className="display-type block text-4xl uppercase leading-none text-white group-hover:text-lime">
                      {city.name}
                    </span>
                    <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-white/48">
                      {city.editions}
                    </span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-magenta group-hover:text-lime">
                    Ouvrir
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
