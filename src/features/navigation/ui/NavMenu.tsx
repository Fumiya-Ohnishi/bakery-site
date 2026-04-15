import { NAV_ITEMS } from '../model/useNavigation'
import styles from './NavMenu.module.css'

interface NavMenuProps {
  isScrolled: boolean
  isMenuOpen: boolean
  onToggleMenu: () => void
  activeSection: string
  onScrollTo: (href: string) => void
}

export function NavMenu({
  isScrolled,
  isMenuOpen,
  onToggleMenu,
  activeSection,
  onScrollTo,
}: NavMenuProps) {
  return (
    <>
      {/* Desktop nav */}
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`} aria-label="メインナビゲーション">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            className={`${styles.navItem} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
            onClick={() => onScrollTo(item.href)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={onToggleMenu}
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isMenuOpen}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.visible : ''}`}
        onClick={onToggleMenu}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="モバイルメニュー"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            className={styles.mobileNavItem}
            onClick={() => onScrollTo(item.href)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  )
}

