"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { afrogrooversKit } from "@/data/afrogroovers";
import { SectionReveal } from "./SectionReveal";

const navLinks = [
  { href: "#concept", label: "Concept" },
  { href: "#formats", label: "Formats" },
  { href: "#lineup", label: "Lineup" },
  { href: "#videos", label: "Videos" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];

function BgVideo({ src, poster, className, lazy = false }: { src: string; poster?: string; className?: string; lazy?: boolean }) {
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
  className = "text-[#101218]"
}: {
  value: string;
  delay?: number;
  className?: string;
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
      onUpdate: (latest) => setDisplayValue(Math.round(latest).toString())
    });

    return () => controls.stop();
  }, [delay, isInView, target]);

  return (
    <p ref={ref} className={`font-bebas text-[4.1rem] uppercase leading-none sm:text-[5.8rem] lg:text-[7rem] ${className}`}>
      {prefix}
      {displayValue}
      {suffix}
    </p>
  );
}

function AfrogrooversHeader() {
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
          hasScrolled ? "border-[#F3A623]/25 bg-[#101218]/86" : "border-white/10 bg-[#101218]/28"
        }`}
      >
        <Link href="/afrogroovers" className="relative block h-24 w-24 -my-3 overflow-hidden sm:h-32 sm:w-32 sm:-my-5">
          <Image
            src={afrogrooversKit.headerLogo}
            alt="AfroGroovers"
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-contain"
            priority
            unoptimized
          />
        </Link>

        <div className="hidden items-center gap-6 font-sans text-[10px] font-black uppercase tracking-[0.24em] text-[#F5F1E8]/70 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#F3A623]">
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="grid h-10 w-10 place-items-center border border-white/15 text-[#F5F1E8] md:hidden"
        >
          <span className="grid gap-1.5">
            <span className={`h-px w-5 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-px w-5 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-2 grid max-w-[1440px] gap-3 border border-[#F3A623]/25 bg-[#101218]/94 p-4 text-right backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-sans text-[11px] font-black uppercase tracking-[0.24em] text-[#F5F1E8]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function VideoTile({
  video,
  index
}: {
  video: (typeof afrogrooversKit.videos)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.62, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative min-h-[380px] overflow-hidden border border-[#F5F1E8]/10 bg-[#101218] sm:min-h-[460px]"
    >
      <BgVideo src={video.src} lazy className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,24,0.05),rgba(16,18,24,0.32)_42%,rgba(16,18,24,0.92))]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-sans text-[10px] font-black uppercase tracking-[0.28em] text-[#F3A623]">{video.category}</p>
        <h3 className="mt-3 font-bebas text-[2.6rem] uppercase leading-none tracking-[0.04em] text-[#F5F1E8] sm:text-[3rem]">
          {video.title}
        </h3>
        <p className="mt-3 max-w-[18rem] text-[0.9rem] leading-6 text-[#F5F1E8]/72">{video.description}</p>
      </div>
    </motion.article>
  );
}

function AfrogrooversFooter() {
  return (
    <footer className="border-t border-[#F5F1E8]/10 bg-[#101218] py-8 text-[#F5F1E8]">
      <div className="shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bebas text-2xl uppercase tracking-[0.08em]">
          Afro<span className="text-[#F3A623]">Groovers</span>
        </p>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href={afrogrooversKit.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[0.24em] text-[#F5F1E8]/70 transition hover:text-[#F3A623]"
          >
            <Instagram className="size-4" />
            Instagram
          </a>
          <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#F5F1E8]/30">
            Powered by{" "}
            <a
              href="https://presskit.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="transition hover:text-[#F5F1E8]/60"
            >
              presskit.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AFROGROOVERS",
  url: "https://afrogroovers.vercel.app",
  logo: "https://afrogroovers.vercel.app/afrogroovers/logo/logo-main.png",
  description:
    "AFROGROOVERS est une expérience afro premium mêlant afrobeats, networking chic, lifestyle et outdoor summer vibes.",
  sameAs: ["https://www.instagram.com/afrogroovers/"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "afrogroovers@gmail.com",
    telephone: "+33652910427",
    contactType: "customer support"
  },
  founder: [
    { "@type": "Person", name: "Célia", sameAs: "https://www.instagram.com/celia.sans.filtres/" },
    { "@type": "Person", name: "Stéphane", sameAs: "https://www.instagram.com/monsieur.guitoo" }
  ],
  knowsAbout: ["Afrobeats", "Amapiano", "Afro-house", "Highlife", "Afroswing", "Soirées afro", "Networking"]
};

export function AfrogrooversPressKit() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-x-clip bg-[#101218] text-[#F5F1E8]">
        <AfrogrooversHeader />

        <section className="relative flex min-h-[92svh] items-end overflow-hidden pb-8 pt-24 sm:min-h-screen sm:pb-10">
          <BgVideo
            src={afrogrooversKit.heroVideo.src}
            poster={afrogrooversKit.heroVideo.poster}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,18,24,0.22),rgba(16,18,24,0.58)_55%,rgba(16,18,24,0.96)),linear-gradient(90deg,rgba(16,18,24,0.72),rgba(16,18,24,0.16)_48%,rgba(31,90,59,0.42))]" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,#101218)]" />

          <SectionReveal className="shell relative z-10">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-sm font-black uppercase tracking-[0.26em] text-[#F3A623] sm:text-base lg:text-lg">
              <span>Groove</span>
              <span className="text-[#D86F4A]">*</span>
              <span>Afrobeats</span>
              <span className="text-[#D86F4A]">*</span>
              <span>Love</span>
            </p>
            <h1 className="mt-5 max-w-[9ch] font-bebas text-[clamp(5.2rem,17vw,15rem)] uppercase leading-[0.78] tracking-[0.03em] text-[#F5F1E8]">
              Afro Groovers
            </h1>
            <div className="mt-6 grid gap-5 border-t border-[#F5F1E8]/15 pt-5 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <p className="max-w-2xl text-[1rem] leading-7 text-[#F5F1E8]/78 sm:text-[1.12rem] sm:leading-8">
                {afrogrooversKit.description}
              </p>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center gap-3 bg-[#1F5A3B] px-5 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#F5F1E8] transition hover:bg-[#2C6F4D]"
                >
                  RSVP / Contact
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={afrogrooversKit.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex min-h-12 items-center gap-3 border border-[#F5F1E8]/20 px-5 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#F5F1E8] transition hover:border-[#F3A623] hover:text-[#F3A623]"
                >
                  <Instagram className="size-4" />
                  Instagram
                </a>
              </div>
            </div>
          </SectionReveal>
        </section>

        <section className="relative overflow-hidden bg-[#F3A623] py-10 text-[#101218] sm:py-12 lg:py-14">
          <div className="shell relative grid gap-6 md:grid-cols-3">
            {afrogrooversKit.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-l border-[#101218]/28 pl-4"
              >
                <AnimatedStatValue value={stat.value} delay={index * 0.08} />
                <p className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#101218]/78 sm:text-[11px]">
                  {stat.label}
                </p>
                <p className="mt-3 max-w-[24rem] text-[0.92rem] leading-6 text-[#101218]/68">{stat.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="concept" className="shell py-10 sm:py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionReveal>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={afrogrooversKit.concept.image} alt={afrogrooversKit.concept.title} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" priority unoptimized />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,18,24,0.42))]" />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08} className="min-w-0 space-y-7">
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#F3A623]">
                {afrogrooversKit.concept.eyebrow}
              </p>
              <h2 className="max-w-[20ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-[#F5F1E8] sm:text-[4.1rem] lg:text-[5rem]">
                {afrogrooversKit.concept.title}
              </h2>
              <div className="grid gap-6 border-t border-[#F5F1E8]/10 pt-6 md:grid-cols-2">
                {afrogrooversKit.concept.body.map((paragraph) => (
                  <p key={paragraph} className="text-[1rem] leading-7 text-[#F5F1E8]/72 sm:text-[1.05rem] sm:leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
              <blockquote className="border-l-2 border-[#F3A623] pl-5 text-[1.05rem] italic leading-8 text-[#F3A623]">
                {afrogrooversKit.concept.quote}
              </blockquote>
            </SectionReveal>
          </div>
        </section>

        <section id="formats" className="border-y border-[#F5F1E8]/10 bg-[#0D0F13] py-10 sm:py-12 lg:py-16">
          <SectionReveal className="shell">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#F3A623]">Formats de soirée</p>
            <h2 className="mt-4 max-w-[22ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-[#F5F1E8] sm:text-[4rem]">
              Deux façons de vivre le groove.
            </h2>
          </SectionReveal>

          <div className="shell mt-6 grid gap-4 md:grid-cols-2">
            {afrogrooversKit.formats.map((format, index) => (
              <motion.article
                key={format.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="grid overflow-hidden border border-[#F5F1E8]/10 bg-[#101218] sm:grid-cols-[0.88fr_1fr]"
              >
                <div className="relative aspect-[1080/1352] bg-[#0D0F13] sm:aspect-auto">
                  <Image src={format.image} alt={format.name} fill sizes="(max-width: 768px) 100vw, 34vw" className="object-contain" unoptimized />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(16,18,24,0.22))]" />
                </div>
                <div className="flex flex-col justify-end p-5 sm:p-6">
                  <p className="font-sans text-[10px] font-black uppercase tracking-[0.28em] text-[#F3A623]">{format.role}</p>
                  <h3 className="mt-4 font-bebas text-[4rem] uppercase leading-none tracking-[0.04em] text-[#F5F1E8] sm:text-[5rem]">
                    {format.name}
                  </h3>
                  <p className="mt-5 text-[0.96rem] leading-7 text-[#F5F1E8]/70">{format.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="lineup" className="border-y border-[#F5F1E8]/10 bg-[#F5F1E8] py-10 text-[#101218] sm:py-12 lg:py-16">
          <SectionReveal className="shell">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#D86F4A]">DJ Lineup</p>
            <h2 className="mt-4 max-w-[20ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] sm:text-[4rem]">
              Ils ont porté la vibe AfroGroovers.
            </h2>
          </SectionReveal>
          <div className="shell mt-6 grid gap-5 md:grid-cols-2">
            {afrogrooversKit.lineup.map((artist, index) => (
              <motion.article
                key={artist.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="grid overflow-hidden border-2 border-[#101218] bg-[#F5F1E8] sm:grid-cols-[0.86fr_1fr]"
              >
                <div className="relative aspect-[4/5] sm:aspect-auto">
                  <Image src={artist.image} alt={artist.name} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" unoptimized />
                </div>
                <div className="flex flex-col justify-end p-5 sm:p-6">
                  <p className="font-sans text-[10px] font-black uppercase tracking-[0.26em] text-[#D86F4A]">{artist.role}</p>
                  <h3 className="mt-4 font-bebas text-[3.2rem] uppercase leading-none tracking-[0.04em] sm:text-[3.6rem]">{artist.name}</h3>
                  <p className="mt-5 text-[0.96rem] leading-7 text-[#101218]/68">{artist.note}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="videos" className="py-10 sm:py-12 lg:py-16">
          <SectionReveal className="shell border-y border-[#F5F1E8]/10 py-8">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#F3A623]">Vidéos</p>
            <h2 className="mt-4 max-w-[20ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-[#F5F1E8] sm:text-[4rem]">
              L'énergie AfroGroovers en mouvement.
            </h2>
            <p className="mt-4 max-w-2xl text-[1rem] leading-7 text-[#F5F1E8]/68">
              Quatre moments courts pour capter l'ambiance : arrivée, dancefloor, communauté et peak time.
            </p>
          </SectionReveal>
          <div className="shell mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {afrogrooversKit.videos.map((video, index) => (
              <VideoTile key={video.src} video={video} index={index} />
            ))}
          </div>
        </section>

        <section id="gallery" className="shell py-10 sm:py-12 lg:py-16">
          <SectionReveal className="border-y border-[#F5F1E8]/10 py-8">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#F3A623]">Immersion</p>
            <h2 className="mt-4 max-w-[18ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-[#F5F1E8] sm:text-[4rem]">
              Nos Afrogroovers en images.
            </h2>
          </SectionReveal>
          <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {afrogrooversKit.gallery.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.58, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 break-inside-avoid overflow-hidden border border-[#F5F1E8]/10 bg-[#F5F1E8]/[0.03]"
              >
                <Image src={image.src} alt={image.alt} width={image.w} height={image.h} className="h-auto w-full object-cover" unoptimized />
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="border-y border-[#F5F1E8]/10 bg-[#0D0F13] py-10 sm:py-12 lg:py-16">
          <SectionReveal className="shell">
            <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#F3A623]">Témoignages</p>
            <h2 className="mt-4 max-w-[22ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] text-[#F5F1E8] sm:text-[4rem]">
              Ce que disent les Afrogroovers.
            </h2>
          </SectionReveal>

          <div className="shell mt-8 grid gap-4 md:grid-cols-3">
            {afrogrooversKit.testimonials.map((item, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.62, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-between border border-[#F5F1E8]/10 bg-[#101218] p-6 sm:p-7"
              >
                <p className="text-[1rem] leading-7 text-[#F5F1E8]/80 sm:text-[1.05rem] sm:leading-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-[#F5F1E8]/10 pt-4">
                  <p className="font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#F3A623]">
                    — {item.author}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-[#F3A623] py-10 text-[#101218] sm:py-12 lg:py-16">
          <SectionReveal className="shell">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="font-sans text-[10px] font-black uppercase tracking-[0.32em] text-[#101218]/62">{afrogrooversKit.contact.eyebrow}</p>
                <h2 className="mt-4 max-w-[18ch] font-bebas text-[2.8rem] uppercase leading-[0.94] tracking-[0.03em] sm:text-[4rem]">
                  {afrogrooversKit.contact.title}
                </h2>
                <p className="mt-5 max-w-[31rem] text-[1rem] leading-7 text-[#101218]/72 sm:text-[1.08rem] sm:leading-8">
                  {afrogrooversKit.contact.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${afrogrooversKit.contact.email}`}
                    className="inline-flex min-h-12 items-center gap-3 border-2 border-[#101218] bg-[#101218] px-5 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#F5F1E8] transition hover:bg-[#1a1e2a]"
                  >
                    <Mail className="size-4 shrink-0" />
                    {afrogrooversKit.contact.email}
                  </a>
                  <a
                    href={`https://wa.me/${afrogrooversKit.contact.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-12 items-center gap-3 border-2 border-[#101218] bg-[#25D366] px-5 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#101218] transition hover:bg-[#1ebe5a]"
                  >
                    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {afrogrooversKit.contact.people.map((person, index) => (
                  <motion.a
                    key={person.name}
                    href={person.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.58, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group overflow-hidden border-2 border-[#101218] bg-[#F5F1E8]"
                  >
                    <span className="relative block aspect-[4/5] overflow-hidden">
                      <Image src={person.image} alt={person.name} fill sizes="(max-width: 768px) 100vw, 28vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" unoptimized />
                    </span>
                    <span className="block p-5">
                      <span className="block font-bebas text-[2.6rem] uppercase leading-none tracking-[0.04em] sm:text-[3rem]">{person.name}</span>
                      <span className="mt-2 block font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#D86F4A]">
                        {person.instagram}
                      </span>
                      <span className="mt-2 flex items-center justify-between gap-4 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#101218]/68">
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
      <AfrogrooversFooter />
    </>
  );
}
