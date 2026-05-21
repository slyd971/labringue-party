"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { pressKit, type Testimonial } from "@/data/config";
import { SectionReveal } from "./SectionReveal";

type TestimonialsSectionProps = {
  items?: readonly Testimonial[];
};

function RatingStars() {
  return (
    <div className="flex gap-1.5 text-[#f4a3da]" aria-label="Note 5 étoiles">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current stroke-current" />
      ))}
    </div>
  );
}

export function TestimonialsSection({ items = pressKit.testimonials }: TestimonialsSectionProps) {
  return (
    <section className="bg-[#0d0d0d] py-10 sm:py-14 lg:py-18">
      <div className="shell">
        <SectionReveal className="border-b border-white/10 pb-8">
          <p className="editorial-kicker">{pressKit.sectionCopy.testimonials.eyebrow}</p>
          <h2 className="mt-4 max-w-[26ch] font-display text-[1.85rem] uppercase leading-[1.02] tracking-[0.06em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            {pressKit.sectionCopy.testimonials.title}
          </h2>
        </SectionReveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <RatingStars />
              <blockquote className="flex-1 font-sans text-[0.98rem] italic leading-7 text-[#c2c2c2]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="border-t border-white/10 pt-4">
                <p className="font-sans text-[0.88rem] font-black uppercase tracking-[0.14em] text-white">
                  {item.name}
                </p>
                <p className="mt-1 font-sans text-[0.78rem] text-[#888]">
                  {item.role} · {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
