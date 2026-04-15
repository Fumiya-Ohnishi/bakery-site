import { SectionTitle } from '@/shared'
import styles from './AccessSection.module.css'

function MapIllustration() {
  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" fill="none">
      {/* Background */}
      <rect width="400" height="300" fill="#E8E0D5" />

      {/* Streets */}
      <rect x="0" y="120" width="400" height="20" fill="#D4C9BB" />
      <rect x="0" y="200" width="400" height="16" fill="#D4C9BB" />
      <rect x="160" y="0" width="20" height="300" fill="#D4C9BB" />
      <rect x="270" y="0" width="16" height="300" fill="#D4C9BB" />
      <rect x="60" y="0" width="14" height="300" fill="#D4C9BB" />

      {/* Blocks / buildings */}
      <rect x="80" y="20" width="70" height="90" rx="4" fill="#C8BAA8" />
      <rect x="90" y="30" width="18" height="20" rx="2" fill="#B8A894" />
      <rect x="115" y="30" width="25" height="28" rx="2" fill="#B8A894" />
      <rect x="90" y="65" width="50" height="30" rx="2" fill="#B8A894" />

      <rect x="190" y="20" width="60" height="90" rx="4" fill="#C8BAA8" />
      <rect x="200" y="30" width="15" height="22" rx="2" fill="#B8A894" />
      <rect x="225" y="28" width="18" height="25" rx="2" fill="#B8A894" />
      <rect x="200" y="65" width="42" height="32" rx="2" fill="#B8A894" />

      <rect x="295" y="20" width="80" height="90" rx="4" fill="#C8BAA8" />

      <rect x="80" y="148" width="70" height="40" rx="4" fill="#C8BAA8" />
      <rect x="190" y="148" width="60" height="40" rx="4" fill="#C8BAA8" />
      <rect x="295" y="148" width="80" height="40" rx="4" fill="#C8BAA8" />

      <rect x="80" y="222" width="70" height="60" rx="4" fill="#C8BAA8" />
      <rect x="190" y="222" width="60" height="60" rx="4" fill="#C8BAA8" />
      <rect x="295" y="222" width="80" height="60" rx="4" fill="#C8BAA8" />

      {/* Our shop */}
      <rect x="184" y="144" width="72" height="48" rx="6" fill="#C1624F" />
      <rect x="190" y="150" width="60" height="35" rx="4" fill="#D4735E" />
      {/* Awning */}
      <path d="M184 144 L256 144 L250 135 L190 135 Z" fill="#5C3D2E" />
      <path d="M190 135 L250 135" stroke="rgba(255,248,240,0.3)" strokeWidth="2" />
      {/* Shop text */}
      <text x="220" y="172" textAnchor="middle" fill="white" fontSize="8" fontFamily="serif" fontWeight="bold">Le Pain</text>
      <text x="220" y="183" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="serif">Doux</text>

      {/* Pin */}
      <circle cx="220" cy="105" r="14" fill="#C1624F" />
      <circle cx="220" cy="102" r="5" fill="white" />
      <path d="M220 116 L220 130" stroke="#C1624F" strokeWidth="2.5" strokeLinecap="round" />
      {/* Pin shadow */}
      <ellipse cx="220" cy="133" rx="5" ry="2" fill="rgba(92,61,46,0.2)" />

      {/* Station icon */}
      <rect x="285" y="148" width="92" height="48" rx="4" fill="#7A9E7E" />
      <text x="331" y="178" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif" fontWeight="bold">恵比寿駅</text>

      {/* Walk indicator */}
      <path d="M277 165 L260 165" stroke="#5C3D2E" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#arrow)" />
      <text x="268" y="158" textAnchor="middle" fill="#5C3D2E" fontSize="8">3分</text>

      {/* Compass rose */}
      <circle cx="360" cy="40" r="20" fill="rgba(255,253,248,0.6)" />
      <text x="360" y="25" textAnchor="middle" fill="#5C3D2E" fontSize="10" fontWeight="bold">N</text>
      <path d="M360 28 L360 50" stroke="#5C3D2E" strokeWidth="1.5" />
      <path d="M350 40 L370 40" stroke="#5C3D2E" strokeWidth="1.5" />
    </svg>
  )
}

const INFO_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: '住所',
    value: '東京都渋谷区代官山町 1-23\nダイカンヤマハウス 1F',
    sub: '恵比寿駅 東口 徒歩3分 / 代官山駅 北口 徒歩5分',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: '営業時間',
    value: '7:30 – 19:00',
    sub: '火曜日定休（祝日の場合は翌日）\nパンがなくなり次第閉店',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: '電話',
    value: '03-1234-5678',
    sub: '営業時間内のみ対応',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    label: 'お支払い',
    value: '現金・各種カード・PayPay',
    sub: 'QRコード決済各種対応',
  },
]

export function AccessSection() {
  return (
    <section id="access" className={styles.section} aria-label="アクセス">
      <div className="container">
        <SectionTitle
          eyebrow="Access"
          title={<>お店への<span style={{ color: 'var(--color-terracotta)' }}>アクセス</span></>}
          description="代官山・恵比寿エリアの緑豊かな住宅街に佇む、小さなベーカリーカフェです。"
        />

        <div className={styles.grid}>
          <div className={styles.map} aria-label="店舗地図（イメージ）" role="img">
            <div className={styles.mapInner}>
              <MapIllustration />
            </div>
          </div>

          <div className={styles.infoCards}>
            {INFO_ITEMS.map((item) => (
              <div key={item.label} className={styles.infoCard}>
                <div className={styles.infoCardIcon} aria-hidden="true">
                  {item.icon}
                </div>
                <div className={styles.infoCardBody}>
                  <p className={styles.infoCardLabel}>{item.label}</p>
                  <p className={styles.infoCardValue} style={{ whiteSpace: 'pre-line' }}>
                    {item.value}
                  </p>
                  {item.sub && <p className={styles.infoCardSub}>{item.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
