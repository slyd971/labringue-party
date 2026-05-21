"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { pressKit, type Testimonial } from "@/data/config";

function RatingStars() {
  return (
    <div className="flex justify-center gap-2 text-[#ffe46b]" aria-label="Note 5 étoiles">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-8 w-8 fill-current stroke-current sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
      ))}
    </div>
  );
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-[25rem] text-center"
    >
      <RatingStars />
      <blockquote className="mt-5 font-sans text-[1.05rem] italic leading-7 text-[#151015] sm:text-[1.18rem] sm:leading-8">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <p className="mt-5 font-sans text-[1.45rem] font-black tracking-[-0.02em] text-[#151015] sm:text-[1.8rem]">
        -{item.name}
      </p>
    </motion.article>
  );
}

export function BringueTestimonialsSection() {
  return (
    <section className="bg-[#f4a3da] py-14 text-[#151015] sm:py-18 lg:py-24" aria-label="Témoignages">
      <div className="shell">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[3rem] uppercase leading-[0.92] tracking-[0.04em] text-[#151015] sm:text-[5rem] lg:text-[6.8rem]"
        >
          {pressKit.sectionCopy.testimonials.eyebrow}
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:items-start md:gap-8 lg:mt-14 lg:gap-12">
          {pressKit.testimonials.slice(0, 3).map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
