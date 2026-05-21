"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { pressKit, type MediaAsset } from "@/data/config";
import { SectionReveal } from "./SectionReveal";

type GallerySectionProps = {
  items?: readonly MediaAsset[];
  title?: string;
};

export function GallerySection({ items = pressKit.gallery, title }: GallerySectionProps) {
  const [active, setActive] = useState<MediaAsset | null>(null);

  return (
    <section className="bg-[#050505] py-10 sm:py-12 lg:py-16">
      <div className="shell">
        <SectionReveal className="border-b border-white/10 pb-8 sm:pb-10">
          <p className="editorial-kicker">{pressKit.sectionCopy.gallery.eyebrow}</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            {title ?? pressKit.sectionCopy.gallery.title}
          </h2>
        </SectionReveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((image, index) => (
            <motion.button
              key={`${image.src}-${index}`}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(image)}
              className="group relative block overflow-hidden border border-white/10 bg-black text-left"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.74))]" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/94 p-4"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Fermer l'image"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-[#f4a3da]/60 hover:text-[#f4a3da]"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
              className="relative h-[82vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
