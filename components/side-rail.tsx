import { Crown, Dice5, Gift, Megaphone, Radio, Trophy } from 'lucide-react'

const railLinks = [
  { label: 'Бонусы', href: '#monro-kazino-oficialnyj', icon: Gift, tone: 'm7kq-ico-red' },
  { label: 'Промо', href: '#monro-kazino-oficialnyj', icon: Megaphone, tone: 'm7kq-ico-blue' },
  { label: 'VIP Club', href: '#monro-kazino-oficialnyj', icon: Crown, tone: 'm7kq-ico-gold' },
  { label: 'Слоты', href: '#sloty', icon: Dice5, tone: 'm7kq-ico-red' },
  { label: 'Live', href: '#sloty', icon: Radio, tone: 'm7kq-ico-green' },
  { label: 'Спорт', href: '#monro-kazino-onlajn', icon: Trophy, tone: 'm7kq-ico-blue' },
]

export default function SideRail() {
  return (
    <nav className="m7kq-rail" aria-label="Разделы Monro Casino">
      {railLinks.map(({ label, href, icon: Icon, tone }) => (
        <a key={label} className="m7kq-rail-item" href={href}>
          <span className={`m7kq-rail-ico ${tone}`}>
            <Icon size={18} aria-hidden="true" />
          </span>
          {label}
        </a>
      ))}
      <span className="m7kq-rail-lang" aria-label="Язык интерфейса: русский">
        RU
      </span>
    </nav>
  )
}
