'use client'

import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import {
  Cpu,
  Code2,
  Layers,
  Network,
  Shield,
  Sparkles,
  Smartphone,
  GitBranch,
  Database,
} from 'lucide-react'

const STACK = [
  { key: 'React', label: 'React', gradient: 'from-primary to-accent', icon: Code2 },
  { key: 'React Native', label: 'React Native', gradient: 'from-accent to-primary', icon: Smartphone },
  { key: 'Node.js', label: 'Node.js', gradient: 'from-primary to-accent', icon: Network },
  { key: 'Flutter', label: 'Flutter', gradient: 'from-accent to-primary', icon: Layers },
  { key: 'Python', label: 'Python', gradient: 'from-primary to-accent', icon: Database },
  { key: 'AI', label: 'AI', gradient: 'from-accent to-primary', icon: Sparkles },
  { key: 'IoT', label: 'IoT', gradient: 'from-primary to-accent', icon: Network },
  { key: 'VB.NET', label: 'VB.NET', gradient: 'from-accent to-primary', icon: GitBranch },
  { key: 'PHP', label: 'PHP', gradient: 'from-primary to-accent', icon: Cpu },
]

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const items = useMemo(() => {
    return STACK.map((s) => ({ ...s, Icon: s.icon }))
  }, [])

  return (
    <section id="tech-stack" ref={sectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="mb-8 text-center">
        <div
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Tech Stack
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">
            Modern engineering for <span className="gradient-text">enterprise</span> delivery
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Built with the technologies that power automation, AI, mobile experiences, and scalable web platforms.
          </p>
        </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <ScrollReveal key={item.key} delay={idx * 0.05} direction="up" className="group">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.05, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="glass-card flex items-center gap-2 rounded-full">
                <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}>
                  {item.Icon ? <item.Icon className="h-3.5 w-3.5 text-white" /> : null}
                </span>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </div>
            </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          className="mt-8 flex justify-center"
        >
          <a
            href="/solutions"
            className="rounded-lg px-5 py-3 text-sm font-semibold text-accent transition hover:text-primary"
          >
            Learn More -&gt;
          </a>
        </motion.div>
      </div>
    </section>
  )
}
