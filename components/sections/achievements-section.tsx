'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Trophy, Star, Zap, Globe, Rocket, Shield } from 'lucide-react'

const achievements = [
  {
    year: '2024',
    title: 'Global Innovation Award',
    description: 'Recognized for groundbreaking solutions in enterprise technology.',
    icon: Trophy,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2023',
    title: 'Industry Leadership',
    description: 'Named among top 100 most innovative companies worldwide.',
    icon: Star,
    gradient: 'from-accent to-primary',
  },
  {
    year: '2022',
    title: 'Digital Transformation Excellence',
    description: 'Awarded for exceptional digital transformation initiatives.',
    icon: Zap,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Successfully expanded operations to 15+ countries.',
    icon: Globe,
    gradient: 'from-accent to-primary',
  },
  {
    year: '2019',
    title: 'Tech Pioneer Award',
    description: 'Recognized for pioneering AI-driven business solutions.',
    icon: Rocket,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through technology.',
    icon: Shield,
    gradient: 'from-accent to-primary',
  },
]

type AchievementsMode = 'teaser' | 'full'

export function AchievementsSection({ mode = 'full' }: { mode?: AchievementsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const isTeaser = mode === 'teaser'
  const achievementsToRender = isTeaser ? achievements.slice(0, 3) : achievements

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px]" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="mb-10 text-center">
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Milestones &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A decade of excellence, innovation, and industry recognition that defines our 
            commitment to delivering extraordinary results.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className={isTeaser ? 'homepage-achievements-row mx-auto max-w-6xl' : 'relative max-w-4xl mx-auto'}>
          {/* Timeline Line */}
          {!isTeaser ? (
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-px" />
          ) : null}

          {achievementsToRender.map((achievement, index) => (
            <ScrollReveal key={achievement.year} delay={index * 0.15} direction="right">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
              className={isTeaser ? 'relative' : `relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              {!isTeaser ? (
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent -translate-x-1/2 z-10 ring-4 ring-background" />
              ) : null}

              {/* Content Card */}
              <div className={isTeaser ? '' : `ml-16 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={isTeaser ? 'group relative' : 'glass-card rounded-lg p-6 card-hover group relative overflow-hidden'}>
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={isTeaser ? 'shrink-0 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground' : `w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {isTeaser ? achievement.year : <achievement.icon className="w-6 h-6 text-white" />}
                    </div>
                    <div>
                      {!isTeaser ? <span className="text-sm text-accent font-medium">{achievement.year}</span> : null}
                      <h3 className={isTeaser ? 'text-base font-semibold text-foreground' : 'text-xl font-semibold mt-1 mb-2 text-foreground group-hover:gradient-text transition-all duration-300'}>
                        {achievement.title}
                      </h3>
                      <p className={isTeaser ? 'mt-1 line-clamp-1 text-sm text-muted-foreground' : 'text-muted-foreground text-sm leading-relaxed'}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {isTeaser ? (
          <div className="mt-8 flex justify-center">
            <a
              href="/achievements"
              className="rounded-lg px-5 py-3 text-sm font-semibold text-accent transition hover:text-primary"
            >
              Learn More -&gt;
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
