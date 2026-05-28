'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

type TestimonialsMode = 'featured' | 'full'

export function TestimonialsSection({ mode = 'full' }: { mode?: TestimonialsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isFeatured = mode === 'featured'

  return (
    <section id="testimonials" ref={sectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className={isFeatured ? 'mb-6 text-center' : 'mb-10 text-center'}>
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Trust
          </span>
          <h2 className={isFeatured ? 'mb-4 text-3xl font-bold text-foreground md:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground'}>
            Delivered for <span className="gradient-text">working teams</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="scale">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-lg border border-accent/15 bg-card/55 p-6 text-center backdrop-blur md:p-8"
          >
            <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-accent" />
            <p className="text-lg font-medium leading-relaxed text-foreground md:text-2xl">
              Delivered for teams in manufacturing, retail, infrastructure, and enterprise operations across Gujarat and beyond.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
