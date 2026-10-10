import { Download } from 'lucide-react'
import { REF_URL } from '@/lib/f6c'

export function HeroBanner() {
  return (
    <section className="w9k4-hero" aria-label="Приветственный бонус Flagman Casino">
      <img src="/images/f6c-hero.jpg" alt="" aria-hidden="true" className="w9k4-hero-art" />
      <div className="w9k4-hero-inner">
        <p className="w9k4-hero-title">Получи до 600 €</p>
        <p className="w9k4-hero-sub">Подарок на первый депозит</p>
        <div className="w9k4-hero-cta">
          <a href={REF_URL} className="w9k4-btn w9k4-btn-green w9k4-btn-lg">
            Получить
          </a>
          <div className="w9k4-pays" aria-label="Способы оплаты">
            <span className="w9k4-pay w9k4-pay-bank">Pay by Bank</span>
            <span className="w9k4-pay">Apple Pay</span>
            <span className="w9k4-pay">
              <i className="w9k4-mc" aria-hidden="true" />
              Mastercard
            </span>
            <span className="w9k4-pay w9k4-pay-visa">Visa</span>
          </div>
        </div>
        <a href={REF_URL} className="w9k4-app-pill">
          <span className="w9k4-app-icon">
            <Download size={18} />
          </span>
          <span>
            Скачать
            <br />
            приложение
          </span>
          <img src="/images/f6c-phone.jpg" alt="Приложение Flagman Casino на смартфоне" className="w9k4-app-phone" />
        </a>
      </div>
    </section>
  )
}
