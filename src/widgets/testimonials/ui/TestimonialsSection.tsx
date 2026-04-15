import { useState } from 'react'
import { SectionTitle } from '@/shared'
import { Testimonial } from '@/entities/testimonial'
import styles from './TestimonialsSection.module.css'

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: '田中 さやか',
    age: '30代',
    occupation: 'デザイナー',
    rating: 5,
    comment: 'クロワッサンがとにかく絶品！サクサクで中がほんのり甘く、バターの香りが幸せな気分にさせてくれます。週2回は必ず訪れるほど、すっかりリピーターになってしまいました。',
    visitedAt: '2025年3月',
  },
  {
    id: '2',
    author: '伊藤 健太',
    age: '40代',
    occupation: '会社員',
    rating: 5,
    comment: '朝早くからオープンしているので、出勤前に立ち寄れるのが嬉しい。焼きたてのパンの香りに毎朝元気をもらっています。カフェラテも本格的で最高です。',
    visitedAt: '2025年2月',
  },
  {
    id: '3',
    author: '山本 美咲',
    age: '20代',
    occupation: '学生',
    rating: 5,
    comment: '友人に紹介してもらって初めて来店しました。店内がとても居心地よく、ついつい長居してしまいます。季節限定の桜パンが特に気に入って、今年も楽しみにしていました！',
    visitedAt: '2025年4月',
  },
  {
    id: '4',
    author: '佐藤 夫妻',
    age: '50代',
    occupation: '－',
    rating: 5,
    comment: 'サワードウが大好きで、近隣のベーカリーをいろいろ回りましたが、ここが一番好みです。天然酵母の複雑な旨みと、外皮のクリスピーな食感が絶妙。',
    visitedAt: '2025年1月',
  },
  {
    id: '5',
    author: '鈴木 みゆき',
    age: '30代',
    occupation: '主婦',
    rating: 5,
    comment: '子連れでも歓迎されている雰囲気がとても嬉しい。メロンパンが子どもの大のお気に入りで、「また行きたい！」とせがまれています。スタッフの方も優しくて癒されます。',
    visitedAt: '2025年3月',
  },
]

const AVATARS = ['🧑‍🎨', '👔', '🎓', '👫', '🏠']

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const maxIndex = TESTIMONIALS.length - 3

  return (
    <section className={styles.section} aria-label="お客様の声">
      <div className="container">
        <SectionTitle
          eyebrow="Testimonials"
          title={<>お客様の<span style={{ color: 'var(--color-terracotta)' }}>声</span></>}
          description="「また来たい」と思っていただける場所であることが、私たちの一番の喜びです。"
        />

        <div className={styles.carouselWrapper}>
          <div
            className={styles.carouselTrack}
            style={{
              transform: `translateX(calc(-${activeIndex} * (320px + 1.5rem)))`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <article key={t.id} className={styles.card}>
                <div className={styles.stars} aria-label={`${t.rating}点`}>
                  {Array.from({ length: t.rating }, (_, si) => (
                    <span key={si} className={styles.star} aria-hidden="true">★</span>
                  ))}
                </div>
                <div className={styles.quote}>
                  <span className={styles.quoteMark} aria-hidden="true">"</span>
                  <p className={styles.quoteText}>{t.comment}</p>
                </div>
                <div className={styles.footer}>
                  <div
                    className={styles.avatar}
                    style={{ backgroundColor: 'var(--color-cream-dark)' }}
                    aria-hidden="true"
                  >
                    {AVATARS[i % AVATARS.length]}
                  </div>
                  <div className={styles.authorInfo}>
                    <p className={styles.authorName}>{t.author}</p>
                    <p className={styles.authorMeta}>
                      {[t.age, t.occupation].filter(Boolean).join(' / ')}
                    </p>
                  </div>
                  <span className={styles.visitedAt}>{t.visitedAt}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.controls} role="tablist" aria-label="スライド切り替え">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(i)}
              role="tab"
              aria-selected={activeIndex === i}
              aria-label={`${i + 1}番目のグループ`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
