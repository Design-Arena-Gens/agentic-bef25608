"use client"

import { motion } from 'framer-motion'
import { Film, Sparkles } from 'lucide-react'

const projects = [
  { title: "Short Film ? Lumen", role: "Editor", year: "2024", description: "A moody exploration of light and memory.", tags: ["Short", "Narrative", "Color"] },
  { title: "Brand Montage ? Velocity", role: "Lead Editor", year: "2025", description: "High-tempo brand montage for tech product launch.", tags: ["Commercial", "Montage", "Rhythm"] },
  { title: "Music Video ? Drift", role: "Editor", year: "2023", description: "Dreamlike motion with chromatic flair.", tags: ["Music Video", "FX", "VFX"] }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl mb-8"
      >
        Projects
      </motion.h3>
      <div className="space-y-4">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-xl border border-white/5 bg-surface p-5 hover:shadow-glow/50 transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-display text-xl">{p.title}</h4>
              <span className="text-xs text-textSecondary">{p.year}</span>
            </div>
            <p className="mt-1 text-sm text-textSecondary">{p.description}</p>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <Film className="w-4 h-4 text-accentGlow" />
              <span className="font-mono">{p.role}</span>
              <div className="ml-2 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-textSecondary">{t}</span>
                ))}
              </div>
              <Sparkles className="ml-auto w-4 h-4 text-accentGlow" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
