import { WaveDecoration } from '@/shared'
import styles from './CTASection.module.css'

export function CTASection() {
  const scrollToAccess = () => {
    const el = document.getElementById('access')
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <>
      <WaveDecoration fill="var(--color-terracotta)" height={70} />
      <section className={styles.section} aria-label="来店のご案内">
        <div className={styles.bgShape1} aria-hidden="true" />
        <div className={styles.bgShape2} aria-hidden="true" />

        <div className={`container ${styles.inner}`}>
          <span className={styles.icon} aria-hidden="true">🍞</span>

          <h2 className={styles.title}>
            今日の焼きたてを、<br />
            あなたに届けに来てください。
          </h2>
          <p className={styles.description}>
            毎朝7時半、石窯から取り出したばかりのパンが並びます。<br />
            一日の始まりを、ほっと温かい一口でスタートしてみませんか？
          </p>

          <div className={styles.actions}>
            <button className={styles.ctaBtn} onClick={scrollToAccess}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              アクセスを確認する
            </button>
            <span className={styles.subText}>月・水〜日 7:30〜19:00 営業</span>
          </div>

          {/* Social */}
          <div className={styles.socials} aria-label="SNSリンク">
            <a
              href="#"
              className={styles.socialLink}
              aria-label="Instagram"
              onClick={(e) => e.preventDefault()}
            >
              📷
            </a>
            <a
              href="#"
              className={styles.socialLink}
              aria-label="Twitter/X"
              onClick={(e) => e.preventDefault()}
            >
              🐦
            </a>
            <a
              href="#"
              className={styles.socialLink}
              aria-label="Facebook"
              onClick={(e) => e.preventDefault()}
            >
              📘
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
