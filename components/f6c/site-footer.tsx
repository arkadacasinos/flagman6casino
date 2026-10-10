import { REF_URL } from '@/lib/f6c'

const TAGS: { label: string; href: string }[] = [
  { label: '#flagman_casino', href: '#flagman-casino' },
  { label: '#flagman_casino_официальный_сайт', href: '#flagman-casino-oficialnyj-sajt' },
  { label: '#flagman_casino_зеркало', href: '#flagman-casino-zerkalo' },
  { label: '#flagman_casino_официальный', href: '#flagman-casino-oficialnyj-sajt' },
  { label: '#флагман_казино_официальный_сайт', href: '#flagman-kazino-oficialnyj' },
  { label: '#флагман_казино', href: '#flagman-kazino' },
  { label: '#flagman_casino_играть', href: '#flagman-casino-igrat' },
  { label: '#флагман_казино_3', href: '#flagman-kazino-3' },
  { label: '#зеркало_рабочее', href: '#zerkalo-rabochee' },
  { label: '#флагман_казино_онлайн', href: '#flagman-kazino-onlajn' },
  { label: '#флагман_казино_официальный', href: '#flagman-kazino-oficialnyj' },
  { label: '#флагман_казино_играть', href: '#flagman-kazino-igrat' },
  { label: '#флагман_казино_зеркало', href: '#flagman-kazino-zerkalo' },
]

export function SiteFooter() {
  return (
    <footer className="w9k4-footer">
      <div className="w9k4-footer-inner">
        <a href={REF_URL} className="w9k4-btn w9k4-btn-green w9k4-btn-lg" style={{ alignSelf: 'flex-start' }}>
          Играть в Flagman Casino
        </a>
        <nav className="w9k4-tags" aria-label="Ключевые темы страницы">
          {TAGS.map((tag) => (
            <a key={tag.label} href={tag.href} className="w9k4-tag">
              {tag.label}
            </a>
          ))}
        </nav>
        <p className="w9k4-footer-note">
          18+. Информация на странице носит ознакомительный характер. Азартные игры могут вызывать зависимость: играйте
          ответственно и только на те средства, которые готовы потерять. Все переходы ведут на официальную партнёрскую
          страницу Flagman Casino. © 2026 Flagman Casino.
        </p>
      </div>
    </footer>
  )
}
