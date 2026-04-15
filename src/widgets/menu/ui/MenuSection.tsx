import { useEffect, useRef, useState } from 'react'
import { MenuItemCard, MenuItem, MenuCategory, MENU_CATEGORY_LABELS } from '@/entities/menu-item'
import { SectionTitle } from '@/shared'
import styles from './MenuSection.module.css'

// --- SVG Illustrations ---
function CroissantSvg() {
  return (
    <svg viewBox="0 0 120 100" width="120" height="100" fill="none">
      <path d="M20 70 C10 50 30 20 60 18 C90 16 110 45 100 70" fill="#D4A574" />
      <path d="M20 70 C10 50 30 20 60 18" stroke="#C19054" strokeWidth="2" fill="none" />
      <path d="M60 18 C90 16 110 45 100 70" stroke="#C19054" strokeWidth="2" fill="none" />
      <path d="M20 70 C40 78 80 78 100 70" fill="#B8844A" />
      <path d="M35 45 C38 35 45 28 55 24" stroke="rgba(255,248,240,0.4)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SourdoughSvg() {
  return (
    <svg viewBox="0 0 120 100" width="120" height="100" fill="none">
      <ellipse cx="60" cy="65" rx="45" ry="25" fill="#A67C52" />
      <path d="M15 65 C20 35 40 20 60 18 C80 20 100 35 105 65" fill="#D4A574" />
      <path d="M30 50 C35 35 45 25 60 22" stroke="rgba(255,248,240,0.3)" strokeWidth="2" strokeLinecap="round" />
      <path d="M45 32 C55 28 70 28 80 33" stroke="rgba(92,61,46,0.25)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 55 C48 50 72 50 82 55" stroke="rgba(92,61,46,0.2)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function MelonpanSvg() {
  return (
    <svg viewBox="0 0 120 100" width="120" height="100" fill="none">
      <ellipse cx="60" cy="70" rx="42" ry="20" fill="#C1624F" />
      <ellipse cx="60" cy="58" rx="42" ry="32" fill="#E8A060" />
      <path d="M30 50 C35 58 45 62 60 60 C75 62 85 58 90 50" stroke="#D4845A" strokeWidth="1.5" fill="none" />
      <path d="M35 42 C40 50 50 54 60 52 C70 54 80 50 85 42" stroke="#D4845A" strokeWidth="1.5" fill="none" />
      {/* Grid lines */}
      {[0,1,2,3].map(i => (
        <path key={i} d={`M${28+i*16} 38 L${28+i*16} 66`} stroke="#C87040" strokeWidth="1" opacity="0.5" />
      ))}
      {[0,1,2,3].map(i => (
        <path key={i} d={`M25 ${42+i*8} L95 ${42+i*8}`} stroke="#C87040" strokeWidth="1" opacity="0.5" />
      ))}
    </svg>
  )
}

function CoffeeLateSvg() {
  return (
    <svg viewBox="0 0 120 100" width="120" height="100" fill="none">
      {/* Saucer */}
      <ellipse cx="60" cy="85" rx="36" ry="6" fill="#C19054" />
      {/* Cup body */}
      <path d="M32 50 L36 82 L84 82 L88 50 Z" fill="#5C3D2E" rx="4" />
      {/* Cup handle */}
      <path d="M88 58 C100 58 102 72 88 72" stroke="#5C3D2E" strokeWidth="7" strokeLinecap="round" fill="none" />
      {/* Coffee surface */}
      <ellipse cx="60" cy="50" rx="28" ry="7" fill="#8B5A2B" />
      {/* Latte art */}
      <path d="M45 50 C50 45 56 53 60 50 C64 47 70 55 75 50" stroke="rgba(212,165,116,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Steam */}
      <path d="M52 40 C50 35 54 30 52 25" stroke="rgba(200,160,120,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M60 38 C58 33 62 28 60 23" stroke="rgba(200,160,120,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M68 40 C66 35 70 30 68 25" stroke="rgba(200,160,120,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function SandwichSvg() {
  return (
    <svg viewBox="0 0 120 100" width="120" height="100" fill="none">
      {/* Bottom bread */}
      <path d="M18 75 C18 68 30 63 60 63 C90 63 102 68 102 75 L98 80 L22 80 Z" fill="#D4A574" />
      {/* Lettuce */}
      <path d="M20 63 C25 58 35 60 45 56 C55 52 65 58 75 54 C85 50 95 55 100 62" fill="none" stroke="#7A9E7E" strokeWidth="5" strokeLinecap="round" />
      {/* Tomato */}
      <rect x="30" y="55" width="20" height="6" rx="3" fill="#C1624F" />
      <rect x="70" y="53" width="18" height="6" rx="3" fill="#C1624F" />
      {/* Cheese */}
      <path d="M22 50 L98 50 L94 55 L26 55 Z" fill="#E8A060" />
      {/* Top bread */}
      <path d="M22 28 C22 18 35 12 60 12 C85 12 98 18 98 28 L100 50 L20 50 Z" fill="#D4A574" />
      <path d="M30 30 C33 22 40 17 50 15" stroke="rgba(255,248,240,0.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CakeSvg() {
  return (
    <svg viewBox="0 0 120 100" width="120" height="100" fill="none">
      {/* Plate */}
      <ellipse cx="60" cy="85" rx="40" ry="6" fill="#E8D9C0" />
      {/* Cake body */}
      <rect x="28" y="52" width="64" height="32" rx="4" fill="#F5C5A3" />
      {/* Cream layer */}
      <rect x="28" y="45" width="64" height="10" rx="2" fill="white" />
      {/* Top layer */}
      <rect x="32" y="32" width="56" height="16" rx="6" fill="#C1624F" />
      {/* Strawberry */}
      <path d="M55 22 C55 15 65 15 65 22 L63 30 L57 30 Z" fill="#C1624F" />
      <path d="M60 15 L60 11" stroke="#7A9E7E" strokeWidth="2" strokeLinecap="round" />
      {/* Decoration dots */}
      {[0,1,2,3,4].map(i => (
        <circle key={i} cx={34 + i * 14} cy="55" r="2.5" fill="white" opacity="0.8" />
      ))}
    </svg>
  )
}

const ILLUSTRATIONS: Record<string, React.ReactNode> = {
  croissant: <CroissantSvg />,
  sourdough: <SourdoughSvg />,
  melon: <MelonpanSvg />,
  coffee: <CoffeeLateSvg />,
  sandwich: <SandwichSvg />,
  cake: <CakeSvg />,
}

// --- Data ---
const MENU_ITEMS: (MenuItem & { illustKey: string })[] = [
  {
    id: '1',
    name: 'バター香るクロワッサン',
    nameEn: 'Butter Croissant',
    description: 'フランス産発酵バターを使い、72時間かけて丁寧に折り込んだ、外はパリッと中はしっとりのクロワッサン。',
    price: 280,
    category: 'bread',
    tags: ['定番', 'バター'],
    isBestSeller: true,
    illustKey: 'croissant',
  },
  {
    id: '2',
    name: '石窯サワードウ',
    nameEn: 'Stone Oven Sourdough',
    description: '自家製天然酵母を使い、石窯でじっくり焼き上げた職人のカントリーブレッド。モチモチ食感が自慢。',
    price: 680,
    category: 'bread',
    tags: ['天然酵母', '石窯'],
    illustKey: 'sourdough',
  },
  {
    id: '3',
    name: 'メロンパン',
    nameEn: 'Melon Pan',
    description: 'サクサクのクッキー生地とふわふわのパン生地が絶妙なハーモニー。子どもから大人まで大人気の定番品。',
    price: 220,
    category: 'bread',
    tags: ['甘め', '定番'],
    illustKey: 'melon',
  },
  {
    id: '4',
    name: '自家焙煎カフェラテ',
    nameEn: 'House Roast Café Latte',
    description: '毎週小ロットで焙煎した豆を使い、ラテアートとともにお届け。ミルクの甘さと深いコクが楽しめます。',
    price: 550,
    category: 'drink',
    tags: ['自家焙煎', 'ラテアート'],
    isBestSeller: true,
    illustKey: 'coffee',
  },
  {
    id: '5',
    name: '朝採りベジサンド',
    nameEn: 'Morning Veggie Sandwich',
    description: '契約農家から届く朝採り野菜と手作りのハーブマヨネーズ。サワードウ食パンを使ったボリューム満点のサンドイッチ。',
    price: 780,
    category: 'sandwich',
    tags: ['野菜たっぷり', '地産地消'],
    illustKey: 'sandwich',
  },
  {
    id: '6',
    name: 'ベリーのタルト',
    nameEn: 'Mixed Berry Tart',
    description: 'サクサクのパートシュクレに、なめらかなカスタードクリームと季節のベリーを贅沢に飾った人気スイーツ。',
    price: 480,
    category: 'sweets',
    tags: ['季節', '人気'],
    isNew: true,
    illustKey: 'cake',
  },
]

type FilterCategory = 'all' | MenuCategory

export function MenuSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const filtered =
    activeFilter === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [filtered])

  const FILTER_OPTIONS: { label: string; value: FilterCategory }[] = [
    { label: 'すべて', value: 'all' },
    { label: MENU_CATEGORY_LABELS.bread, value: 'bread' },
    { label: MENU_CATEGORY_LABELS.sandwich, value: 'sandwich' },
    { label: MENU_CATEGORY_LABELS.drink, value: 'drink' },
    { label: MENU_CATEGORY_LABELS.sweets, value: 'sweets' },
  ]

  return (
    <section id="menu" className={styles.section} aria-label="人気メニュー">
      <div className="container">
        <SectionTitle
          eyebrow="Our Menu"
          title={<>人気の<span style={{ color: 'var(--color-terracotta)' }}>メニュー</span></>}
          description="素材にこだわり、毎日手作りで丁寧に仕上げた自慢のメニューをご紹介します。"
        />

        {/* Filter */}
        <div className={styles.filterRow} role="group" aria-label="カテゴリーフィルター">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              className={`${styles.filterBtn} ${activeFilter === opt.value ? styles.active : ''}`}
              onClick={() => setActiveFilter(opt.value)}
              aria-pressed={activeFilter === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[i] = el }}
              className={styles.card}
            >
              <MenuItemCard
                item={item}
                illustration={
                  <div className={styles.breadIllust}>
                    {ILLUSTRATIONS[item.illustKey]}
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
