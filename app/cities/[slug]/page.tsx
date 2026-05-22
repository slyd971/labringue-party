import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";
import { GallerySection } from "@/components/GallerySection";
import { VenuesSection } from "@/components/VenuesSection";
import { SectionReveal } from "@/components/SectionReveal";
import { BringueHeader } from "@/components/BringueHeader";
import { BringueFooter } from "@/components/BringueFooter";
import { pressKit } from "@/data/config";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

function getCity(slug: string) {
  return pressKit.cities.find((city) => city.slug === slug);
}

function WomanFigure({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 148" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="40" cy="13" r="13" />
      <rect x="5" y="33" width="11" height="36" rx="5.5" transform="rotate(-14 10.5 51)" />
      <rect x="64" y="33" width="11" height="36" rx="5.5" transform="rotate(14 69.5 51)" />
      <path d="M27,30 L53,30 L67,106 L13,106 Z" />
      <rect x="17" y="105" width="16" height="43" rx="5" />
      <rect x="47" y="105" width="16" height="43" rx="5" />
    </svg>
  );
}

export function generateStaticParams() {
  return pressKit.cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `La Bringue ${city.name}`,
    description: `La Bringue ${city.name} — soirée girls only 100% fun & safe depuis ${city.editions}. Découvrez l'univers La Bringue dans votre ville.`,
    openGraph: {
      title: `La Bringue ${city.name} — Girls Only Party`,
      description: `Soirée girls only 100% fun & safe à ${city.name} depuis ${city.editions}. +125K abonnées, communauté bienveillante.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `La Bringue ${city.name} — Girls Only Party`,
      description: `Soirée girls only 100% safe à ${city.name} depuis ${city.editions}.`,
    }
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const taglineLines = pressKit.tagline
    .replace(/\.$/, "")
    .split(". ")
    .map((l) => l + ".");

  return (
    <>
      <main className="bg-[#050505] text-white">
        <BringueHeader />

      {/* Back button — above the split hero, below the fixed header */}
      <div className="relative z-40 flex items-center border-b border-white/10 bg-[#050505] px-4 py-3 pt-[calc(theme(spacing.16)+0.75rem)] sm:px-8 sm:pt-[calc(theme(spacing.20)+0.75rem)] lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#888] transition hover:text-[#f4a3da]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {pressKit.ctas.cityBack}
        </Link>
      </div>

      {/* Hero — split poster */}
      <section className="flex min-h-[85svh] flex-col lg:flex-row">

        {/* Left: pink panel */}
        <div className="flex flex-col items-center justify-between bg-[#f4a3da] px-8 py-10 lg:w-1/2 lg:px-14 lg:py-14">
          <Image
            src="/logo/logo-villes.png"
            alt="La Bringue"
            width={900}
            height={182}
            className="w-full max-w-[340px] lg:max-w-[480px]"
            priority
          />
          <WomanFigure className="w-40 text-[#1a1518] sm:w-52 lg:w-64" />
          <div aria-hidden="true" className="h-8 lg:h-12" />
        </div>

        {/* Right: dark panel */}
        <div className="relative flex flex-col justify-between bg-[#111] px-6 py-10 lg:w-1/2 lg:px-14 lg:py-14">
          <div />

          <div>
            {/* City name in outlined box */}
            <div className="border border-[#f4a3da]/40 p-4 sm:p-6 lg:p-8">
              <h1 className="font-display text-[clamp(2.8rem,8vw,8rem)] uppercase leading-none tracking-[0.03em] text-[#f4a3da]">
                {city.name}
              </h1>
            </div>

            {/* Tagline — 3 lines */}
            <div className="mt-8 space-y-1 lg:mt-12">
              {taglineLines.map((line) => (
                <p
                  key={line}
                  className="font-display text-[clamp(1.5rem,3.8vw,3.6rem)] uppercase leading-[1.08] tracking-[0.03em] text-[#f4a3da]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div />
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-[#f4a3da] py-10 text-black sm:py-12 lg:py-14">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(0,0,0,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.12)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="shell relative">
          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-3">
            {city.stats.map((stat, index) => (
              <SectionReveal key={stat.label} delay={index * 0.08} className="px-3 text-center">
                <p className="font-display text-[3rem] uppercase leading-none text-black sm:text-[4rem] lg:text-[5rem]">
                  {stat.value}
                </p>
                <p className="mx-auto mt-3 max-w-[18ch] font-sans text-[10px] font-black uppercase leading-5 tracking-[0.22em] text-black/70 sm:text-[11px]">
                  {stat.label}
                </p>
                <p className="mt-2 font-sans text-[0.82rem] leading-5 text-black/58">
                  {stat.detail}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <GallerySection items={city.gallery} title={`Nos Bringueuses de ${city.name} en images.`} />

      <VenuesSection />

      {/* CTA */}
      <section className="bg-[#f4a3da] py-10 text-[#151015] sm:py-14 lg:py-18">
        <SectionReveal className="shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-sans text-[10px] font-black uppercase tracking-[0.28em] text-[#151015]/70 sm:text-xs">
                {pressKit.sectionCopy.cityPage.ctaEyebrow}
              </p>
              <h2 className="mt-4 max-w-[22ch] font-display text-[2rem] uppercase leading-[1.02] tracking-[0.06em] text-[#151015] sm:text-[2.8rem] lg:text-[3.4rem]">
                {pressKit.sectionCopy.cityPage.ctaPrefix} {city.name}.
              </h2>
            </div>
            <a
              href={`mailto:${pressKit.contact.email}`}
              className="inline-flex w-fit shrink-0 items-center gap-3 border-2 border-[#151015] bg-[#151015] px-6 py-3.5 font-sans text-[11px] font-black uppercase tracking-[0.24em] text-white transition hover:bg-black"
            >
              <Mail className="size-4 shrink-0" />
              {pressKit.ctas.cityContact}
            </a>
          </div>
        </SectionReveal>
      </section>
      </main>
      <BringueFooter />
    </>
  );
}
