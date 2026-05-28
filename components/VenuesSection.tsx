"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pressKit } from "@/data/config";
import { SectionReveal } from "./SectionReveal";

export function VenuesSection() {
  return (
    <section className="bg-[#0d0d0d] py-14 sm:py-18 lg:py-24">
      <div className="shell">
        <SectionReveal>
          <h2 className="max-w-[18ch] font-display text-[2.4rem] uppercase leading-[1.02] tracking-[0.04em] text-white sm:text-[3.8rem] lg:text-[5rem]">
            Les lieux qui nous ont fait confiance :
          </h2>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-14 lg:gap-6">
          {pressKit.venues.slice(0, 4).map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-[110px] items-center justify-center border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 sm:min-h-[130px] lg:min-h-[150px]"
            >
              {venue.logo ? (
                <Image
                  src={venue.logo}
                  alt={venue.name}
                  width={220}
                  height={90}
                  className="max-h-[70px] w-full object-contain opacity-80 transition hover:opacity-100"
                />
              ) : (
                <p className="text-center font-sans text-[0.72rem] font-black uppercase leading-5 tracking-[0.14em] text-white/50">
                  {venue.name}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:mx-auto sm:max-w-[75%] sm:grid-cols-3 lg:gap-6">
          {pressKit.venues.slice(4).map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-[110px] items-center justify-center border border-white/10 bg-white/[0.025] p-5 transition hover:border-white/20 sm:min-h-[130px] lg:min-h-[150px]"
            >
              {venue.logo ? (
                <Image
                  src={venue.logo}
                  alt={venue.name}
                  width={220}
                  height={90}
                  className="max-h-[70px] w-full object-contain opacity-80 transition hover:opacity-100"
                />
              ) : (
                <p className="text-center font-sans text-[0.72rem] font-black uppercase leading-5 tracking-[0.14em] text-white/50">
                  {venue.name}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
