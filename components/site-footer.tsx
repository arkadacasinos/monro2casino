const tags = [
  { label: '#monro_casino', href: '#monro-kazino' },
  { label: '#monro_casino_официальный_сайт', href: '#monro-kazino-oficialnyj-sajt' },
  { label: '#monro_casino_официальный', href: '#monro-kazino-oficialnyj' },
  { label: '#монро_казино_официальный', href: '#monro-kazino-oficialnyj' },
  { label: '#монро_казино_официальный_сайт', href: '#monro-kazino-oficialnyj-sajt' },
  { label: '#monro_casino_зеркало', href: '#monro-kazino-zerkalo' },
  { label: '#monro_casino_играть', href: '#monro-kazino-igrat' },
  { label: '#монро_казино_играть', href: '#monro-kazino-igrat' },
  { label: '#монро_казино_онлайн', href: '#monro-kazino-onlajn' },
  { label: '#монро_казино_зеркало_рабочее', href: '#monro-kazino-zerkalo-rabochee' },
  { label: '#монро_казино', href: '#monro-kazino' },
  { label: '#монро_казино_зеркало', href: '#monro-kazino-zerkalo' },
]

export default function SiteFooter() {
  return (
    <footer className="m7kq-footer">
      <nav className="m7kq-tags" aria-label="Ключевые фразы Monro Casino">
        {tags.map((tag) => (
          <a className="m7kq-tag" key={tag.label} href={tag.href}>
            {tag.label}
          </a>
        ))}
      </nav>
      <span className="m7kq-age" aria-label="Только для совершеннолетних">
        18+
      </span>
      <p className="m7kq-copy">
        Monro Casino — информационная страница об онлайн-казино Монро Казино: официальный сайт, зеркало рабочее,
        бонусы и слоты. Играйте ответственно: азартные игры доступны только лицам старше 18 лет и могут вызывать
        зависимость. © 2026 Monro Casino.
      </p>
    </footer>
  )
}
