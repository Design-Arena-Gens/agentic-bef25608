"use client"

import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, MeshDistortMaterial, Icosahedron } from '@react-three/drei'
import { Suspense } from 'react'
import { motion } from 'framer-motion'

function DistortedIco() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <Icosahedron args={[1.4, 1]} castShadow receiveShadow>
        <MeshDistortMaterial color={"#00D1FF"} emissive={"#00D1FF"} emissiveIntensity={0.35} roughness={0.2} metalness={0.1} distort={0.45} speed={2.4} />
      </Icosahedron>
    </Float>
  )
}

export function Hero3D() {
  return (
    <section id="top" className="relative min-h-[82vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,209,255,0.08),transparent_60%)]" />
      <motion.div
        className="absolute z-10 text-center px-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-5xl md:text-7xl tracking-tight">
          Editorial Craft, Cinematic Rhythm
        </h2>
        <p className="font-mono mt-4 text-textSecondary">
          Video Editor & Visual Storyteller
        </p>
      </motion.div>

      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 4.2], fov: 55 }} shadows>
          {/* @ts-expect-error R3F intrinsic */}
          <ambientLight intensity={0.5} />
          {/* @ts-expect-error R3F intrinsic */}
          <directionalLight position={[4, 6, 5]} intensity={1.4} castShadow />
          <Suspense fallback={null}>
            <DistortedIco />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
      </div>
    </section>
  )
}
