"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { pressKit } from "@/data/config";
import { SectionReveal } from "./SectionReveal";

export function PressSection() {
  return (
    <section id="videos" className="shell py-8 sm:py-10 lg:py-12">
      <SectionReveal className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="editorial-kicker">{pressKit.sectionCopy.videos.eyebrow}</p>
          <h2 className="mt-3 max-w-[24ch] font-display text-[1.65rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2rem] lg:text-[2.25rem]">
            {pressKit.sectionCopy.videos.title}
          </h2>
        </div>
        <p className="hidden max-w-[24rem] text-right font-sans text-[0.78rem] uppercase leading-5 tracking-[0.18em] text-white/32 sm:block">
          Press mentions & editorial credits
        </p>
      </SectionReveal>

      <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
        {pressKit.videos.map((item, index) => (
          <motion.a
            key={item.title + item.category}
            href={item.src}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="group flex min-h-[3.85rem] items-center justify-between gap-3 border border-white/[0.08] bg-white/[0.018] px-3 py-3 transition duration-300 hover:border-[#f4a3da]/30 hover:bg-white/[0.045] sm:min-h-[4.45rem] sm:gap-4 sm:px-5"
          >
            <span className="min-w-0">
              <span className="block truncate font-display text-[1.12rem] uppercase leading-none tracking-[0.05em] text-white transition group-hover:text-[#f4a3da] sm:text-[1.55rem]">
                {item.title}
              </span>
              <span className="mt-1.5 block font-sans text-[8px] font-black uppercase tracking-[0.22em] text-white/34 transition group-hover:text-[#f4a3da] sm:mt-2 sm:text-[9px] sm:tracking-[0.24em]">
                {item.category}
              </span>
            </span>
            <ArrowUpRight className="size-3.5 shrink-0 text-white/30 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#f4a3da] sm:size-4" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
