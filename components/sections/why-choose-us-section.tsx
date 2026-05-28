'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Shield, Zap, Cloud, Users } from 'lucide-react'

const bullets = [
  {
    icon: Shield,
    title: 'End-to-End Software Development',
    description: 'From discovery to delivery and optimization - engineering, integration, and launch support.',
    badge: 'Full lifecycle',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Zap,
    title: 'AI & Automation Expertise',
    description: 'Intelligent automation and AI-enabled workflows that reduce effort and accelerate outcomes.',
    badge: 'Intelligent ops',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Cloud,
    title: 'Scalable Enterprise Solutions',
    description: 'Architectures designed for growth, security, reliability, and long-term maintainability.',
    badge: 'Built to grow',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Users,
    title: 'Cross-Platform Development',
    description: 'Native-grade experiences across mobile and web - without compromising performance.',
    badge: 'Web + Mobile',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Shield,
    title: 'Dedicated Support & Optimization',
    description: 'Continuous improvements after go-live to keep systems fast, secure, and evolving.',
    badge: 'Post-launch',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Zap,
    title: 'Modern Technology Stack',
    description: 'React, Flutter, Node.js, Python, AI, and IoT - delivered with enterprise best practices.',
    badge: 'Latest tools',
    gradient: 'from-accent to-primary',
  },
]

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="why-choose-us" ref={sectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[140px]" />
      <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] bg-accent/10 rounded-full blur-[180px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="mb-10 text-center">
          <div>
            <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">Why Gurukrupa</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Built for <span className="gradient-text">enterprise</span> outcomes
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              A premium delivery model that combines engineering excellence with ongoing support, so your systems keep improving after go-live.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {bullets.slice(0, 4).map((b, idx) => (
            <ScrollReveal key={b.title} delay={idx * 0.1} direction="up" className="group">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
              >
                <div className="glass-card rounded-xl p-4 h-full card-hover relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${b.gradient} blur-2xl`} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center shadow-[0_0_28px_rgba(14,165,233,0.22)]`}
                      >
                        <b.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                        <p className="text-muted-foreground mt-1 text-[13px] leading-snug">{b.description}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium border border-accent/20 text-foreground"
                        style={{ background: 'var(--brand-green-soft)' }}
                      >
                        {b.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          className="mt-8 text-center"
        >
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-accent transition hover:text-primary"
          >
            Learn More -&gt;
          </a>
        </motion.div>
      </div>
    </section>
  )
}
