import { Button, WaveDecoration } from '@/shared'
import styles from './HeroSection.module.css'

function BreadIllustration() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Plate */}
      <ellipse cx="100" cy="175" rx="70" ry="10" fill="rgba(255,248,240,0.08)" />

      {/* Bread loaf (main) */}
      <path
        d="M40 140 C40 110 55 85 100 80 C145 85 160 110 160 140 Z"
        fill="#D4A574"
      />
      <path
        d="M38 140 C38 142 62 155 100 155 C138 155 162 142 162 140 L40 140 Z"
        fill="#A67C52"
      />
      {/* Bread top sheen */}
      <path
        d="M65 100 C72 90 85 84 100 82"
        stroke="rgba(255,248,240,0.3)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Score lines on bread */}
      <path d="M78 130 C80 110 82 95 84 88" stroke="rgba(92,61,46,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 128 C100 108 100 93 100 85" stroke="rgba(92,61,46,0.2)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M122 130 C120 110 118 95 116 88" stroke="rgba(92,61,46,0.2)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small bread roll left */}
      <ellipse cx="55" cy="148" rx="18" ry="12" fill="#C1624F" />
      <path d="M42 143 C46 137 55 135 68 140" stroke="rgba(255,248,240,0.25)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small bread roll right */}
      <ellipse cx="145" cy="148" rx="18" ry="12" fill="#C1624F" />
      <path d="M132 143 C136 137 145 135 158 140" stroke="rgba(255,248,240,0.25)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Coffee cup */}
      <rect x="82" y="48" width="36" height="28" rx="4" fill="#5C3D2E" />
      <path d="M118 56 C128 56 130 70 118 70" stroke="#5C3D2E" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="80" y="44" width="40" height="6" rx="3" fill="#3D2B1F" />
      {/* Coffee surface */}
      <ellipse cx="100" cy="50" rx="16" ry="3" fill="#8B5A2B" opacity="0.8" />
      {/* Latte art */}
      <path d="M92 50 C96 47 104 53 108 50" stroke="rgba(212,165,116,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function HeroSection() {
  const scrollToMenu = () => {
    const el = document.getElementById('menu')
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
  }

  const scrollToAccess = () => {
    const el = document.getElementById('access')
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} aria-label="ヒーロー">
      {/* Background decorations */}
      <div className={`${styles.bgCircle} ${styles.bgCircle1}`} aria-hidden="true" />
      <div className={`${styles.bgCircle} ${styles.bgCircle2}`} aria-hidden="true" />
      <div className={styles.bgDots} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left: Content */}
        <div className={styles.content}>
          <div className={styles.badge} aria-label="オープン中">
            <span className={styles.badgeDot} />
            毎朝 7:30 オープン
          </div>

          <p className={styles.headingEn}>Freshly Baked Every Morning</p>

          <h1 className={styles.heading}>
            焼きたての香りと、
            <span className={styles.highlight}>ほっとする時間を</span>
          </h1>

          <p className={styles.description}>
            毎朝、石窯で丁寧に焼き上げたパンとこだわりのコーヒーで、
            あなたの一日を幸せなはじまりにお届けします。
          </p>

          <div className={styles.actions}>
            <Button
              variant="ghost"
              size="lg"
              onClick={scrollToMenu}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
            >
              メニューを見る
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToAccess}
            >
              お店へ行く
            </Button>
          </div>

          <div className={styles.openInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Open</span>
              <span className={styles.infoValue}>7:30 – 19:00</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Close</span>
              <span className={styles.infoValue}>火曜日定休</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>代官山・恵比寿</span>
            </div>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className={styles.illustration} aria-hidden="true">
          <div className={styles.illustrationRing}>
            <div className={styles.illustrationRingInner}>
              <div className={styles.steam}>
                <span className={styles.steamParticle} />
                <span className={styles.steamParticle} />
                <span className={styles.steamParticle} />
              </div>
              <div className={styles.mainIllustration}>
                <BreadIllustration />
              </div>
            </div>
          </div>

          {/* Floating info badges */}
          <div className={`${styles.floatBadge} ${styles.floatBadge1}`}>
            <span className={styles.floatBadgeEmoji}>🍞</span>
            <span className={styles.floatBadgeText}>石窯焼き</span>
          </div>
          <div className={`${styles.floatBadge} ${styles.floatBadge2}`}>
            <span className={styles.floatBadgeEmoji}>☕</span>
            <span className={styles.floatBadgeText}>自家焙煎コーヒー</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>

      {/* Wave transition */}
      <div className={styles.wave}>
        <WaveDecoration fill="var(--color-cream)" height={80} />
      </div>
    </section>
  )
}
