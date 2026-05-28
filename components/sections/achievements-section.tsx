'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, MessageSquare, Rocket } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

const achievements = [
  {
    year: '2022',
    title: 'Founded & first product shipped',
    description: 'Started product delivery with SWAS model in Ahmedabad.',
    icon: Rocket,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2023',
    title: 'Go Digital Chat 500+ business users',
    description: 'Expanded business messaging adoption across Gujarat.',
    icon: MessageSquare,
    gradient: 'from-accent to-primary',
  },
  {
    year: '2024',
    title: 'Election Data Extractor launched',
    description: 'Automated PDF electoral roll extraction tool.',
    icon: FileText,
    gradient: 'from-primary to-accent',
  },
]

type AchievementsMode = 'teaser' | 'full'

export function AchievementsSection({ mode = 'full' }: { mode?: AchievementsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={`journey-timeline-section relative flex min-h-screen flex-col justify-center overflow-hidden py-16 ${isTeaser ? '' : 'scroll-mt-28'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" className="mb-12 text-center">
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-3 block">
            Our Journey
          </span>
          <h2 className="journey-heading font-bold text-foreground">
            Company <span className="gradient-text">Milestones</span>
          </h2>
          {!isTeaser ? (
            <p className="text-muted-foreground text-base max-w-3xl mx-auto mt-4 leading-relaxed">
              A practical journey of products shipped, workflows automated, and SWAS delivery improved for business teams.
            </p>
          ) : null}
        </ScrollReveal>

        <div className="journey-timeline mx-auto max-w-5xl">
          <div className="journey-line" />
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.year} delay={index * 0.12} direction="up" className="journey-item-wrap">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.45, ease: 'easeOut' }}
                className="journey-item"
              >
                <span className="journey-year">{achievement.year}</span>
                <span className="journey-dot" />
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/achievements"
            className="rounded-lg px-5 py-3 text-sm font-semibold text-accent transition hover:text-primary"
          >
            Learn More -&gt;
          </a>
        </div>
      </div>
    </section>
  )
}
