"use client";

import Image from "next/image";
import { useState } from "react";
import { pressKit, type VideoItem } from "@/data/config";

function PressCard({ item }: { item: VideoItem }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="border border-white/10 bg-[#080808] p-3 sm:p-4">
      <div className="relative aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,#151015,#050505_62%,#23161e)]">
        {!imageFailed ? (
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            onError={() => setImageFailed(true)}
          />
        ) : null}
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-1 pt-4">
        <h3 className="font-display text-3xl uppercase tracking-[0.06em] text-white">{item.title}</h3>
        <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#f4a3da]">{item.category}</p>
      </div>
    </article>
  );
}

export function PressSection() {
  return (
    <section id="videos" className="shell py-10 sm:py-14 lg:py-16">
      <div className="mb-10 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="editorial-kicker">{pressKit.sectionCopy.videos.eyebrow}</p>
          <h2 className="mt-4 max-w-[22ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            {pressKit.sectionCopy.videos.title}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-[#c4c4c4] sm:text-[1rem] sm:leading-8">
            {pressKit.sectionCopy.videos.kicker}
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:gap-12">
        {pressKit.videos.map((item) => (
          <PressCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
