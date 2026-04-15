import { HeroSection } from '@/widgets/hero'
import { MenuSection } from '@/widgets/menu'
import { PhilosophySection } from '@/widgets/philosophy'
import { AtmosphereSection } from '@/widgets/atmosphere'
import { SeasonalSection } from '@/widgets/seasonal'
import { TestimonialsSection } from '@/widgets/testimonials'
import { AccessSection } from '@/widgets/access'
import { CTASection } from '@/widgets/cta'
import { Footer } from '@/widgets/footer'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <MenuSection />
      <PhilosophySection />
      <AtmosphereSection />
      <SeasonalSection />
      <TestimonialsSection />
      <AccessSection />
      <CTASection />
      <Footer />
    </main>
  )
}
