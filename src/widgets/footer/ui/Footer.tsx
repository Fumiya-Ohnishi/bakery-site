import styles from './Footer.module.css'

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* Brand */}
          <div className={styles.brand}>
            <span className={styles.logo}>
              Le Pain <span className={styles.dot}>D</span>oux
            </span>
            <p className={styles.tagline}>BAKERY CAFÉ / DAIKANYAMA</p>
            <p className={styles.brandText}>
              素材と時間を大切にした手作りのパンと、
              自家焙煎のコーヒーをお届けする
              街のベーカリーカフェです。
              毎朝4時からの仕込みで、あなたの一日を温かく支えます。
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.navColumn}>
            <p className={styles.navTitle}>メニュー</p>
            <ul className={styles.navList}>
              {[
                { label: '人気メニュー', id: 'menu' },
                { label: 'こだわり', id: 'philosophy' },
                { label: '店内の雰囲気', id: 'atmosphere' },
                { label: '季節限定', id: 'seasonal' },
                { label: 'お客様の声', id: 'testimonials' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    className={styles.navItem}
                    onClick={() => scrollTo(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className={styles.navColumn}>
            <p className={styles.navTitle}>ショップ情報</p>
            <ul className={styles.navList}>
              <li style={{ fontSize: '0.875rem', color: 'rgba(255,248,240,0.55)', lineHeight: 1.7 }}>
                〒150-0000<br />
                東京都渋谷区代官山町 1-23<br />
                ダイカンヤマハウス 1F
              </li>
              <li style={{ fontSize: '0.875rem', color: 'rgba(255,248,240,0.55)', marginTop: '0.5rem' }}>
                TEL: 03-1234-5678
              </li>
              <li style={{ fontSize: '0.875rem', color: 'rgba(255,248,240,0.55)' }}>
                営業: 7:30–19:00<br />
                定休: 火曜日
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Le Pain Doux. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <button className={styles.bottomLink} onClick={(e) => e.preventDefault()}>
              プライバシーポリシー
            </button>
            <button className={styles.bottomLink} onClick={(e) => e.preventDefault()}>
              特定商取引法
            </button>
            <button className={styles.bottomLink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ページ上部へ ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
