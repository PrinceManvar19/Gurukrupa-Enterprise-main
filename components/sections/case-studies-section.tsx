'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

const caseStudies = [
  {
    product: 'ERP Management System',
    category: 'Service operations',
    title: 'Centralized ERP for multi-dept service business',
    summary: 'Role-based dashboards connected approvals, billing checkpoints, task ownership, and reporting.',
    metrics: [
      { value: '42%', label: 'faster approvals' },
      { value: '18 hrs', label: 'saved weekly' },
      { value: '6', label: 'workflows unified' },
    ],
    previewLabel: 'ERP',
  },
  {
    product: 'Retail POS Platform',
    category: 'Retail',
    title: 'Retail POS with follow-up automation',
    summary: 'A fast checkout workspace joined product lookup, customer history, reminders, and repeat follow-up cues.',
    metrics: [
      { value: '31%', label: 'quicker checkout' },
      { value: '24%', label: 'more follow-ups' },
      { value: '3', label: 'workflows connected' },
    ],
    previewLabel: 'POS',
  },
  {
    product: 'Inventory & Warehouse Automation',
    category: 'Warehouse',
    title: 'Inventory visibility for warehouse teams',
    summary: 'Scan-based stock movement, exception alerts, low-stock views, and daily summaries reduced manual checks.',
    metrics: [
      { value: '2.5x', label: 'faster stock lookup' },
      { value: '37%', label: 'fewer checks' },
      { value: '12', label: 'statuses tracked' },
    ],
    previewLabel: 'Warehouse',
  },
]

type CaseStudiesMode = 'teaser' | 'full'

export function CaseStudiesSection({ mode = 'full' }: { mode?: CaseStudiesMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'

  if (isTeaser) {
    return (
      <section id="case-studies" ref={sectionRef} className="case-metrics-section relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/70 to-background" />
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal direction="left" className="mx-auto mb-8 max-w-4xl text-center">
            <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-accent">Case Studies</span>
            <h2 className="case-metrics-heading font-bold tracking-tight text-foreground">
              Enterprise builds shown through <span className="gradient-text">outcomes</span>
            </h2>
          </ScrollReveal>

          <div className="mx-auto grid max-w-6xl gap-4">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.title} delay={index * 0.12} direction="left">
                <motion.a
                  href="/case-studies"
                  initial={{ opacity: 0, x: -28 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.12, duration: 0.45, ease: 'easeOut' }}
                  className="case-metric-card"
                >
                  <div className="case-metric-main">
                    <span>{study.previewLabel}</span>
                    <h3>{study.title}</h3>
                  </div>
                  <div className="case-metric-boxes">
                    {study.metrics.map((metric) => (
                      <div key={`${study.previewLabel}-${metric.value}`} className="case-metric-box">
                        <strong>{metric.value}</strong>
                        <small>{metric.label}</small>
                      </div>
                    ))}
                  </div>
                  <ArrowRight className="case-metric-arrow" />
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/case-studies" className="rounded-lg px-5 py-3 text-sm font-semibold text-accent transition hover:text-primary">
              View All Case Studies -&gt;
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="case-studies" ref={sectionRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/70 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal direction="left" className="mx-auto mb-10 max-w-4xl text-center">
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">Case Studies</span>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Enterprise builds shown through <span className="gradient-text">outcomes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            A snapshot of how we approach workflow problems, software architecture, launch readiness, and operational improvement.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.title} delay={index * 0.15} direction="left">
              <motion.article
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
                    <div key={metric.value} className="rounded-lg border border-accent/20 bg-accent/10 p-3 text-sm font-semibold text-foreground">
                      {metric.value} {metric.label}
                    </div>
                  ))}
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
