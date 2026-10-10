import '@fontsource-variable/manrope'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <title>Flagman Casino — официальный сайт: играть онлайн, рабочее зеркало Флагман Казино</title>
        <meta
          name="description"
          content="Flagman Casino официальный сайт — играть онлайн в слоты, live-казино и crash games Флагман Казино. Рабочее зеркало на сегодня, бонус 150% до 600 € на первый депозит, вход и регистрация без блокировок."
        />
        <link rel="canonical" href="https://flagman6casino.vercel.app/" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Flagman Casino" />
        <meta property="og:url" content="https://flagman6casino.vercel.app/" />
        <meta property="og:title" content="Flagman Casino — официальный сайт: играть онлайн, рабочее зеркало Флагман Казино" />
        <meta
          property="og:description"
          content="Flagman Casino официальный сайт — играть онлайн в слоты, live-казино и crash games. Рабочее зеркало, бонус 150% до 600 €, вход и регистрация без блокировок."
        />
        <meta property="og:image" content="https://flagman6casino.vercel.app/images/f6c-hero.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flagman Casino — официальный сайт: играть онлайн, рабочее зеркало Флагман Казино" />
        <meta
          name="twitter:description"
          content="Рабочее зеркало Флагман Казино, бонус 150% до 600 € на первый депозит, слоты, live-казино и crash games. Вход и регистрация без блокировок."
        />
        <meta name="theme-color" content="#0b0e12" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body className="font-sans text-foreground antialiased">{children}</body>
    </html>
  )
}
