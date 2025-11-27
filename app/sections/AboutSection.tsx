"use client"

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-4xl px-6 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl mb-6"
      >
        About
      </motion.h3>
      <div className="space-y-4 text-[15px] leading-relaxed text-textSecondary font-sans">
        <p>
          I craft editorial narratives with a cinematic sensibility?balancing rhythm, color, and sound to amplify story.
        </p>
        <p>
          From short films and brand montage to music videos, I thrive where pacing meets emotion.
        </p>
        <p className="font-mono text-textPrimary">
          Tools: Premiere Pro, DaVinci Resolve, After Effects, Logic Pro
        </p>
      </div>
    </section>
  )
}
