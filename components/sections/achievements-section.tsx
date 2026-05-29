'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

const achievements = [
  {
    year: '2022',
    title: 'Founded & First Product Shipped',
    icon: '🚀',
    tag: 'Product Launch',
    bullets: ['Started product delivery with the SWAS model in Ahmedabad.', 'Shipped the first business workflow solution for local teams.'],
  },
  {
    year: '2023',
    title: 'Go Digital Chat Reached 500+ Users',
    icon: '💬',
    tag: 'Growth',
    bullets: ['Expanded WhatsApp Business adoption across Gujarat.', 'Helped teams automate customer engagement and follow-ups.'],
  },
  {
    year: '2024',
    title: 'Election Data Extractor Launched',
    icon: '🗳️',
    tag: 'Automation',
    bullets: ['Converted PDF electoral rolls into structured CSV and Excel outputs.', 'Improved OCR accuracy for high-volume data extraction.'],
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
      className={`journey-timeline-section relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--bg-main)] py-16 ${
        isTeaser ? '' : 'scroll-mt-28'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_18%_48%,rgba(26,86,219,0.12),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(6,182,212,0.12),transparent_30%)]" />
      <div className="pointer-events-none absolute bottom-16 left-6 top-16 hidden w-px overflow-hidden rounded-full bg-slate-200 md:block">
        <motion.span
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="block h-3/4 origin-top rounded-full bg-linear-to-b from-[#1A56DB] to-[#06B6D4]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal direction="up" className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.28em] text-cyan-500">
            OUR JOURNEY
          </span>
          <h2 className="journey-heading text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl lg:text-6xl">
            Company <span className="gradient-text">Milestones</span>
          </h2>
          {!isTeaser ? (
            <p className="mx-auto mt-5 max-w-[600px] text-lg leading-relaxed text-[var(--text-secondary)]">
              A practical journey of products shipped, workflows automated, and SWAS delivery improved for business teams.
            </p>
          ) : null}
        </ScrollReveal>

        <div className="modern-journey-timeline relative mx-auto max-w-6xl">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="modern-journey-line absolute left-6 top-0 h-full w-1 origin-top rounded-full md:left-1/2 md:-translate-x-1/2"
          />
          {achievements.map((achievement, index) => (
            <div
              key={achievement.year}
              className="relative mb-10 grid gap-6 pl-20 last:mb-0 md:grid-cols-[1fr_120px_1fr] md:items-center md:gap-8 md:pl-0"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.16, duration: 0.45, ease: 'easeOut' }}
                className="absolute left-0 top-5 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--card-bg)] shadow-[0_0_0_8px_rgba(14,165,233,0.10),0_0_34px_rgba(26,86,219,0.32)] md:left-1/2 md:top-1/2 md:h-20 md:w-20 md:-translate-x-1/2 md:-translate-y-1/2"
              >
                <span className="rounded-full bg-linear-to-br from-[#1A56DB] to-[#06B6D4] bg-clip-text text-lg font-black text-transparent md:text-2xl">
                  {achievement.year}
                </span>
              </motion.div>

              <ScrollReveal
                delay={index * 0.12}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className={`milestone-card-wrap ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3'}`}
              >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ delay: index * 0.14, duration: 0.5, ease: 'easeOut' }}
                className={`milestone-card group relative rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_22px_60px_rgba(26,86,219,0.18)] ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                <span
                  className={`absolute top-8 hidden h-px w-8 bg-linear-to-r from-[#1A56DB] to-[#06B6D4] md:block ${
                    index % 2 === 0 ? '-right-8' : '-left-8'
                  }`}
                />
                <span
                  className={`absolute top-[27px] hidden h-3 w-3 rotate-45 border-t border-r border-cyan-400 bg-[var(--card-bg)] md:block ${
                    index % 2 === 0 ? '-right-[38px]' : '-left-[38px] rotate-[225deg]'
                  }`}
                />

                <div className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-section)] text-2xl shadow-inner">
                    {achievement.icon}
                  </span>
                  <span className="bg-linear-to-r from-[#1A56DB] to-[#06B6D4] bg-clip-text text-2xl font-black text-transparent">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold leading-tight text-[var(--text-primary)] md:text-2xl">{achievement.title}</h3>

                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {achievement.bullets.map((bullet) => (
                    <li key={bullet} className={`flex gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1A56DB]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-5 flex ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-section)] px-3 py-1 text-xs font-bold text-[#1A56DB]">
                    {achievement.tag}
                  </span>
                </div>
              </motion.div>
              </ScrollReveal>

              <div className="hidden md:block" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/achievements"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A56DB] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(26,86,219,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(26,86,219,0.34)]"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
