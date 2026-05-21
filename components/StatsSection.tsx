"use client";

import { motion } from "framer-motion";
import { pressKit } from "@/data/config";
import { SectionTitle } from "./SectionTitle";

export function StatsSection() {
  return (
    <section className="bg-white py-24 text-black md:py-32">
      <div className="section-shell">
        <SectionTitle
          eyebrow={pressKit.sectionCopy.stats.eyebrow}
          title={pressKit.sectionCopy.stats.title}
          kicker={pressKit.sectionCopy.stats.kicker}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pressKit.stats.map((stat) => (
            <motion.article
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] transition hover:border-magenta/60 hover:shadow-neon md:p-8"
            >
              <p className="display-type text-[clamp(4rem,8vw,7rem)] leading-none text-black transition group-hover:text-magenta">
                {stat.value}
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.28em] text-black">
                {stat.label}
              </p>
              <p className="mt-5 text-sm leading-6 text-black/56">{stat.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
