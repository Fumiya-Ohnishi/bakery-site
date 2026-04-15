import { ReactNode } from 'react'
import { MenuItem, MENU_CATEGORY_LABELS } from '../model/types'
import styles from './MenuItemCard.module.css'

interface MenuItemCardProps {
  item: MenuItem
  illustration: ReactNode
}

export function MenuItemCard({ item, illustration }: MenuItemCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.illustration}>
        <div className={styles.illustrationInner}>{illustration}</div>
        {item.isBestSeller && (
          <span className={`${styles.badge} ${styles.badgeBestSeller}`}>人気No.1</span>
        )}
        {item.isNew && !item.isBestSeller && (
          <span className={`${styles.badge} ${styles.badgeNew}`}>NEW</span>
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.category}>{MENU_CATEGORY_LABELS[item.category]}</p>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.nameEn}>{item.nameEn}</p>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.footer}>
          <div>
            <span className={styles.price}>¥{item.price.toLocaleString()}</span>
            <span className={styles.priceUnit}>（税込）</span>
          </div>
          {item.tags.length > 0 && (
            <div className={styles.tags}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
