export interface MenuItem {
  id: string
  name: string
  nameEn: string
  description: string
  price: number
  category: MenuCategory
  tags: string[]
  isBestSeller?: boolean
  isNew?: boolean
}

export type MenuCategory = 'bread' | 'sandwich' | 'drink' | 'sweets'

export const MENU_CATEGORY_LABELS: Record<MenuCategory, string> = {
  bread: 'パン',
  sandwich: 'サンドイッチ',
  drink: 'ドリンク',
  sweets: 'スイーツ',
}
