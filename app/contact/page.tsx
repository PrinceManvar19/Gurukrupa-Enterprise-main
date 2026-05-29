import { Clock, Mail, MapPin, MessageSquareText, Phone, ShieldCheck } from 'lucide-react'

import { LeadInquiryForm } from '@/components/sections/lead-inquiry-form'

const contactCards = [
  {
    label: 'Email',
    value: 'hello@gurukrupaenterprise.com',
    href: 'mailto:hello@gurukrupaenterprise.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 81418 40404',
    href: 'tel:+918141840404',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'Ahmedabad, Gujarat, India',
    href: undefined,
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <main className="innerpage relative min-h-screen overflow-hidden pt-28">
      <section className="relative overflow-hidden bg-transparent py-24">
        <div className="absolute inset-0 bg-[var(--bg-section)]/40 backdrop-blur-[1px]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-accent/20 bg-[var(--card-bg)]/70 px-4 py-2 text-sm font-semibold text-accent backdrop-blur">
                Contact Gurukrupa Enterprise
              </span>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
                Let&apos;s turn your requirement into a clear build plan.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
                Reach out for digital products, full-stack development, SWAS delivery, automation, mobile apps, web apps, AI agents, and enterprise systems.
              </p>
            </div>

            <div className="rounded-lg border border-accent/15 bg-[var(--card-bg)]/80 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#1a56db] to-[#0ea5e9]">
                  <MessageSquareText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">Response Flow</div>
                  <div className="text-sm text-[var(--text-secondary)]">Inquiry to consultation</div>
                </div>
              </div>
              <div className="grid gap-3">
                {[
                  ['1', 'Share your requirement'],
                  ['2', 'We review fit, scope, and urgency'],
                  ['3', 'You receive the next practical step'],
                ].map(([step, text]) => (
                  <div key={step} className="flex items-center gap-3 rounded-lg border border-accent/15 bg-[var(--bg-section)]/60 p-4 text-sm text-[var(--text-secondary)]">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-sky-400/15 font-black text-accent">{step}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/60 to-background" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">Direct Contact</span>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">Choose the fastest way to reach us.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon
              const content = (
                <div className="glass-card card-hover h-full rounded-lg p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{card.label}</div>
                  <div className="mt-2 break-words text-lg font-semibold text-foreground">{card.value}</div>
                </div>
              )

              return card.href ? (
                <a key={card.label} href={card.href}>
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              )
            })}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="glass-card rounded-lg p-6">
              <Clock className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Good for urgent builds</h3>
              <p className="mt-2 text-muted-foreground">
                Send your deadline, current system, expected users, and the core workflow. That helps us respond with sharper guidance.
              </p>
            </div>
            <div className="glass-card rounded-lg p-6">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-xl font-bold text-foreground">Built for serious business requirements</h3>
              <p className="mt-2 text-muted-foreground">
                We can discuss product planning, app development, AI automation, IoT, legacy systems, and post-launch service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LeadInquiryForm compact />
    </main>
  )
}
