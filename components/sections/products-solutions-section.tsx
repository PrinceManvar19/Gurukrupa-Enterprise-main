'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, FileSpreadsheet, Globe, Layers, MoreHorizontal, Shield, Sparkles, Workflow } from 'lucide-react'

type Product = {
  name: string
  category: string
  url?: string
  logo?: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  tags: string[]
  theme?: {
    background: string
    accent: string
    tint: string
    border: string
    menu: 'dots' | 'gst'
  }
}

const products: Product[] = [
  {
    name: 'Go Digital Chat',
    category: 'AI Communication',
    url: 'https://godigitalchat.com/',
    logo: 'https://gurukrupaenterprise.vercel.app/logos/go-digital-chat.png',
    description: 'AI-powered communication and customer engagement platform for businesses.',
    icon: Sparkles,
    tags: ['AI Chat', 'Automation', 'Support'],
    theme: {
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      accent: '#1B5E20',
      tint: 'rgba(27, 94, 32, 0.08)',
      border: 'rgba(27, 94, 32, 0.24)',
      menu: 'dots',
    },
  },
  {
    name: 'Mod GST',
    category: 'GST Billing',
    url: 'https://modgst.gurukrupaenterprise.com/',
    logo: 'https://gurukrupaenterprise.vercel.app/logos/mod-gst.png',
    description: 'Smart GST billing and taxation management solution for modern businesses.',
    icon: Shield,
    tags: ['GST', 'Billing', 'Reports'],
    theme: {
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      accent: '#004D40',
      tint: 'rgba(0, 77, 64, 0.08)',
      border: 'rgba(0, 77, 64, 0.24)',
      menu: 'gst',
    },
  },
  {
    name: 'Follow-up.io',
    category: 'Lead Follow-up',
    url: 'https://www.followupio.com/',
    logo: 'https://gurukrupaenterprise.vercel.app/logos/followupio.png',
    description: 'Automated customer follow-up and lead management platform.',
    icon: Workflow,
    tags: ['Leads', 'CRM', 'Reminders'],
    theme: {
      background: 'linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)',
      accent: '#4527A0',
      tint: 'rgba(69, 39, 160, 0.08)',
      border: 'rgba(69, 39, 160, 0.24)',
      menu: 'dots',
    },
  },
  {
    name: 'Scratch DIGI',
    category: 'Digital Operations',
    description: 'Digital business management and operational workflow platform.',
    icon: Layers,
    tags: ['Operations', 'Dashboards', 'Teams'],
  },
  {
    name: 'Mob Order',
    category: 'Mobile Ordering',
    description: 'Mobile-first smart ordering and management system.',
    icon: Globe,
    tags: ['Orders', 'Mobile', 'Retail'],
  },
  {
    name: 'Election Data Extractor',
    category: 'Automated Data Extraction',
    description: 'Extracts voter details from PDF electoral rolls into structured CSV/Excel output with enhanced OCR accuracy.',
    icon: FileSpreadsheet,
    tags: ['PDF Extraction', 'OCR', 'CSV/Excel'],
  },
]

type ProductsMode = 'teaser' | 'full'

export function ProductsSolutionsSection({ mode = 'full' }: { mode?: ProductsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'
  const visibleProducts = isTeaser ? products.slice(0, 3) : products

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`relative flex min-h-screen flex-col justify-center overflow-hidden ${
        isTeaser ? 'py-16' : 'scroll-mt-28 py-16'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]" />

      <div className={`container relative z-10 mx-auto px-6 ${isTeaser ? '' : 'flex min-h-0 flex-col'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={isTeaser ? 'mx-auto mb-10 max-w-3xl text-center' : 'mx-auto mb-6 max-w-5xl text-center'}
        >
          <span className={isTeaser ? 'mb-4 block text-sm font-medium uppercase tracking-wider text-accent' : 'mb-1 block text-xs font-medium uppercase tracking-wider text-accent'}>
            Products
          </span>
          <h2 className={isTeaser ? 'mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl' : 'mb-1 text-3xl font-bold text-foreground md:text-4xl'}>
            Digital products for <span className="gradient-text">modern businesses</span>
          </h2>
          <p className={isTeaser ? 'text-lg leading-relaxed text-muted-foreground' : 'text-sm leading-snug text-muted-foreground'}>
            A focused product portfolio for AI chat, GST billing, lead follow-up, digital operations, ordering, and engagement.
          </p>
        </motion.div>

        <div className={isTeaser ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3'}>
          {visibleProducts.map((product, index) => {
            const Icon = product.icon
            const featured = !isTeaser && index < 3
            const href = product.url ?? '/contact'
            const accent = product.theme?.accent ?? '#1A56DB'
            const tint = product.theme?.tint ?? 'rgba(26, 86, 219, 0.08)'
            const border = product.theme?.border ?? 'rgba(26, 86, 219, 0.2)'

            if (!isTeaser) {
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="group flex min-h-0 flex-col rounded-2xl border border-black/5 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: product.theme?.background ?? '#ffffff' }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white/80 shadow-sm">
                        {product.logo ? (
                          <img src={product.logo} alt={`${product.name} logo`} className="h-12 w-12 object-contain" />
                        ) : (
                          <Icon className="h-6 w-6" style={{ color: accent }} />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold leading-tight text-slate-950">{product.name}</h3>
                        <p className="mt-0.5 truncate text-[11px] font-medium text-slate-600">{product.category}</p>
                      </div>
                    </div>
                    {product.theme?.menu === 'gst' ? (
                      <span
                        className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
                        style={{ backgroundColor: accent }}
                      >
                        ₹ GST
                      </span>
                    ) : product.theme?.menu === 'dots' ? (
                      <MoreHorizontal className="h-5 w-5 shrink-0" style={{ color: accent }} />
                    ) : null}
                  </div>

                  <div className="mt-2 flex min-h-[24px] items-center">
                    {featured ? (
                      <span
                        className="rounded-full px-2.5 py-[3px] text-[10px] font-semibold text-white"
                        style={{ backgroundColor: accent }}
                      >
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 line-clamp-2 min-h-[36px] text-xs leading-[18px] text-slate-700">{product.description}</p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-2 py-[2px] text-[10px] font-semibold"
                        style={{ borderColor: border, backgroundColor: tint, color: accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2 pt-3">
                    {product.url ? (
                      <>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex h-[34px] flex-1 items-center justify-center rounded-lg px-3 text-xs font-semibold text-white"
                          style={{ backgroundColor: accent }}
                        >
                          Visit Product
                          <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex h-[34px] flex-1 items-center justify-center rounded-lg border px-3 text-xs font-semibold"
                          style={{ borderColor: accent, color: accent }}
                        >
                          Request a Demo
                        </a>
                      </>
                    ) : (
                      <a
                        href="/contact"
                        className="inline-flex h-[34px] w-full items-center justify-center rounded-lg px-3 text-xs font-semibold text-white"
                        style={{ backgroundColor: accent }}
                      >
                        Discuss Product
                      </a>
                    )}
                  </div>
                </motion.div>
              )
            }

            return (
              <motion.a
                key={product.name}
                href={href}
                target={product.url ? '_blank' : undefined}
                rel={product.url ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="group glass-card card-hover rounded-lg p-7"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  {featured ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      Featured
                    </span>
                  ) : null}
                </div>
                <h3 className="text-2xl font-semibold text-foreground group-hover:gradient-text">{product.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-accent/20 px-3 py-1 text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                  {product.url ? 'Visit Product' : 'Discuss Product'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            )
          })}
        </div>

        {isTeaser ? (
          <div className="mt-12 flex justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-lg btn-premium px-8 py-4 text-base font-semibold text-primary-foreground"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
