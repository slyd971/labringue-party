"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { pressKit, type VideoItem } from "@/data/config";
import { SectionTitle } from "./SectionTitle";

export function VideosSection() {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="section-shell">
        <SectionTitle
          eyebrow={pressKit.sectionCopy.videos.eyebrow}
          title={pressKit.sectionCopy.videos.title}
          kicker={pressKit.sectionCopy.videos.kicker}
          tone="light"
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {pressKit.videos.map((video, index) => (
            <motion.button
              key={video.title}
              type="button"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 0.985 }}
              onClick={() => setActive(video)}
              className="group relative aspect-[4/5] overflow-hidden border border-white/12 text-left"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-lime text-black shadow-lime">
                <Play className="h-5 w-5 fill-current" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-lime">{video.category}</p>
                <h3 className="display-type mt-2 text-6xl uppercase leading-none text-white">{video.title}</h3>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur"
          >
            <button
              type="button"
              aria-label="Fermer la video"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.video
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              src={active.src}
              controls
              autoPlay
              playsInline
              className="max-h-[82vh] w-full max-w-6xl bg-black object-contain"
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
