"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { pressKit } from "@/data/config";
import { BringueHeader } from "./BringueHeader";
import { BringueTestimonialsSection } from "./BringueTestimonialsSection";
import { PressSection } from "./PressSection";
import { SectionReveal } from "./SectionReveal";

function BgVideo({ src, poster, className }: { src: string; poster?: string; className?: string }) {
  return (
    <video
      key={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 2c.37 3.12 2.14 4.98 5.4 5.18v3.52a9.42 9.42 0 0 1-5.32-1.68v6.5c0 3.27-2.01 6.48-6.42 6.48C6.34 22 3.7 19.45 3.7 15.98c0-3.82 3.01-6.32 6.72-6.2.33 0 .66.04.98.11v3.63a4.14 4.14 0 0 0-1.14-.16c-1.63 0-2.8 1.03-2.8 2.53 0 1.36.96 2.36 2.43 2.36 1.66 0 2.82-1 2.82-3.05V2h3.89Z" />
    </svg>
  );
}

function AnimatedStatValue({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const match = value.match(/^(.*?)(\d+(?:[.,]\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = Number(match?.[2]?.replace(",", ".") ?? 0);
  const suffix = match?.[3] ?? value;
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, target, {
      duration: 1.45,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        const formatted = Number.isInteger(target)
          ? Math.round(latest).toString()
          : latest.toFixed(1).replace(".", ",");

        setDisplayValue(formatted);
      }
    });

    return () => controls.stop();
  }, [delay, isInView, target]);

  return (
    <motion.p
      ref={ref}
      initial={{ letterSpacing: "0.02em" }}
      whileInView={{ letterSpacing: "0.08em" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.12 + delay }}
      className="font-display text-[3rem] uppercase leading-none text-black sm:text-[4.4rem] lg:text-[5.4rem]"
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.p>
  );
}

export function BringuePressKit() {

  return (
    <main className="overflow-x-clip bg-[#050505] text-white">
      <BringueHeader />

      <section className="relative flex min-h-[78svh] items-center justify-center overflow-hidden pt-16 sm:min-h-[82vh]">
        <BgVideo
          src={pressKit.heroVideo.src}
          poster={pressKit.heroVideo.poster}
          className="absolute inset-0 h-full w-full object-cover object-[52%_38%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,145,0.1),rgba(0,0,0,0.46)),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.56))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,145,0.14),transparent_34%,transparent_66%,rgba(255,36,128,0.12))]" />

        <SectionReveal className="relative z-10 px-4 text-center sm:px-6">
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#f4a3da] sm:text-xs">
            {pressKit.badge}
          </p>
          <h1 className="sr-only">{pressKit.eventName}</h1>
          <Image
            src="/logo/Fichier%2034BRINGUE_PARTY_STAMP.png"
            alt={pressKit.eventName}
            width={920}
            height={287}
            className="mx-auto mt-6 h-auto w-[min(84vw,680px)] drop-shadow-[0_0_42px_rgba(255,0,145,0.42)]"
            priority
          />
          <p className="mt-5 font-sans text-[0.8rem] uppercase tracking-[0.22em] text-[#eeeeee] sm:text-[1.06rem] sm:tracking-[0.38em]">
            {pressKit.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#c8c8c8] sm:text-[1.05rem] sm:leading-8">
            {pressKit.description}
          </p>
        </SectionReveal>
      </section>

      <section className="shell border-b border-white/10 py-4" aria-label="Réseaux sociaux">
        <SectionReveal className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
          <a
            href="https://instagram.com/labringue"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram La Bringue"
            className="inline-flex items-center gap-3 font-sans text-[10px] font-black uppercase tracking-[0.24em] text-white transition hover:scale-105 hover:text-[#f4a3da]"
          >
            <Instagram className="size-6" />
            Instagram
          </a>
          <a
            href={pressKit.contact.tiktok}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="TikTok La Bringue"
            className="inline-flex items-center gap-3 font-sans text-[10px] font-black uppercase tracking-[0.24em] text-white transition hover:scale-105 hover:text-[#f4a3da]"
          >
            <TikTokIcon className="size-6" />
            TikTok
          </a>
        </SectionReveal>
      </section>

      <section
        className="relative overflow-hidden bg-[#f4a3da] py-10 text-black sm:py-12 lg:py-14"
        aria-label="Chiffres clés"
      >
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(0,0,0,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.12)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="shell relative">
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
            {pressKit.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.72, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="px-3 text-center"
              >
                <AnimatedStatValue value={stat.value} delay={index * 0.08} />
                <p className="mx-auto mt-3 whitespace-nowrap font-sans text-[9px] font-black uppercase leading-5 tracking-[0.10em] text-black/72 sm:max-w-[18ch] sm:text-[11px] sm:tracking-[0.22em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="concept" className="shell py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <div className="overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={pressKit.concept.image}
                alt={pressKit.concept.title}
                width={1200}
                height={900}
                className="h-auto w-full object-cover grayscale"
                priority
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="min-w-0 space-y-7">
            <p className="editorial-kicker">{pressKit.concept.eyebrow}</p>
            <h2 className="max-w-[24ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
              {pressKit.concept.title}
            </h2>
            <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
              {pressKit.concept.body.map((paragraph) => (
                <p key={paragraph} className="text-[0.98rem] leading-7 text-[#c5c5c5] sm:text-[1.02rem] sm:leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="border-l border-[#ff0091] pl-5 text-[1.05rem] italic leading-8 text-[#f1d3e7]">
              {pressKit.concept.quote}
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden border-t border-white/10">
        <div className="lg:grid lg:min-h-[88vh] lg:grid-cols-2">
          <SectionReveal className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
            <Image
              src={pressKit.genesis.image}
              alt={pressKit.genesis.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.32))] lg:bg-[linear-gradient(to_right,transparent_55%,rgba(5,5,5,0.72))]" />
          </SectionReveal>

          <SectionReveal delay={0.12} className="flex flex-col justify-center bg-[#050505] px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
            <p className="editorial-kicker">{pressKit.sectionCopy.artists.eyebrow}</p>
            <h2 className="mt-5 font-display text-[2rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.8rem] lg:text-[3.2rem]">
              {pressKit.genesis.title}
            </h2>

            <ul className="mt-8 space-y-5 border-t border-white/10 pt-8">
              {pressKit.genesis.body.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-[0.58em] h-[5px] w-[5px] shrink-0 rounded-full bg-[#ff0091]" />
                  <span className="text-[1rem] leading-7 text-[#c2c2c2] sm:text-[1.06rem] sm:leading-8">{item}</span>
                </motion.li>
              ))}
            </ul>

            <blockquote className="mt-9 border-l-2 border-[#ff0091] pl-5 text-[0.92rem] italic leading-7 text-[#f1d3e7]">
              {pressKit.genesis.quote}
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* Activations */}
      <section id="vision" className="border-t border-white/10 bg-[#0d0d0d] py-14 sm:py-18 lg:py-24">
        <SectionReveal className="shell">
          <p className="editorial-kicker">Vision</p>
          <h2 className="mt-4 max-w-[28ch] font-display text-[2rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3.2rem]">
            {pressKit.sectionCopy.artists.title}
          </h2>
        </SectionReveal>

        <div className="shell mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {pressKit.collaborations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col overflow-hidden border border-white/10"
            >
              <div className="flex flex-col gap-3 bg-[#111] p-5 lg:p-6">
                <p className="font-sans text-[9px] font-black uppercase tracking-[0.28em] text-[#ff0091]">
                  {item.role}
                </p>
                <p className="font-display text-[1.7rem] uppercase leading-none tracking-[0.04em] text-white">
                  {item.name}
                </p>
                <p className="font-sans text-[0.84rem] leading-6 text-[#888]">{item.note}</p>
              </div>
              <div className="shrink-0 bg-[#111]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="cities" className="relative overflow-hidden bg-[#151515] py-10 sm:py-18 lg:py-24" aria-label="Timeline des villes">
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#ff0091]/45" />
        <SectionReveal className="shell">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="editorial-kicker">{pressKit.sectionCopy.cities.eyebrow}</p>
              <h2 className="mt-4 max-w-[22ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
                {pressKit.sectionCopy.cities.title}
              </h2>
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.26em] text-white/28">
                Chaque ville possède son expérience dédiée.
              </p>
            </div>
            <motion.p
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden shrink-0 pt-1 text-right font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#ff0091] sm:block sm:max-w-[16ch]"
            >
              Clique sur une ville pour découvrir son univers
            </motion.p>
          </div>

          <div className="relative mt-8 sm:mt-16 lg:mt-24">

            {/* ── Desktop horizontal timeline ── */}
            <div className="relative hidden overflow-x-auto md:block">
              <div className="relative px-2 py-28" style={{ minWidth: `${pressKit.cities.length * 7}rem` }}>

              {/* Bar with shimmer sweep */}
              <div className="absolute left-0 right-0 top-1/2 h-3 -translate-y-1/2 overflow-hidden rounded-full bg-[#f4a3da]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
              </div>

              <div className="grid" style={{ gridTemplateColumns: `repeat(${pressKit.cities.length}, minmax(0, 1fr))` }}>
                {pressKit.cities.map((city, index) => {
                  const isTop = index % 2 === 0;

                  return (
                    <Link
                      key={city.slug}
                      href={`/cities/${city.slug}`}
                      className="group relative flex min-h-[11rem] cursor-pointer items-center justify-center"
                      aria-label={`Ouvrir la page La Bringue ${city.name}`}
                    >
                      {/* Idle pulse ring — staggered */}
                      <motion.span
                        className="absolute left-1/2 top-1/2 z-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff0091]/50"
                        animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          delay: index * 0.38,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Dot */}
                      <span className="absolute left-1/2 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f4a3da] shadow-[0_0_0_0_rgba(255,0,145,0)] transition-all duration-300 group-hover:scale-[1.3] group-hover:bg-white group-hover:shadow-[0_0_22px_8px_rgba(255,0,145,0.45)]" />

                      {/* Stick */}
                      <span
                        className={`absolute left-1/2 z-0 h-14 w-3 -translate-x-1/2 rounded-full bg-[#f4a3da] transition-all duration-300 group-hover:bg-white/80 ${
                          isTop ? "bottom-1/2 mb-2" : "top-1/2 mt-2"
                        }`}
                      />

                      {/* City label */}
                      <span
                        className={`absolute left-1/2 w-[12rem] -translate-x-1/2 text-center transition-all duration-300 ${
                          isTop ? "bottom-[calc(50%+4.8rem)]" : "top-[calc(50%+4.8rem)]"
                        }`}
                      >
                        <span className="block font-display text-[2rem] uppercase leading-none tracking-[0.06em] text-white transition-all duration-300 group-hover:text-[#f4a3da]">
                          {city.name}
                        </span>
                        <span className="mt-1 block font-sans text-[0.9rem] font-black lowercase tracking-[0.08em] text-white/60 transition-all duration-300 group-hover:text-white/90">
                          {city.editions}
                        </span>
                      </span>

                      {/* Tooltip "Explorer ↗" — opposite side from label */}
                      <span
                        className={`pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap font-sans text-[8px] font-black uppercase tracking-[0.28em] text-[#f4a3da] opacity-0 transition-all duration-300 group-hover:opacity-100 ${
                          isTop
                            ? "top-[calc(50%+1.4rem)] translate-y-1 group-hover:translate-y-0"
                            : "bottom-[calc(50%+1.4rem)] -translate-y-1 group-hover:translate-y-0"
                        }`}
                      >
                        Explorer ↗
                      </span>
                    </Link>
                  );
                })}
              </div>
              </div>
            </div>

            {/* ── Mobile vertical list ── */}
            <div className="relative md:hidden">
              <div className="absolute bottom-0 left-2 top-0 w-1.5 -translate-x-1/2 rounded-full bg-[#f4a3da]" />
              <div className="absolute bottom-0 left-[calc(50%+1rem)] top-0 w-1.5 -translate-x-1/2 rounded-full bg-[#f4a3da]" />
              <div className="grid grid-cols-2 gap-x-4">
                {[
                  pressKit.cities.slice(0, Math.ceil(pressKit.cities.length / 2)),
                  pressKit.cities.slice(Math.ceil(pressKit.cities.length / 2))
                ].map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-3">
                    {column.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="group relative grid cursor-pointer grid-cols-[1.25rem_1fr] gap-2"
                        aria-label={`Ouvrir la page La Bringue ${city.name}`}
                      >
                        <span className="relative z-10 mt-1.5 h-4 w-4 rounded-full bg-[#f4a3da] shadow-[0_0_0_0_rgba(255,0,145,0)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_12px_4px_rgba(255,0,145,0.4)]" />
                        <span className="block border-b border-white/10 pb-3">
                          <span className="block font-display text-[1.42rem] uppercase leading-none tracking-[0.05em] text-white transition-all duration-300 group-hover:text-[#f4a3da]">
                            {city.name}
                          </span>
                          <span className="mt-0.5 block font-sans text-[0.68rem] font-black lowercase tracking-[0.07em] text-[#f4a3da]/70 transition-all duration-300 group-hover:text-[#f4a3da]">
                            {city.editions} · Explorer ↗
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between gap-4">
            <p className="font-sans text-[0.9rem] font-black lowercase tracking-[0.04em] text-[#f4a3da] sm:text-[1.55rem]">
              ... et plus à venir
            </p>
            <p className="font-display text-[1.65rem] uppercase leading-none tracking-[0.02em] text-[#f4a3da] sm:text-[3.4rem]">
              La Bringue
            </p>
          </div>
        </SectionReveal>
      </section>

      <section id="gallery" className="shell py-10 sm:py-12 lg:py-16">
        <SectionReveal className="flex flex-col gap-5 border-y border-white/10 py-8 sm:gap-6 sm:py-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="editorial-kicker">{pressKit.sectionCopy.gallery.eyebrow}</p>
            <h2 className="mt-4 max-w-[22ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
              {pressKit.sectionCopy.gallery.title}
            </h2>
            <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-[#c4c4c4]">
              {pressKit.sectionCopy.gallery.kicker}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          {pressKit.gallery.slice(0, 5).map((image, index) => (
            <SectionReveal key={image.src} delay={index * 0.05} className={index === 0 ? "sm:row-span-2" : undefined}>
              <article className="group relative overflow-hidden border border-white/10 bg-black">
                <div className={index === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 40vw" : "(max-width: 1024px) 100vw, 28vw"}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.58))]" />
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <BringueTestimonialsSection />

      <PressSection />

      <section id="contact" className="bg-[#f4a3da] py-10 text-[#151015] sm:py-14 lg:py-18">
        <SectionReveal className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.28em] text-[#151015]/70 sm:text-xs">
                {pressKit.contact.eyebrow}
              </p>
              <h2 className="mt-4 max-w-[22ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-[#151015] sm:text-[2.6rem] lg:text-[3rem]">
                {pressKit.contact.title}
              </h2>
              <p className="mt-4 max-w-[30rem] font-sans text-[1.02rem] leading-7 text-[#151015] sm:text-[1.12rem] sm:leading-8">
                {pressKit.contact.body}
              </p>
            </div>

            <div className="space-y-3">
              {pressKit.contact.people.map((person, index) => (
                <motion.a
                  key={person.email}
                  href={`mailto:${person.email}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 8 }}
                  className="group grid gap-4 border-2 border-[#151015] bg-[#f4a3da] p-4 transition hover:bg-[#ffb6e5] sm:grid-cols-[9.5rem_1fr] sm:items-center sm:p-5 lg:p-6"
                >
                  <span className="relative block aspect-[1.14] w-full overflow-hidden bg-[#151015]/10 sm:aspect-square">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 9.5rem"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="block min-w-0">
                    <span className="block font-display text-[2.35rem] uppercase leading-[0.9] tracking-[0.05em] text-[#151015] sm:text-[3rem] lg:text-[3.55rem]">
                      {person.name}
                    </span>
                    <span className="mt-3 block font-sans text-[0.9rem] font-black uppercase tracking-[0.12em] text-[#151015] sm:text-[1.08rem]">
                      {person.role}
                    </span>
                    <span className="mt-3 flex items-center gap-2 font-sans text-[0.9rem] text-[#151015] sm:text-[1.05rem]">
                      <Mail className="size-4 shrink-0" />
                      <span className="truncate">{person.email}</span>
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
