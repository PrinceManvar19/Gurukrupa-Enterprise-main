'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'

const STACK = [
  { name: 'React', label: 'Web platforms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', label: 'Backend APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Flutter', label: 'Mobile apps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Python', label: 'AI & scripts', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AI', label: 'Automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'React Native', label: 'Mobile apps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'IoT', label: 'Connected devices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'VB.NET', label: 'Legacy systems', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
  { name: 'PHP', label: 'Web backends', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
]

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="tech-stack" ref={sectionRef} className="tech-bento-section relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="mb-8 text-center">
          <div>
            <span className="text-sm text-accent font-medium tracking-wider uppercase mb-3 block">
              Tech Stack
            </span>
            <h2 className="tech-bento-heading mb-3 font-bold text-foreground">
              Modern engineering for <span className="gradient-text">enterprise</span> delivery
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Built with the technologies that power automation, AI, mobile experiences, and scalable web platforms.
            </p>
          </div>
        </ScrollReveal>

        <div className="tech-bento-grid mx-auto grid max-w-3xl">
          {STACK.map((item, idx) => (
            <ScrollReveal key={item.name} delay={idx * 0.05} direction="up" className="group">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.45, ease: 'easeOut' }}
                className="tech-bento-card"
              >
                <img src={item.icon} alt="" aria-hidden="true" className="mx-auto h-9 w-9 object-contain" />
                <h3>{item.name}</h3>
                <p>{item.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
