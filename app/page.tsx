'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'

import { AchievementsSection } from '@/components/sections/achievements-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'

import { ProductsSolutionsSection } from '@/components/sections/products-solutions-section'
import { CaseStudiesSection } from '@/components/sections/case-studies-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'



export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden">
        <HeroSection />
        <ProductsSolutionsSection />
        <CaseStudiesSection />
        <ServicesSection mode="teaser" />
        <TechStackSection />
        <WhyChooseUsSection />
        <AchievementsSection mode="teaser" />
        <TestimonialsSection mode="featured" />
        <CTASection />
      </main>
    </SmoothScroll>
  )
}
