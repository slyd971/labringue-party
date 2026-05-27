"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { pressKit } from "@/data/config";
import { MagneticButton } from "./MagneticButton";

export function HeroVideo() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 130]);
  const opacity = useTransform(scrollY, [0, 620], [1, 0.25]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={pressKit.heroVideo.poster}
        >
          <source src={pressKit.heroVideo.src} type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,0,145,.62),transparent_34%),linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.9))]" />
      <div className="absolute right-[-10rem] top-24 h-96 w-96 rounded-full bg-magenta/35 blur-3xl" />
      <div className="section-shell relative z-10 flex min-h-screen flex-col justify-between pb-8 pt-6">
        <div className="flex items-center justify-between gap-4">
          <Image
            src="/logo/Fichier%2034BRINGUE_PARTY_STAMP.png"
            alt="La Bringue"
            width={260}
            height={82}
            className="h-auto w-36 md:w-56"
            priority
          />
          <div className="hidden rounded-full border border-white/18 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur md:block">
            {pressKit.pressLabel}
          </div>
        </div>

        <div className="grid items-end gap-8 pb-10 md:grid-cols-[1fr_360px]">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex rounded-full border border-lime/40 bg-lime/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-lime">
              {pressKit.badge}
            </div>
            <h1 className="display-type text-[clamp(5.4rem,18vw,17rem)] uppercase leading-[0.74] text-white">
              {pressKit.eventName}
            </h1>
            <p className="mt-6 max-w-3xl text-balance text-xl font-medium leading-8 text-white/78 md:text-3xl">
              <strong>{pressKit.tagline}</strong>
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 md:text-base">
              {pressKit.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="#concept">{pressKit.ctas.primary}</MagneticButton>
              <MagneticButton href="/La-Bringue-Press-Kit.pdf" variant="secondary" download>
                {pressKit.ctas.secondary}
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="grid grid-cols-3 gap-2 md:grid-cols-1"
          >
            {pressKit.heroStats.map((stat) => (
              <div key={stat.label} className="border border-white/14 bg-white/[0.07] p-4 backdrop-blur-xl">
                <p className="display-type text-4xl leading-none text-lime md:text-6xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-white">
                  {stat.label}
                </p>
                <p className="mt-2 hidden text-sm text-white/54 md:block">{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          className="mx-auto h-14 w-px bg-gradient-to-b from-white via-magenta to-transparent"
        />
      </div>
    </section>
  );
}
