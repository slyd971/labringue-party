"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram } from "lucide-react";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { bringueKit } from "@/data/labringue";
import { SectionReveal } from "./SectionReveal";

const navLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#format", label: "Format" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

function BgVideo({
  src,
  poster,
  className,
  lazy = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  lazy?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(!lazy);

  useEffect(() => {
    if (!lazy) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy]);

  useEffect(() => {
    if (loaded && ref.current) {
      ref.current.play().catch(() => {});
    }
  }, [loaded]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload={lazy ? "none" : "metadata"}
      poster={poster}
      className={className}
      aria-hidden="true"
    >
      {loaded && <source src={src} type="video/mp4" />}
    </video>
  );
}

function AnimatedStatValue({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.65 });
  const match = value.match(/^(.*?)(\d+(?:[.,]\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = Number(match?.[2]?.replace(",", ".") ?? 0);
  const suffix = match?.[3] ?? value;
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.25,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplayValue(Math.round(latest).toString()),
    });
    return () => controls.stop();
  }, [delay, isInView, target]);

  return (
    <p
      ref={ref}
      className="font-bebas text-[4.1rem] uppercase leading-none text-white sm:text-[5.8rem] lg:text-[7rem]"
    >
      {prefix}
      {displayValue}
      {suffix}
    </p>
  );
}

function BringueHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-6">
      <nav
        className={`mx-auto flex h-20 max-w-[1440px] items-center justify-between border px-4 py-0 backdrop-blur-md transition sm:h-24 ${
          hasScrolled
            ? "border-[#FF0091]/25 bg-[#050305]/86"
            : "border-white/10 bg-[#050305]/28"
        }`}
      >
        <Link
          href="/"
          className="relative -my-3 block h-24 w-24 overflow-hidden sm:-my-5 sm:h-32 sm:w-32"
        >
          <Image
            src={bringueKit.logo}
            alt="La Bringue"
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-contain"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden items-center gap-6 font-sans text-[10px] font-black uppercase tracking-[0.24em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#FF0091]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center border border-white/15 text-white md:hidden"
        >
          <span className="grid gap-1.5">
            <span
              className={`h-px w-5 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-2 grid max-w-[1440px] gap-3 border border-[#FF0091]/25 bg-[#050305]/94 p-4 text-right backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-[11px] font-black uppercase tracking-[0.24em] text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function BringueFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050305] py-8 text-white">
      <div className="shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bebas text-2xl uppercase tracking-[0.08em]">
          La <span className="text-[#FF0091]">Bringue</span>
        </p>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={bringueKit.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[0.24em] text-white/70 transition hover:text-[#FF0091]"
          >
            <Instagram className="size-4" />
            Instagram
          </a>
          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/30">
            Powered by{" "}
            <a
              href="https://presskit.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-white/60"
            >
              presskit.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function BringuePressKit() {
  return (
    <>
      <main className="overflow-x-clip text-white">
        <BringueHeader />

        {/* Hero */}
        <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden pb-8 pt-24 sm:min-h-screen sm:pb-10">
          <BgVideo
            src={bringueKit.hero.video}
            poster={bringueKit.hero.poster}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,3,5,0.5),rgba(5,3,5,0.72)_55%,rgba(5,3,5,0.98)),linear-gradient(90deg,rgba(255,0,145,0.06),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(180deg,transparent,#050305)]" />

          <SectionReveal className="shell relative z-10 flex flex-col items-center text-center">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.36em] text-white/55 sm:text-[11px]">
              {bringueKit.hero.taglineAbove}
            </p>

            <div className="relative mt-6 h-36 w-36 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
              <Image
                src={bringueKit.logo}
                alt="La Bringue"
                fill
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 224px"
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <h1 className="mt-5 font-bebas text-[clamp(3.5rem,12vw,9rem)] uppercase leading-none tracking-[0.03em] text-white">
              {bringueKit.hero.taglineBelow}
            </h1>

            <p className="mt-5 max-w-xl text-[1rem] leading-7 text-white/72 sm:text-[1.1rem] sm:leading-8">
              {bringueKit.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#contact" className="red-button">
                Contact
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={bringueKit.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="line-button"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
            </div>
          </SectionReveal>
        </section>

        {/* Stats */}
        <section className="bg-[#FF0091] py-10 sm:py-12 lg:py-14">
          <div className="shell grid gap-6 md:grid-cols-3">
            {bringueKit.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.62,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-l border-white/28 pl-4"
              >
                <AnimatedStatValue value={stat.value} delay={index * 0.08} />
                <p className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-white/78 sm:text-[11px]">
                  {stat.label}
                </p>
                <p className="mt-3 max-w-[24rem] text-[0.92rem] leading-6 text-white/68">
                  {stat.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Concept */}
        <section id="concept" className="shell py-10 sm:py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0A0508]">
                <Image
                  src={bringueKit.concept.image}
                  alt={bringueKit.concept.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,3,5,0.42))]" />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08} className="min-w-0 space-y-7">
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#FF0091]">
                {bringueKit.concept.eyebrow}
              </p>
              <h2 className="max-w-[20ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-white sm:text-[4.1rem] lg:text-[5rem]">
                {bringueKit.concept.title}
              </h2>
              <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
                <p className="text-[1rem] leading-7 text-white/72 sm:text-[1.05rem] sm:leading-8">
                  {bringueKit.concept.leftBlock}
                </p>
                <p className="text-[1rem] leading-7 text-white/72 sm:text-[1.05rem] sm:leading-8">
                  {bringueKit.concept.rightBlock}
                </p>
              </div>
              <blockquote className="border-l-2 border-[#FF0091] pl-5 text-[1.05rem] italic leading-8 text-[#FF0091]">
                {bringueKit.concept.quote}
              </blockquote>
            </SectionReveal>
          </div>
        </section>

        {/* Format */}
        <section
          id="format"
          className="border-y border-white/10 bg-[#0A0508] py-10 sm:py-12 lg:py-16"
        >
          <SectionReveal className="shell">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#FF0091]">
              {bringueKit.format.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[26ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-white sm:text-[4rem]">
              {bringueKit.format.title}
            </h2>
          </SectionReveal>

          <div className="shell mt-8 grid gap-4 sm:grid-cols-2">
            {bringueKit.format.items.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-white/10 bg-[#050305] p-6 sm:p-7"
              >
                <p className="font-bebas text-[2.6rem] uppercase leading-none tracking-[0.04em] text-[#FF0091] sm:text-[3rem]">
                  {item.label}
                </p>
                <p className="mt-3 text-[0.96rem] leading-7 text-white/70">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>

          <SectionReveal className="shell mt-6">
            <p className="border-t border-white/10 pt-6 text-[0.96rem] italic leading-7 text-white/50">
              {bringueKit.format.footer}
            </p>
          </SectionReveal>
        </section>

        {/* Vision */}
        <section id="vision" className="py-10 sm:py-12 lg:py-16">
          <SectionReveal className="shell border-y border-white/10 py-8">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#FF0091]">
              {bringueKit.vision.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[26ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-white sm:text-[4rem]">
              {bringueKit.vision.title}
            </h2>
          </SectionReveal>

          <div className="shell mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bringueKit.vision.items.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border border-white/10 bg-[#0A0508] p-6 sm:p-7"
              >
                <h3 className="font-bebas text-[2rem] uppercase leading-none tracking-[0.04em] text-white sm:text-[2.4rem]">
                  {item.name}
                </h3>
                <p className="mt-4 text-[0.94rem] leading-6 text-white/65">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/10 bg-[#FF0091] py-10 sm:py-12 lg:py-16"
        >
          <SectionReveal className="shell">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
              <div>
                <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-white/60">
                  {bringueKit.contact.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[18ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-white sm:text-[4rem]">
                  {bringueKit.contact.title}
                </h2>
                <p className="mt-5 max-w-[31rem] text-[1rem] leading-7 text-white/75 sm:text-[1.08rem] sm:leading-8">
                  {bringueKit.contact.body}
                </p>
              </div>

              <div>
                {bringueKit.contact.people.map((person, index) => (
                  <motion.a
                    key={person.name}
                    href={person.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.58,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group block overflow-hidden border-2 border-white/30 bg-white/10"
                  >
                    <span className="relative block aspect-[4/5] overflow-hidden bg-white/5">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 1024px) 80vw, 28vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        unoptimized
                      />
                    </span>
                    <span className="block p-5">
                      <span className="block font-bebas text-[2.6rem] uppercase leading-none tracking-[0.04em] text-white sm:text-[3rem]">
                        {person.name}
                      </span>
                      <span className="mt-2 block font-sans text-[10px] font-black uppercase tracking-[0.2em] text-white/70">
                        {person.instagram}
                      </span>
                      <span className="mt-2 flex items-center justify-between gap-4 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                        {person.role}
                        <ArrowUpRight className="size-4 shrink-0" />
                      </span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>
      </main>

      <BringueFooter />
    </>
  );
}
