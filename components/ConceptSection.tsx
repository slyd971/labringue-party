"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pressKit } from "@/data/config";

export function ConceptSection() {
  const blocks = [pressKit.concept, pressKit.genesis];

  return (
    <section id="concept" className="relative overflow-hidden bg-black py-24 md:py-36">
      <div className="absolute left-[-14rem] top-24 h-[28rem] w-[28rem] rounded-full bg-magenta/25 blur-3xl" />
      <div className="section-shell relative">
        <div className="grid gap-14 lg:grid-cols-2">
          {blocks.map((block, index) => (
            <motion.article
              key={block.eyebrow}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.75, delay: index * 0.12 }}
              className="grid gap-7"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-white/12 bg-softblack">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-lime">{block.eyebrow}</p>
                <h2 className="display-type mt-4 text-[clamp(3.5rem,8vw,8rem)] uppercase leading-[0.82] text-white">
                  {block.title}
                </h2>
                <div className="mt-7 space-y-5 text-base leading-8 text-white/66">
                  {block.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <blockquote className="editorial-type mt-8 border-l-2 border-magenta pl-5 text-2xl italic leading-9 text-white">
                  {block.quote}
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
