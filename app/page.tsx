import dynamic from 'next/dynamic'
import { Navbar } from '@/components/Navbar'
import { ReelsSection } from '@/sections/ReelsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { AboutSection } from '@/sections/AboutSection'
import { ContactSection } from '@/sections/ContactSection'

const Hero3D = dynamic(() => import('@/components/Hero3D').then(m => m.Hero3D), { ssr: false })

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero3D />
      <ReelsSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
