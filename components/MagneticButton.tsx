"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  download
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18 });
  const springY = useSpring(y, { stiffness: 160, damping: 18 });
  const iconX = useTransform(springX, [-18, 18], [-3, 3]);

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  }

  const variants = {
    primary: "bg-lime text-black shadow-lime hover:bg-white",
    secondary: "border border-white/22 bg-white/8 text-white hover:border-magenta hover:bg-magenta/18",
    ghost: "border border-black/15 bg-black text-white hover:bg-magenta"
  };

  return (
    <motion.div style={{ x: springX, y: springY }} onMouseLeave={() => {
      x.set(0);
      y.set(0);
    }}>
      <Link
        href={href}
        download={download}
        onMouseMove={handleMove}
        className={`group inline-flex min-h-12 items-center gap-3 rounded-full px-6 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${variants[variant]}`}
      >
        <span>{children}</span>
        <motion.span style={{ x: iconX }} aria-hidden="true">
          <ArrowUpRight className="h-4 w-4" />
        </motion.span>
      </Link>
    </motion.div>
  );
}
