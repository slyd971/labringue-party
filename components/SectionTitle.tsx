"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  kicker?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionTitle({
  eyebrow,
  title,
  kicker,
  align = "left",
  tone = "dark"
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto max-w-5xl text-center" : "max-w-5xl"}
    >
      <p
        className={`mb-4 text-xs font-black uppercase tracking-[0.34em] ${
          tone === "light" ? "text-lime" : "text-magenta"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`display-type text-balance text-[clamp(3rem,10vw,8.8rem)] uppercase leading-[0.82] ${
          tone === "light" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {kicker ? (
        <p
          className={`mt-6 max-w-3xl text-base leading-7 md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${tone === "light" ? "text-white/68" : "text-black/62"}`}
        >
          {kicker}
        </p>
      ) : null}
    </motion.div>
  );
}
