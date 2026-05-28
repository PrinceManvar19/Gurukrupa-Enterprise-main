'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { HeroSection } from '@/components/sections/hero-section'
import { SwasExplanationSection } from '@/components/sections/swas-explanation-section'
import { ServicesSection } from '@/components/sections/services-section'

import { AchievementsSection } from '@/components/sections/achievements-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'

import { ProductsSolutionsSection } from '@/components/sections/products-solutions-section'
import { CaseStudiesSection } from '@/components/sections/case-studies-section'
import { CTASection } from '@/components/sections/cta-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'



export default function Home() {
  return (
    <SmoothScroll>
      <main className="homepage relative overflow-hidden">
        <HeroSection />
        <SwasExplanationSection />
        <ServicesSection mode="teaser" />
        <ProductsSolutionsSection mode="teaser" />
        <TechStackSection />
        <WhyChooseUsSection />
        <CaseStudiesSection mode="teaser" />
        <AchievementsSection mode="teaser" />
        <CTASection />
      </main>
    </SmoothScroll>
  )
}
