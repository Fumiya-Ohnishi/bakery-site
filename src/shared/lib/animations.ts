/**
 * IntersectionObserver を使ったスクロールアニメーション
 */
export function observeIntersection(
  elements: NodeListOf<Element> | Element[],
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit,
): IntersectionObserver {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px',
      ...options,
    },
  )

  const list = Array.isArray(elements) ? elements : Array.from(elements)
  list.forEach((el) => observer.observe(el))

  return observer
}

/**
 * useIntersectionObserver hook 用のユーティリティ
 */
export function createFadeInObserver(className = 'is-visible'): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
  )
}
