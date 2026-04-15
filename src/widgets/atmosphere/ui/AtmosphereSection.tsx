import { SectionTitle } from '@/shared'
import styles from './AtmosphereSection.module.css'

function OvenScene() {
  return (
    <svg viewBox="0 0 320 200" width="280" height="175" fill="none">
      {/* Oven body */}
      <rect x="60" y="60" width="200" height="120" rx="8" fill="#5C3D2E" />
      <rect x="75" y="75" width="170" height="90" rx="6" fill="#3D2B1F" />
      {/* Oven glow */}
      <rect x="80" y="80" width="160" height="80" rx="4" fill="#8B3A1E" opacity="0.6" />
      {/* Bread in oven */}
      <ellipse cx="140" cy="138" rx="35" ry="16" fill="#A67C52" />
      <path d="M105 122 C105 106 120 98 140 98 C160 98 175 106 175 122" fill="#D4A574" />
      <ellipse cx="200" cy="140" rx="28" ry="14" fill="#A67C52" />
      <path d="M172 127 C172 115 184 108 200 108 C216 108 228 115 228 127" fill="#D4A574" />
      {/* Oven door handle */}
      <rect x="120" y="170" width="80" height="6" rx="3" fill="#A67C52" />
      {/* Temperature dial */}
      <circle cx="90" cy="100" r="12" fill="#3D2B1F" stroke="#A67C52" strokeWidth="2" />
      <path d="M90 92 L90 100" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" />
      {/* Steam wisps */}
      <path d="M130 75 C128 65 134 58 130 50" stroke="rgba(255,248,240,0.25)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M160 73 C158 63 164 56 160 48" stroke="rgba(255,248,240,0.25)" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function CafeTableScene() {
  return (
    <svg viewBox="0 0 160 160" width="130" height="130" fill="none">
      {/* Table */}
      <rect x="20" y="95" width="120" height="8" rx="4" fill="#8B5A2B" />
      <rect x="45" y="103" width="10" height="40" rx="3" fill="#8B5A2B" />
      <rect x="105" y="103" width="10" height="40" rx="3" fill="#8B5A2B" />
      {/* Coffee cup */}
      <path d="M55 55 L60 92 L100 92 L105 55 Z" fill="#5C3D2E" />
      <path d="M105 65 C115 65 118 78 105 78" stroke="#5C3D2E" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="52" y="50" width="56" height="8" rx="4" fill="#3D2B1F" />
      <ellipse cx="80" cy="54" rx="24" ry="6" fill="#6B3D20" />
      {/* Latte art */}
      <path d="M65 54 C70 50 76 57 80 54 C84 51 90 58 95 54" stroke="rgba(212,165,116,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Small plate */}
      <ellipse cx="80" cy="94" rx="32" ry="4" fill="#A67C52" opacity="0.5" />
      {/* Steam */}
      <path d="M72 42 C70 36 74 31 72 25" stroke="rgba(200,160,120,0.4)" strokeWidth="2" strokeLinecap="round" />
      <path d="M80 40 C78 34 82 29 80 23" stroke="rgba(200,160,120,0.4)" strokeWidth="2" strokeLinecap="round" />
      <path d="M88 42 C86 36 90 31 88 25" stroke="rgba(200,160,120,0.4)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FlowerScene() {
  return (
    <svg viewBox="0 0 140 140" width="110" height="110" fill="none">
      {/* Vase */}
      <path d="M55 100 C50 90 45 75 48 60 L92 60 C95 75 90 90 85 100 Z" fill="#C1624F" />
      <ellipse cx="70" cy="60" rx="22" ry="6" fill="#A6503F" />
      <path d="M58 95 L82 95 L86 100 L54 100 Z" fill="#A6503F" />
      {/* Stems */}
      <path d="M70 60 L70 30" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 50 L55 35" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round" />
      <path d="M70 45 L85 32" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round" />
      {/* Flowers */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={70 + Math.cos(i * Math.PI * 2 / 5) * 8} cy={30 + Math.sin(i * Math.PI * 2 / 5) * 8} r="5" fill="#F2D0C8" />
      ))}
      <circle cx="70" cy="30" r="5" fill="#D4A574" />
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={55 + Math.cos(i * Math.PI * 2 / 5) * 7} cy={35 + Math.sin(i * Math.PI * 2 / 5) * 7} r="4" fill="#F9E4DA" />
      ))}
      <circle cx="55" cy="35" r="4" fill="#C1624F" />
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={85 + Math.cos(i * Math.PI * 2 / 5) * 6} cy={32 + Math.sin(i * Math.PI * 2 / 5) * 6} r="4" fill="#DCE8DC" />
      ))}
      <circle cx="85" cy="32" r="4" fill="#7A9E7E" />
    </svg>
  )
}

function WindowScene() {
  return (
    <svg viewBox="0 0 200 160" width="170" height="136" fill="none">
      {/* Window frame */}
      <rect x="30" y="20" width="140" height="120" rx="8" fill="#5C3D2E" />
      <rect x="38" y="28" width="124" height="104" rx="4" fill="#87CEEB" opacity="0.4" />
      {/* Window panes */}
      <line x1="100" y1="28" x2="100" y2="132" stroke="#5C3D2E" strokeWidth="4" />
      <line x1="38" y1="80" x2="162" y2="80" stroke="#5C3D2E" strokeWidth="4" />
      {/* Curtains */}
      <path d="M38 28 C50 35 55 55 48 80" stroke="none" fill="rgba(242,208,200,0.7)" />
      <path d="M38 28 L48 28 L55 60 L48 80 Z" fill="rgba(242,208,200,0.7)" />
      <path d="M162 28 C150 35 145 55 152 80" stroke="none" fill="rgba(242,208,200,0.7)" />
      <path d="M162 28 L152 28 L145 60 L152 80 Z" fill="rgba(242,208,200,0.7)" />
      {/* Outside scene through window */}
      <ellipse cx="80" cy="55" rx="20" ry="18" fill="#7A9E7E" opacity="0.6" />
      <ellipse cx="120" cy="50" rx="15" ry="14" fill="#7A9E7E" opacity="0.5" />
      <rect x="73" y="68" width="4" height="12" fill="#5C3D2E" opacity="0.5" />
      {/* Sunlight */}
      <circle cx="135" cy="40" r="10" fill="#FFE0A0" opacity="0.5" />
    </svg>
  )
}

function BooksScene() {
  return (
    <svg viewBox="0 0 160 140" width="130" height="113" fill="none">
      {/* Shelf */}
      <rect x="20" y="90" width="120" height="6" rx="2" fill="#8B5A2B" />
      {/* Books */}
      <rect x="30" y="50" width="14" height="40" rx="2" fill="#C1624F" />
      <rect x="44" y="55" width="12" height="35" rx="2" fill="#D4A574" />
      <rect x="56" y="52" width="16" height="38" rx="2" fill="#7A9E7E" />
      <rect x="72" y="48" width="13" height="42" rx="2" fill="#5C3D2E" />
      <rect x="85" y="57" width="11" height="33" rx="2" fill="#F2D0C8" />
      <rect x="96" y="53" width="15" height="37" rx="2" fill="#A67C52" />
      <rect x="111" y="60" width="10" height="30" rx="2" fill="#C1624F" opacity="0.7" />
      {/* Small plant */}
      <rect x="125" y="75" width="10" height="15" rx="2" fill="#C1624F" />
      <ellipse cx="130" cy="68" rx="10" ry="12" fill="#7A9E7E" />
      <ellipse cx="122" cy="72" rx="7" ry="9" fill="#7A9E7E" />
      <ellipse cx="138" cy="70" rx="7" ry="9" fill="#5C8F60" />
    </svg>
  )
}

const GALLERY_ITEMS = [
  {
    sceneClass: styles.scene1,
    scene: <OvenScene />,
    label: '石窯の仕込み',
    caption: '毎朝4時から始まる職人の仕事',
  },
  {
    sceneClass: styles.scene2,
    scene: <CafeTableScene />,
    label: 'カフェタイム',
    caption: '心地よいひとりの時間',
  },
  {
    sceneClass: styles.scene3,
    scene: <FlowerScene />,
    label: 'テーブルの花',
    caption: '季節の花を飾って',
  },
  {
    sceneClass: styles.scene4,
    scene: <WindowScene />,
    label: '窓からの光',
    caption: '陽だまりの読書スペース',
  },
  {
    sceneClass: styles.scene5,
    scene: <BooksScene />,
    label: 'ライブラリー棚',
    caption: '本と過ごすカフェの午後',
  },
]

export function AtmosphereSection() {
  return (
    <section id="atmosphere" className={styles.section} aria-label="店内の雰囲気">
      <div className="container">
        <SectionTitle
          eyebrow="Atmosphere"
          title={<>ほっとする<span style={{ color: 'var(--color-terracotta)' }}>空間</span></>}
          description="陽の光が差し込む、木のぬくもりに囲まれた空間。ゆっくりと流れる時間をお楽しみください。"
        />

        <div className={styles.gallery}>
          {GALLERY_ITEMS.map((item) => (
            <div key={item.label} className={styles.galleryItem}>
              <div className={`${styles.galleryInner} ${item.sceneClass}`}>
                {item.scene}
                <span className={styles.sceneLabel}>{item.label}</span>
              </div>
              <div className={styles.galleryOverlay}>
                <p className={styles.galleryCaption}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
