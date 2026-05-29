'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cog,
  Factory,
  HardHat,
  Layers3,
  Store,
  Truck,
  Users,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'

const industries = [
  {
    name: 'Manufacturing',
    description: 'ERP & floor automation',
    icon: Factory,
  },
  {
    name: 'Retail',
    description: 'Orders, billing & CRM',
    icon: Store,
  },
  {
    name: 'Infrastructure',
    description: 'Project visibility systems',
    icon: Building2,
  },
  {
    name: 'Distribution',
    description: 'Inventory & route workflows',
    icon: Truck,
  },
  {
    name: 'Construction',
    description: 'Site operations tracking',
    icon: HardHat,
  },
  {
    name: 'Corporate',
    description: 'Internal portals & automation',
    icon: BriefcaseBusiness,
  },
]

const stats = [
  { value: 6, suffix: '', label: 'Core Product Areas', icon: Cog },
  { value: 4, suffix: '', label: 'Delivery Phases', icon: Layers3 },
  { value: 100, suffix: '%', label: 'SWAS Delivery', icon: CheckCircle2 },
  { value: 500, suffix: '+', label: 'Business Users', icon: Users },
]

const marqueeItems = ['Manufacturing', 'Retail', 'Infrastructure', 'Distribution', 'Construction', 'Corporate', 'Automation', 'SWAS Delivery']

function IndustryCard({ industry, index, compact }: { industry: (typeof industries)[number]; index: number; compact: boolean }) {
  const Icon = industry.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="group relative rounded-2xl bg-linear-to-br from-[#2563EB] to-[#06B6D4] p-px shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(37,99,235,0.16)]"
    >
      <div
        className={`flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white text-center transition duration-200 ease-out group-hover:border-transparent group-hover:bg-[#f0f7ff] ${
          compact ? 'min-h-38 p-4' : 'min-h-56 p-6'
        }`}
      >
        <div
          className={`flex items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#2563EB] transition duration-200 group-hover:scale-105 group-hover:bg-white group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.16)] ${
            compact ? 'mb-3 h-12 w-12' : 'mb-5 h-16 w-16'
          }`}
        >
          <Icon className={compact ? 'h-6 w-6' : 'h-8 w-8'} />
        </div>
        <h3 className={`${compact ? 'text-base' : 'text-lg'} font-bold text-[#0A1628]`}>{industry.name}</h3>
        <p className={`${compact ? 'mt-1 text-xs' : 'mt-2 text-sm'} leading-relaxed text-slate-600`}>{industry.description}</p>
      </div>
    </motion.div>
  )
}

function CountUpStat({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let frame = 0
    const totalFrames = 52

    const tick = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [active, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
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
      className={`relative overflow-hidden bg-white ${isTeaser ? 'py-0' : 'scroll-mt-28 py-28'}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.16),transparent_36%),radial-gradient(ellipse_at_15%_34%,rgba(6,182,212,0.11),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f7fbff_48%,#ffffff_100%)]" />
      <motion.div
        aria-hidden="true"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 opacity-70 [background-size:180%_180%] bg-[linear-gradient(115deg,rgba(37,99,235,0.07),rgba(6,182,212,0.05),rgba(255,255,255,0))]"
      />

      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal direction="up" className={isTeaser ? 'mb-8 text-center' : 'mx-auto mb-16 max-w-4xl text-center'}>
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.32em] text-cyan-500">
            TRUSTED BY
          </span>
          <h2
            className={
              isTeaser
                ? 'text-3xl font-black leading-tight text-[#0A1628] md:text-5xl'
                : 'text-5xl font-black leading-[1.02] text-[#0A1628] md:text-6xl lg:text-7xl'
            }
          >
            Trusted By Teams{' '}
            <span className="bg-linear-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">Like Yours</span>
          </h2>
          <p data-partners-description className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-slate-600 md:text-xl">
            Delivered for teams in manufacturing, retail, infrastructure, and enterprise operations across Gujarat and beyond.
          </p>
        </ScrollReveal>

        <div className="partners-industry-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 0.05} direction="scale">
              <IndustryCard industry={industry} index={index} compact={isTeaser} />
            </ScrollReveal>
          ))}
        </div>

        {isTeaser ? (
          <div data-partners-cta className="mt-10 flex justify-center">
            <a
              href="/partners"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_34px_rgba(37,99,235,0.24)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(37,99,235,0.34)]"
            >
              View All Industries
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7, ease: 'easeOut' }}
              className="relative mt-20 overflow-hidden rounded-2xl bg-linear-to-br from-[#0A1628] via-[#10294f] to-[#0B3A6E] p-8 shadow-[0_30px_80px_rgba(10,22,40,0.24)] md:p-12"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.20),transparent_38%)]" />

              <div className="relative grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                {stats.map((stat, index) => {
                  const Icon = stat.icon

                  return (
                    <div
                      key={stat.label}
                      className={`px-5 ${index > 0 ? 'lg:border-l lg:border-white/12' : ''}`}
                    >
                      <Icon className="mx-auto mb-4 h-8 w-8 text-cyan-300" />
                      <div className="text-5xl font-black tracking-tight text-white md:text-6xl">
                        <CountUpStat value={stat.value} suffix={stat.suffix} active={isInView} />
                      </div>
                      <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-slate-300">{stat.label}</p>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 py-4 shadow-sm backdrop-blur">
              <div className="partners-marquee flex w-max gap-3">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <span
                    key={`${item}-${index}`}
                    className="rounded-full border border-cyan-100 bg-[#f0f7ff] px-5 py-2 text-sm font-bold text-[#0A1628]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
