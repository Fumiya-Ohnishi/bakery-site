import { NavMenu, useNavigation } from '@/features/navigation'
import styles from './Header.module.css'

export function Header() {
  const { isScrolled, isMenuOpen, setIsMenuOpen, activeSection, scrollTo } = useNavigation()

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Le Pain Doux トップへ"
        >
          <span className={styles.logoEn}>
            Le Pain <span className={styles.dot}>D</span>oux
          </span>
          <span className={styles.logoJa}>ル・パン・ドゥー　ベーカリーカフェ</span>
        </button>

        <div className={styles.right}>
          <NavMenu
            isScrolled={isScrolled}
            isMenuOpen={isMenuOpen}
            onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            activeSection={activeSection}
            onScrollTo={scrollTo}
          />
          <button
            className={styles.ctaButton}
            onClick={() => scrollTo('#access')}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            アクセス
          </button>
        </div>
      </div>
    </header>
  )
}
