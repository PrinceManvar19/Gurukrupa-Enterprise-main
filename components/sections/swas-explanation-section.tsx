'use client'

import { ScrollReveal } from '@/components/ScrollReveal'
import { ClipboardCheck, Rocket, LifeBuoy, RefreshCcw } from 'lucide-react'

const phases = [
  { title: 'Scope', detail: 'Map the workflow and business outcome.', icon: ClipboardCheck },
  { title: 'Build', detail: 'Ship the product with clean engineering.', icon: Rocket },
  { title: 'Support', detail: 'Stay available after launch.', icon: LifeBuoy },
  { title: 'Improve', detail: 'Refine the system as usage grows.', icon: RefreshCcw },
]

export function SwasExplanationSection() {
  return (
    <section id="swas" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/45 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal direction="up" className="mx-auto mb-8 max-w-3xl text-center">
          <span className="mb-3 block text-sm font-medium uppercase tracking-wider text-accent">SWAS Delivery Model</span>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Software WITH a <span className="gradient-text">Service</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
            We do not just hand over code. SWAS combines product engineering with hands-on planning,
            launch support, and continuous improvement.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon
            return (
              <ScrollReveal key={phase.title} delay={index * 0.08} direction="up">
                <div className="glass-card h-full rounded-lg p-5">
                  <Icon className="mb-4 h-6 w-6 text-accent" />
                  <h3 className="text-base font-semibold text-foreground">{phase.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{phase.detail}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
