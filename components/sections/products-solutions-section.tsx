'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ArrowRight, ExternalLink, FileSpreadsheet, Globe, Layers, Shield, Sparkles, Workflow } from 'lucide-react'

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
  }
}

const products: Product[] = [
  {
    name: 'Go Digital Chat',
    category: 'WhatsApp Business API',
    url: 'https://godigitalchat.com/',
    logo: 'https://gurukrupaenterprise.vercel.app/logos/go-digital-chat.png',
    description: 'AI-powered communication and customer engagement platform for businesses.',
    icon: Sparkles,
    tags: ['AI Chat', 'Automation', 'Support'],
    theme: {
      background: 'linear-gradient(135deg, #e8f5e9, #c8e6c9)',
      accent: '#1B5E20',
      tint: 'rgba(27, 94, 32, 0.08)',
      border: 'rgba(27, 94, 32, 0.24)',
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
      background: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
      accent: '#004D40',
      tint: 'rgba(0, 77, 64, 0.08)',
      border: 'rgba(0, 77, 64, 0.24)',
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
      background: 'linear-gradient(135deg, #ede7f6, #d1c4e9)',
      accent: '#4527A0',
      tint: 'rgba(69, 39, 160, 0.08)',
      border: 'rgba(69, 39, 160, 0.24)',
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
  const featuredProducts = products.filter((product) => product.theme)
  const visibleProducts = isTeaser ? featuredProducts : products

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`products-showcase-section relative overflow-hidden ${
        isTeaser ? 'flex min-h-screen flex-col justify-center py-10' : 'scroll-mt-28 py-12'
      }`}
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary to-background" />
      <div className="absolute right-1/4 top-1/4 h-105 w-105 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 h-90 w-90 rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <ScrollReveal
          direction="up"
          className={isTeaser ? 'mx-auto mb-6 max-w-3xl text-center' : 'mx-auto max-w-5xl px-4 py-12 text-center md:py-20'}
        >
          <div>
            <span
              className={
                isTeaser
                  ? 'mb-3 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent'
                  : 'mb-5 inline-flex rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent'
              }
            >
              Products
            </span>
            <h1
              className={
                isTeaser
                  ? 'mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl'
                  : 'mb-5 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl'
              }
            >
              {isTeaser ? (
                <>
                  Digital products for <span className="gradient-text">modern businesses</span>
                </>
              ) : (
                'Productized systems for modern operations'
              )}
            </h1>
            <p
              className={
                isTeaser
                  ? 'text-base leading-relaxed text-muted-foreground md:text-lg'
                  : 'mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg'
              }
            >
              {isTeaser
                ? 'A focused preview across AI communication, GST billing, and follow-up automation.'
                : 'A focused portfolio across AI communication, GST billing, follow-up automation, operations, ordering, and custom workflows.'}
            </p>
          </div>
        </ScrollReveal>

        <div className={isTeaser ? 'products-app-grid grid gap-5 md:grid-cols-3' : 'grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3'}>
          {visibleProducts.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} isInView={isInView} compact={isTeaser} />
          ))}
        </div>

        {isTeaser ? (
          <div className="mt-8 flex justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-accent transition hover:text-primary"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function ProductCard({
  product,
  index,
  isInView,
  compact,
}: {
  product: Product
  index: number
  isInView: boolean
  compact: boolean
}) {
  const Icon = product.icon
  const featured = Boolean(product.theme)
  const href = product.url ?? '/contact'
  const accent = product.theme?.accent ?? '#1A56DB'
  const tint = product.theme?.tint ?? 'rgba(26, 86, 219, 0.08)'
  const border = product.theme?.border ?? 'rgba(26, 86, 219, 0.2)'
  const cardBackground = product.theme?.background ?? '#ffffff'

  return (
    <ScrollReveal delay={index * 0.1} direction="up">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
        className={`product-card group flex h-full flex-col gap-3 rounded-2xl border border-[#E5EBF5] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1A56DB] hover:shadow-[0_4px_24px_rgba(26,86,219,0.08)] ${
          compact ? 'min-h-90 p-5' : 'p-6'
        }`}
        style={{ background: cardBackground }}
      >
        <div className="flex items-start gap-4">
          <div className="flex shrink-0 items-center justify-center">
            {product.logo ? (
              <img src={product.logo} alt={product.name} className="h-16 w-16 rounded-xl bg-white object-contain p-1" />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] p-3 text-[#1A56DB]">
                <Icon className="h-6 w-6" />
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-1 items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold leading-tight text-slate-950">{product.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#6B7280]">{product.category}</p>
            </div>
            {featured ? (
              <span className="shrink-0 rounded-full px-2.5 py-0.75 text-[11px] font-semibold text-white" style={{ backgroundColor: accent }}>
                Featured
              </span>
            ) : null}
          </div>
        </div>

        {compact ? (
          <div className="my-3 h-2 rounded-full bg-white/70">
            <div className="h-full w-3/4 rounded-full" style={{ backgroundColor: accent }} />
          </div>
        ) : null}

        <p className={`${compact ? 'min-h-11' : 'min-h-16'} text-sm leading-relaxed text-slate-700`}>{product.description}</p>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs font-semibold"
              style={{ borderColor: border, backgroundColor: tint, color: accent }}
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={href}
          target={product.url ? '_blank' : undefined}
          rel={product.url ? 'noreferrer' : undefined}
          className="mt-auto inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-4.5 py-2.5 text-[13px] font-semibold no-underline"
          style={
            product.url
              ? { backgroundColor: accent, color: '#ffffff' }
              : { backgroundColor: 'transparent', border: '1.5px solid #1A56DB', color: '#1A56DB' }
          }
        >
          {product.url ? 'Visit Product' : 'Discuss Product'}
          {product.url ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-4 w-4" />}
        </a>
      </motion.div>
    </ScrollReveal>
  )
}
