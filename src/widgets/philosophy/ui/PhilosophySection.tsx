import { useEffect, useRef } from 'react'
import { SectionTitle } from '@/shared'
import styles from './PhilosophySection.module.css'

const PILLARS = [
  {
    num: '01',
    title: '素材へのこだわり',
    text: '小麦粉は北海道産を中心に複数の品種をブレンド。バターはフランス産発酵バター、塩はミネラル豊富な天然塩のみを使用します。',
  },
  {
    num: '02',
    title: '時間をかけた発酵',
    text: '自家製天然酵母を育て、低温長時間発酵を基本に。急がずゆっくり、パン本来の旨みと風味を引き出します。',
  },
  {
    num: '03',
    title: '職人の手仕事',
    text: 'シェフが毎朝4時から仕込みを開始。機械に頼らず、手ごね・成形・焼成まで、すべてに人の手と感覚が宿っています。',
  },
]

export function PhilosophySection() {
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.15 },
    )
    pillarRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <section id="philosophy" className={styles.section} aria-label="こだわり">
      <span className={styles.bgText} aria-hidden="true">Craft</span>
      <div className="container">
        <SectionTitle
          eyebrow="Our Philosophy"
          title={<>職人の<span style={{ color: 'var(--color-terracotta)' }}>こだわり</span></>}
          description="「美味しい」の向こうには、妥協しない素材と時間への敬意があります。"
        />

        <div className={styles.grid}>
          {/* Visual (stacked cards) */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.cardStack}>
              <div className={`${styles.stackCard} ${styles.stackCard1}`}>
                <div className={`${styles.cardIcon} ${styles.cardIcon1}`}>🌾</div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>北海道産小麦</p>
                  <p className={styles.cardText}>産地直送の厳選小麦を毎週入荷</p>
                </div>
              </div>
              <div className={`${styles.stackCard} ${styles.stackCard2}`}>
                <div className={`${styles.cardIcon} ${styles.cardIcon2}`}>🧈</div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>発酵バター</p>
                  <p className={styles.cardText}>フランス・ブルターニュ産を使用</p>
                </div>
              </div>
              <div className={`${styles.stackCard} ${styles.stackCard3}`}>
                <div className={`${styles.cardIcon} ${styles.cardIcon3}`}>🌿</div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>自家製天然酵母</p>
                  <p className={styles.cardText}>5年育て続けた自家製スターター</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content (pillars) */}
          <div className={styles.content}>
            <div className={styles.pillars}>
              {PILLARS.map((p, i) => (
                <div
                  key={p.num}
                  ref={(el) => { pillarRefs.current[i] = el }}
                  className={styles.pillar}
                >
                  <span className={styles.pillarNum}>{p.num}</span>
                  <div className={styles.pillarBody}>
                    <h3 className={styles.pillarTitle}>{p.title}</h3>
                    <p className={styles.pillarText}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
