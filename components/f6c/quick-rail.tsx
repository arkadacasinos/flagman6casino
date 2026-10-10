import { Disc3, Gamepad2, Gift, PiggyBank, Rocket, Smartphone, Trophy } from 'lucide-react'
import { REF_URL } from '@/lib/f6c'

export function QuickRail() {
  return (
    <section className="w9k4-rail" aria-label="Быстрые категории Flagman Casino">
      <img src="/images/f6c-games.jpg" alt="" aria-hidden="true" className="w9k4-rail-bg" />
      <div className="w9k4-rail-row">
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-wheel">
            <Disc3 size={34} className="w9k4-wheel-icon" />
            <span className="w9k4-wheel-text">
 Колесо
              <br />
              фортуны
            </span>
          </span>
          <span className="w9k4-btn w9k4-btn-blue w9k4-spin">Крутить</span>
        </a>
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-badge-ring">
            <Trophy size={26} />
          </span>
          Турниры
        </a>
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-badge-ring">
            <Gift size={26} />
          </span>
          20 000 FS
        </a>
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-badge-ring">
            <Gamepad2 size={26} />
          </span>
          Новинки
        </a>
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-badge-ring">
            <PiggyBank size={26} />
          </span>
          Акции
        </a>
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-badge-ring">
            <Rocket size={26} />
          </span>
          Нагретые
        </a>
        <a href={REF_URL} className="w9k4-badge">
          <span className="w9k4-badge-ring">
            <Smartphone size={26} />
          </span>
          Скачать
        </a>
      </div>
    </section>
  )
}
