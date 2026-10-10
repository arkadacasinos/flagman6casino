import { Headphones } from 'lucide-react'
import { CategoryTabs } from '@/components/f6c/category-tabs'
import { HeroBanner } from '@/components/f6c/hero-banner'
import { QuickRail } from '@/components/f6c/quick-rail'
import { SeoArticle } from '@/components/f6c/seo-article'
import { SiteFooter } from '@/components/f6c/site-footer'
import { Topbar } from '@/components/f6c/topbar'
import { REF_URL } from '@/lib/f6c'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Topbar />
      <QuickRail />
      <HeroBanner />
      <CategoryTabs />
      <SeoArticle />
      <SiteFooter />
      <a href={REF_URL} className="w9k4-support" aria-label="Поддержка Flagman Casino">
        <Headphones size={22} />
      </a>
    </main>
  )
}
