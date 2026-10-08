import HeroFirstScreen from '@/components/hero-first-screen'
import SeoArticle from '@/components/seo-article'
import SideRail from '@/components/side-rail'
import SiteFooter from '@/components/site-footer'
import WinTicker from '@/components/win-ticker'

export default function Page() {
  return (
    <div className="m7kq-shell">
      <SideRail />
      <div className="m7kq-main">
        <HeroFirstScreen />
        <WinTicker />
        <SeoArticle />
        <SiteFooter />
      </div>
    </div>
  )
}
