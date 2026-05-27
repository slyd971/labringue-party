"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { pressKit } from "@/data/config";
import { SectionReveal } from "./SectionReveal";

export function PressSection() {
  return (
    <section id="videos" className="shell py-10 sm:py-14 lg:py-16">
      <SectionReveal className="mb-10 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="editorial-kicker">{pressKit.sectionCopy.videos.eyebrow}</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            {pressKit.sectionCopy.videos.title}
          </h2>
        </div>
      </SectionReveal>

      <div className="divide-y divide-white/10 border-y border-white/10">
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
            className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-white/[0.03] sm:py-6"
          >
            <div className="flex items-baseline gap-5">
              <span className="font-display text-[1.5rem] uppercase leading-none tracking-[0.06em] text-white transition group-hover:text-[#f4a3da] sm:text-[2rem]">
                {item.title}
              </span>
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.22em] text-[#f4a3da] sm:text-xs">
                {item.category}
              </span>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-white/30 transition group-hover:text-[#f4a3da]" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
