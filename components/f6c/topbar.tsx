import { Menu, Search } from 'lucide-react'
import { REF_URL } from '@/lib/f6c'

export function Topbar() {
  return (
    <>
      <header className="w9k4-topbar">
        <div className="w9k4-topbar-row">
          <a href="#w9k4-menu" className="w9k4-burger" aria-label="Открыть меню">
            <Menu size={22} />
          </a>
          <a href={REF_URL} className="w9k4-logo" aria-label="Flagman Casino — официальный сайт">
            <span className="w9k4-logo-mark" aria-hidden="true">
              F
            </span>
            FLAGMAN
          </a>
          <nav className="w9k4-switch" aria-label="Разделы платформы">
            <a href={REF_URL} aria-current="page">
              КАЗИНО
            </a>
            <a href={REF_URL}>СПОРТ</a>
          </nav>
          <a href={REF_URL} className="w9k4-search">
            <Search size={16} />
            <span>Введи название игры или провайдера</span>
          </a>
          <a href={REF_URL} className="w9k4-btn w9k4-btn-outline w9k4-login">
            ВОЙТИ
          </a>
          <a href={REF_URL} className="w9k4-btn w9k4-btn-green">
            РЕГИСТРАЦИЯ
          </a>
        </div>
      </header>
      <nav id="w9k4-menu" className="w9k4-drawer" aria-label="Меню сайта">
        <a href={REF_URL} className="w9k4-btn w9k4-btn-green">
          РЕГИСТРАЦИЯ
        </a>
        <a href={REF_URL} className="w9k4-btn w9k4-btn-outline">
          ВОЙТИ
        </a>
        <p className="w9k4-drawer-cap">Разделы</p>
        <a href="#flagman-casino" className="w9k4-dlink">
          Flagman Casino
        </a>
        <a href="#flagman-casino-zerkalo" className="w9k4-dlink">
          Flagman Casino зеркало
        </a>
        <a href="#flagman-casino-igrat" className="w9k4-dlink">
          Flagman Casino играть
        </a>
        <a href="#flagman-kazino" className="w9k4-dlink">
          Бонус 150% до 600 €
        </a>
        <a href="#zerkalo-rabochee" className="w9k4-dlink">
          Зеркало рабочее
        </a>
        <a href="#faq" className="w9k4-dlink">
          Вопросы и ответы
        </a>
      </nav>
      <a href="#!" className="w9k4-scrim" aria-hidden="true" tabIndex={-1} />
    </>
  )
}
