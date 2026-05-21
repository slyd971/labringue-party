"use client";

import Image from "next/image";
import { Instagram, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { pressKit } from "@/data/config";
import { MagneticButton } from "./MagneticButton";

export function ContactSection() {
  const contact = pressKit.contact;

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="absolute bottom-[-12rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-magenta/35 blur-3xl" />
      <div className="section-shell relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[540px] overflow-hidden border border-white/12"
          >
            <Image
              src={contact.image}
              alt={contact.title}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-lime">{contact.eyebrow}</p>
              <h2 className="display-type mt-4 text-[clamp(4rem,9vw,8rem)] uppercase leading-[0.8] text-white">
                {contact.heading}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="self-end"
          >
            <h2 className="display-type text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.78] text-white">
              {contact.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">{contact.body}</p>
            <div className="mt-8 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
              <a className="flex items-center gap-3 border border-white/12 p-4 transition hover:border-magenta" href={`mailto:${contact.email}`}>
                <Mail className="h-5 w-5 text-lime" />
                <span>{contact.email}</span>
              </a>
              <a className="flex items-center gap-3 border border-white/12 p-4 transition hover:border-magenta" href={`mailto:${contact.secondaryEmail}`}>
                <Mail className="h-5 w-5 text-lime" />
                <span>{contact.secondaryEmail}</span>
              </a>
              <a className="flex items-center gap-3 border border-white/12 p-4 transition hover:border-magenta" href="https://instagram.com" target="_blank">
                <Instagram className="h-5 w-5 text-lime" />
                <span>{contact.instagram}</span>
              </a>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {contact.people.map((person) => (
                <a
                  key={person.email}
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-4 border border-white/12 bg-white/[0.04] p-4 transition hover:border-lime"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime text-black">
                    <UserRound className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="display-type block text-3xl uppercase leading-none text-white">{person.name}</span>
                    <span className="mt-1 block text-xs font-black uppercase tracking-[0.2em] text-white/58">
                      {person.role}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <form className="mt-8 grid gap-3">
              {contact.formFields.map((field) => (
                <label key={field} className="sr-only" htmlFor={field}>
                  {field}
                </label>
              ))}
              <div className="grid gap-3 sm:grid-cols-3">
                {contact.formFields.slice(0, 3).map((field) => (
                  <input
                    key={field}
                    id={field}
                    placeholder={field}
                    className="min-h-14 border border-white/14 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-lime"
                  />
                ))}
              </div>
              <textarea
                id={contact.formFields[3]}
                placeholder={contact.formFields[3]}
                rows={6}
                className="border border-white/14 bg-white/[0.06] p-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-lime"
              />
              <div className="mt-4">
                <MagneticButton href="mailto:partnerships@labringue.paris">
                  {pressKit.ctas.contact}
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
