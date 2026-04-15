import { ReactNode } from 'react'
import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'center' | 'left'
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={`${styles.wrapper} ${align === 'left' ? styles.left : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line}>
        <span className={`${styles.lineBar} ${styles.long}`} />
        <span className={styles.lineDot} />
        <span className={styles.lineBar} />
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
