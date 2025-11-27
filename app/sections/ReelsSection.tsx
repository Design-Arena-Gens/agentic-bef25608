"use client"

import { motion } from 'framer-motion'
import { Play, Clapperboard } from 'lucide-react'

export function ReelsSection() {
  return (
    <section id="reels" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl mb-8"
      >
        Reels
      </motion.h3>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: "Cinematic Reel 2025", url: "https://player.vimeo.com/video/76979871?h=8272103f6e" },
          { title: "Commercial Cuts", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ].map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-white/5 bg-surface accent-ring"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={item.url}
                title={item.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-4 flex items-center gap-3 text-sm">
              <Clapperboard className="w-4 h-4 text-accentGlow" />
              <span className="font-sans">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
