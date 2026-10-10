import { Dice5, Layers, LayoutGrid, MonitorPlay, Spade, TrendingUp } from 'lucide-react'
import { REF_URL } from '@/lib/f6c'

export function CategoryTabs() {
  return (
    <nav className="w9k4-cats" aria-label="Категории игр Flagman Casino">
      <div className="w9k4-cats-row">
        <a href={REF_URL} className="w9k4-cat" aria-current="page">
          <LayoutGrid size={16} />
          Лобби
        </a>
        <a href={REF_URL} className="w9k4-cat">
          <Dice5 size={16} />
          Слоты
        </a>
        <a href={REF_URL} className="w9k4-cat">
          <MonitorPlay size={16} />
          Live-казино
        </a>
        <a href={REF_URL} className="w9k4-cat">
          <TrendingUp size={16} />
          Crash games
        </a>
        <a href={REF_URL} className="w9k4-cat">
          <Spade size={16} />
          Настольные
        </a>
        <a href={REF_URL} className="w9k4-cat">
          <Layers size={16} />
          Провайдеры
        </a>
      </div>
    </nav>
  )
}
