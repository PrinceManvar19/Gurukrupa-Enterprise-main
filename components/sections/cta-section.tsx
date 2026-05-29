'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary/15 to-accent/15 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/80" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="scale" className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card text-sm text-muted-foreground mb-8 border border-accent/30"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Ready to Build?</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            Have a <span className="gradient-text">project in mind?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Share your requirement and we&apos;ll send back a clear build plan within 24 hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/contact"
              className="group px-8 py-4 rounded-lg btn-premium text-white font-medium text-lg relative overflow-hidden inline-flex items-center justify-center gap-2 neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="mailto:gurukrupaenterprise247@gmail.com"
              className="px-8 py-4 rounded-lg glass-card text-foreground font-medium text-lg hover:border-accent/50 transition-all duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              gurukrupaenterprise247@gmail.com
            </motion.a>
          </motion.div>

        </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
