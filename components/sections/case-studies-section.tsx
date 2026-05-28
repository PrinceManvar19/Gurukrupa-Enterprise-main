'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const caseStudies = [
  {
    product: 'ERP Management System',
    category: 'Service operations',
    title: 'Centralized ERP for a multi-department service business',
    summary: 'Role-based dashboards connected approvals, billing checkpoints, task ownership, and reporting.',
    metrics: ['42% faster approvals', '18 hrs saved weekly', '6 workflows unified'],
  },
  {
    product: 'Retail POS Platform',
    category: 'Retail',
    title: 'Modern POS and customer follow-up platform for retail operations',
    summary: 'A fast checkout workspace joined product lookup, customer history, reminders, and repeat follow-up cues.',
    metrics: ['31% quicker checkout', '24% more follow-ups', '3 workflows connected'],
  },
  {
    product: 'Inventory & Warehouse Automation',
    category: 'Warehouse',
    title: 'Inventory visibility layer for stock movement and warehouse teams',
    summary: 'Scan-based stock movement, exception alerts, low-stock views, and daily summaries reduced manual checks.',
    metrics: ['37% fewer checks', '2.5x faster lookup', '12 statuses tracked'],
  },
]

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="case-studies" ref={sectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/70 to-background" />
      <div className="absolute right-1/4 top-20 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">Case Studies</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Enterprise builds shown through <span className="gradient-text">outcomes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            A snapshot of how we approach workflow problems, software architecture, launch readiness, and operational improvement.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5, ease: 'easeOut' }}
              className="glass-card card-hover rounded-lg p-6"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {study.product}
                </span>
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {study.category}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-foreground">{study.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{study.summary}</p>

              <div className="mt-6 grid gap-3">
                {study.metrics.map((metric) => (
                  <div key={metric} className="rounded-lg border border-accent/20 bg-accent/10 p-3 text-sm font-semibold text-foreground">
                    {metric}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
