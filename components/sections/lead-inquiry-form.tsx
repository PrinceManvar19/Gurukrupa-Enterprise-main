'use client'

import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Mail, MessageSquareText, Phone, User } from 'lucide-react'

const WHATSAPP_NUMBER = '918141840404'

type FormErrors = {
  name?: string
  requirement?: string
}

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.04 3.2A12.72 12.72 0 0 0 5.08 22.36L3.2 29.2l7-1.84a12.68 12.68 0 0 0 5.84 1.48h.01A12.82 12.82 0 0 0 28.8 16.08 12.78 12.78 0 0 0 16.04 3.2Zm0 23.48h-.01a10.58 10.58 0 0 1-5.4-1.48l-.39-.23-4.15 1.09 1.11-4.04-.26-.42a10.56 10.56 0 1 1 9.1 5.08Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  )
}

export function LeadInquiryForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<FormErrors>({})
  const [confirmation, setConfirmation] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const company = String(formData.get('company') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const service = String(formData.get('service') || '').trim()
    const requirement = String(formData.get('requirement') || '').trim()

    const nextErrors: FormErrors = {}

    if (!name) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!requirement) {
      nextErrors.requirement = 'Please tell us about your requirement.'
    }

    setErrors(nextErrors)
    setConfirmation('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const whatsappMessage = `
Hello Gurukrupa Enterprise! 👋

I'd like to inquire about your services.

*Name:* ${name}
*Email:* ${email || 'Not provided'}
*Phone:* ${phone || 'Not provided'}
${company ? `*Company:* ${company}\n` : ''}${service ? `*Interested In:* ${service}\n` : ''}
*Message:*
${requirement}

Sent from website inquiry form.
`.trim()

    const encodedMsg = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank', 'noopener,noreferrer')
    setConfirmation('Your message is ready — WhatsApp will open to send it.')
  }

  return (
    <section id="lead-inquiry" className={`relative overflow-hidden ${compact ? 'py-16' : 'py-24'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/60 to-background" />
      <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">
              Lead Inquiry
            </span>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Tell us what you want to <span className="gradient-text">build next</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Share your product, service, or automation requirement. We will review it and respond with the next practical step.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {['Product consultation', 'Service requirement', 'SWAS delivery plan', 'Custom enterprise build'].map((item) => (
                <div key={item} className="rounded-lg border border-accent/15 bg-card/70 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="glass-card rounded-lg p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="relative block">
                <User className="pointer-events-none absolute left-4 top-[1.15rem] h-4 w-4 text-accent" />
                <input
                  aria-invalid={Boolean(errors.name)}
                  className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent aria-invalid:border-destructive"
                  name="name"
                  placeholder="Name"
                />
                {errors.name && <span className="mt-1 block text-xs font-medium text-destructive">{errors.name}</span>}
              </label>
              <label className="relative">
                <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" name="company" placeholder="Company" />
              </label>
              <label className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input type="email" className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" name="email" placeholder="Email" />
              </label>
              <label className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" name="phone" placeholder="Phone" />
              </label>
            </div>

            <select className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-3.5 text-foreground outline-none transition focus:border-accent" defaultValue="" name="service">
              <option value="" disabled>
                Select inquiry type
              </option>
              <optgroup label="Products">
                <option>Go Digital Chat</option>
                <option>Mod GST</option>
                <option>Follow-up.io</option>
                <option>Scratch DIGI</option>
                <option>Mob Order</option>
                <option>Election Data Extractor</option>
              </optgroup>
              <optgroup label="Services">
                <option>Web App Development</option>
                <option>Mobile App Development</option>
                <option>AI & Automation</option>
                <option>Enterprise Backend & APIs</option>
                <option>IoT / Automation</option>
              </optgroup>
            </select>

            <label className="relative mt-4 block">
              <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-accent" />
              <textarea
                aria-invalid={Boolean(errors.requirement)}
                className="min-h-36 w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent aria-invalid:border-destructive"
                name="requirement"
                placeholder="Tell us about your requirement"
              />
              {errors.requirement && <span className="mt-1 block text-xs font-medium text-destructive">{errors.requirement}</span>}
            </label>

            {confirmation && (
              <p className="mt-4 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-3 text-sm font-medium text-foreground">
                {confirmation}
              </p>
            )}

            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-lg btn-premium px-8 py-4 text-base font-semibold text-primary-foreground">
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              Send via WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
