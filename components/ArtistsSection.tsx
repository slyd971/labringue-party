"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { PersonCard } from "@/data/config";
import { pressKit } from "@/data/config";
import { SectionTitle } from "./SectionTitle";

function Card({ item }: { item: PersonCard }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden border border-white/12 bg-white/[0.04]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-lime">{item.role}</p>
        <h3 className="display-type mt-2 text-5xl uppercase leading-none text-white">{item.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/68">{item.note}</p>
      </div>
    </motion.article>
  );
}

export function ArtistsSection() {
  const groups = [
    { title: pressKit.sectionCopy.artists.artistsTitle, items: pressKit.artists },
    { title: pressKit.sectionCopy.artists.collaborationsTitle, items: pressKit.collaborations }
  ];

  return (
    <section className="bg-softblack py-24 md:py-32">
      <div className="section-shell">
        <SectionTitle
          eyebrow={pressKit.sectionCopy.artists.eyebrow}
          title={pressKit.sectionCopy.artists.title}
          kicker={pressKit.sectionCopy.artists.kicker}
          tone="light"
        />
        <div className="mt-16 space-y-16">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-xs font-black uppercase tracking-[0.34em] text-magenta">
                {group.title}
              </h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {group.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <Card item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
