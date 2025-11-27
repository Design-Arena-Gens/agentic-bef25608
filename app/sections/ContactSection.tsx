"use client"

import { motion } from 'framer-motion'
import { Mail, Instagram, Link as LinkIcon } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl mb-8"
      >
        Contact
      </motion.h3>
      <div className="grid gap-4 md:grid-cols-3">
        <a href="mailto:hello@example.com" className="rounded-lg border border-white/5 bg-surface p-4 hover:shadow-glow transition-shadow flex items-center gap-3">
          <Mail className="w-4 h-4 text-accentGlow" />
          <span className="text-sm">Email</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-lg border border-white/5 bg-surface p-4 hover:shadow-glow transition-shadow flex items-center gap-3">
          <Instagram className="w-4 h-4 text-accentGlow" />
          <span className="text-sm">Instagram</span>
        </a>
        <a href="https://linktr.ee" target="_blank" rel="noreferrer" className="rounded-lg border border-white/5 bg-surface p-4 hover:shadow-glow transition-shadow flex items-center gap-3">
          <LinkIcon className="w-4 h-4 text-accentGlow" />
          <span className="text-sm">Linktree</span>
        </a>
      </div>
      <p className="mt-6 text-xs text-textSecondary">? {new Date().getFullYear()} Jeshua David</p>
    </section>
  )
}
