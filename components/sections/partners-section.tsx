'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'

const industries = [
  'Manufacturing',
  'Retail',
  'Infrastructure',
  'Distribution',
  'Construction',
  'Corporate',
]

function IndustryPill({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glass-card rounded-lg p-6 flex min-h-28 items-center justify-center card-hover relative overflow-hidden">
        <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
        <span className="relative z-10 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-foreground transition-colors group-hover:border-accent/45">
          {name}
        </span>
      </div>
    </motion.div>
  )
}

type PartnersMode = 'teaser' | 'full'

export function PartnersSection({ mode = 'full' }: { mode?: PartnersMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'

  return (
    <section
      id="partners"
      ref={sectionRef}
      className={`relative overflow-hidden ${isTeaser ? 'py-0' : 'py-32'}`}
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] translate-x-1/2" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className={isTeaser ? 'mb-8 text-center' : 'text-center mb-20'}>
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Trusted By
          </span>
          <h2 className={isTeaser ? 'text-3xl md:text-5xl font-bold text-foreground' : 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground'}>
            Trusted By Teams{' '}
            <span className="gradient-text">Like Yours</span>
          </h2>
          <p data-partners-description className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Delivered for teams in manufacturing, retail, infrastructure, and enterprise operations across Gujarat and beyond.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry} delay={index * 0.05} direction="scale">
            <IndustryPill
              name={industry}
              index={index}
            />
            </ScrollReveal>
          ))}
        </div>

        {/* Teaser CTA */}
        {isTeaser ? (
          <div data-partners-cta className="mt-10 flex justify-center">
            <a
              href="/partners"
              className="px-8 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
            >
              View All Industries
            </a>
          </div>
        ) : (
          /* Stats Banner */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 glass-card rounded-lg p-8 md:p-12 relative overflow-hidden"
          >
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">6</div>
                <p className="text-muted-foreground">Core Product Areas</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">4</div>
                <p className="text-muted-foreground">Delivery Phases</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
                <p className="text-muted-foreground">SWAS Delivery Mindset</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
