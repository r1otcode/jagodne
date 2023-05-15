import './globals.css'
import localFont from '@next/font/local'

const Axiforma = localFont({
  src: [
    {
      path: '../public/fonts/axiforma/Axiforma-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/axiforma/Axiforma-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-Axiforma'
})


export const metadata = {
  title: 'Jagodne',
  description: 'Jagodne',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${Axiforma.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
