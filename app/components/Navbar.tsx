"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <motion.h1
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="prose-title text-2xl md:text-3xl font-display"
        >
          <Link href="#top" className="hover:text-accentGlow transition-colors">
            JESHUA DAVID
          </Link>
        </motion.h1>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#reels" className="text-textSecondary hover:text-textPrimary">Reels</Link>
          <Link href="#projects" className="text-textSecondary hover:text-textPrimary">Projects</Link>
          <Link href="#about" className="text-textSecondary hover:text-textPrimary">About</Link>
          <Link href="#contact" className="text-textSecondary hover:text-textPrimary">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
