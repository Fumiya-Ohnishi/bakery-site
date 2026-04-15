import { WaveDecoration } from '@/shared'
import styles from './SeasonalSection.module.css'

function SpringIllustration() {
  return (
    <svg viewBox="0 0 280 280" width="280" height="280" fill="none">
      {/* Large plate */}
      <ellipse cx="140" cy="240" rx="90" ry="15" fill="rgba(212,165,116,0.12)" />

      {/* Sakura tart base */}
      <ellipse cx="140" cy="215" rx="70" ry="15" fill="#C1624F" />
      <ellipse cx="140" cy="200" rx="70" ry="40" fill="#D4A574" />
      {/* Cream top */}
      <ellipse cx="140" cy="162" rx="65" ry="22" fill="white" />
      {/* Custard layer */}
      <path d="M80 165 C85 155 100 148 140 148 C180 148 195 155 200 165" fill="#F5C070" />
      {/* Strawberries */}
      <path d="M115 148 C115 138 125 135 135 140 L132 155 L118 155 Z" fill="#C1624F" />
      <path d="M130 15 L130 140" stroke="#7A9E7E" strokeWidth="0" />
      <path d="M148 145 C148 135 158 133 168 138 L165 153 L151 153 Z" fill="#C1624F" />
      {/* Sakura flowers */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={108 + Math.cos(i * Math.PI * 2 / 5) * 9} cy={148 + Math.sin(i * Math.PI * 2 / 5) * 9} r="5" fill="#F9C8C8" />
      ))}
      <circle cx="108" cy="148" r="4" fill="#F2D0C8" />
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={160 + Math.cos(i * Math.PI * 2 / 5) * 8} cy={146 + Math.sin(i * Math.PI * 2 / 5) * 8} r="4" fill="#F9C8C8" />
      ))}
      <circle cx="160" cy="146" r="3" fill="#F2D0C8" />

      {/* Floating petals */}
      {[
        [50, 80, 15], [220, 60, -20], [30, 150, 10],
        [250, 130, -15], [70, 200, 20], [200, 200, -10],
      ].map(([x, y, rot], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="10"
          ry="6"
          fill="#F9C8C8"
          opacity="0.6"
          transform={`rotate(${rot}, ${x}, ${y})`}
          style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {/* Spring leaves */}
      <path d="M200 90 C210 70 230 75 225 95 C215 110 200 100 200 90 Z" fill="#7A9E7E" opacity="0.5" />
      <path d="M55 120 C45 100 65 90 70 110 C72 125 60 128 55 120 Z" fill="#7A9E7E" opacity="0.4" />
    </svg>
  )
}

const SEASONAL_ITEMS = [
  {
    emoji: '🌸',
    name: '桜のシュトロイゼル',
    nameEn: 'Sakura Streusel',
    text: '国産桜花の塩漬けを使った限定のふわふわパン。春の訪れを感じる淡いピンク色。',
    price: '¥320',
  },
  {
    emoji: '🍓',
    name: '苺のクリームパン',
    nameEn: 'Strawberry Cream Bun',
    text: '旬の苺とホイップクリームを贅沢に。毎年春だけのお楽しみメニューです。',
    price: '¥350',
  },
  {
    emoji: '🍵',
    name: '抹茶あんパン',
    nameEn: 'Matcha Anpan',
    text: '宇治抹茶を練り込んだ生地に、粒あんをたっぷり包んだ和風アンパン。',
    price: '¥280',
  },
  {
    emoji: '🌿',
    name: '春野菜のフォカッチャ',
    nameEn: 'Spring Vegetable Focaccia',
    text: 'アスパラ・スナップエンドウ・グリーンピースを贅沢にのせたオリーブオイルのフォカッチャ。',
    price: '¥450',
  },
]

export function SeasonalSection() {
  return (
    <section id="seasonal" className={styles.section} aria-label="季節限定商品">
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>
          {/* Wave top */}
          <div className="container">
            <div className={styles.mainLayout}>
              <div>
                <div className={styles.label} aria-label="期間限定">
                  <span>🌸</span>
                  <span>Spring Limited 2025</span>
                </div>
                <span className={styles.eyebrow}>Seasonal Menu</span>
                <h2 className={styles.title}>
                  春の限定メニュー、<br />
                  はじまりました。
                </h2>
                <p className={styles.description}>
                  季節の素材を活かした限定商品は、この時期しか味わえない特別な一品。
                  毎年楽しみにしてくださるお客様の声に応え、今年もご用意しました。
                </p>

                <div className={styles.grid}>
                  {SEASONAL_ITEMS.map((item) => (
                    <div key={item.name} className={styles.card}>
                      <span className={styles.cardEmoji}>{item.emoji}</span>
                      <p className={styles.cardName}>{item.name}</p>
                      <p className={styles.cardNameEn}>{item.nameEn}</p>
                      <p className={styles.cardText}>{item.text}</p>
                      <span className={styles.cardPrice}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.illustration} aria-hidden="true">
                <div className={styles.illustInner}>
                  <SpringIllustration />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDecoration fill="var(--color-cream)" height={70} />
    </section>
  )
}
