import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail } from "lucide-react";
import { GallerySection } from "@/components/GallerySection";
import { SectionReveal } from "@/components/SectionReveal";
import { BringueHeader } from "@/components/BringueHeader";
import { pressKit } from "@/data/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://labringue-party.vercel.app";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

function getCity(slug: string) {
  return pressKit.cities.find((city) => city.slug === slug);
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
    alternates: {
      canonical: `/cities/${city.slug}`
    },
    openGraph: {
      title: `La Bringue ${city.name} — Girls Only Party`,
      description: `Soirée girls only 100% fun & safe à ${city.name} depuis ${city.editions}. +130K abonnées, communauté bienveillante.`,
      url: `${siteUrl}/cities/${city.slug}`,
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


  return (
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
        <div className="flex flex-col justify-between bg-[#f4a3da] px-8 py-12 lg:w-1/2 lg:px-14 lg:py-16">
          <Image
            src="/logo/logo-villes.png"
            alt="La Bringue"
            width={900}
            height={182}
            className="w-full max-w-[200px] lg:max-w-[260px]"
            priority
          />
          <div>
            <h1
              className="font-display uppercase leading-none tracking-[0.03em] text-[#1a1518]"
              style={{ fontSize: `clamp(3.5rem, ${Math.min(13, 78 / city.name.length).toFixed(1)}vw, 14rem)` }}
            >
              {city.name}
            </h1>
            <p className="mt-6 font-display text-[clamp(1rem,2.2vw,2rem)] uppercase leading-[1.1] tracking-[0.03em] text-[#1a1518]">
              <strong>{pressKit.tagline}</strong>
            </p>
          </div>
          <div aria-hidden="true" />
        </div>

        {/* Right: dark panel with KPIs */}
        <div className="flex flex-col justify-center bg-[#111] px-6 py-10 lg:w-1/2 lg:px-14 lg:py-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            {city.stats.map((stat) => (
              <div key={stat.label} className="py-4">
                <p className="font-display text-[3rem] uppercase leading-none text-[#f4a3da] lg:text-[4.5rem]">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                  {stat.label}
                </p>
                <p className="mt-1 font-sans text-[0.82rem] leading-5 text-white/40">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection items={city.gallery} title={`Nos Bringueuses de ${city.name} en images.`} />

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
  );
}
