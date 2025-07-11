import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://furkanbxy.com'), // kendi domaininle değiştir
  title: 'FurkanBxy - Profesyonel Fotoğraf Baskı Hizmetleri',
  description: 'FurkanBxy ile kaliteli fotoğraf baskı, fotokitap, canvas tablo, pola kart ve daha fazlası. Orijinal Fujifilm kağıdı, aynı gün kargo.',
  keywords: 'fotoğraf baskı, fotokitap, canvas tablo, pola kart, foto magnet, çerçeveli fotoğraf, foto takvim',
  authors: [{ name: 'FurkanBxy' }],
  creator: 'FurkanBxy',
  publisher: 'FurkanBxy',
  robots: 'index, follow',
  openGraph: {
    title: 'FurkanBxy - Profesyonel Fotoğraf Baskı Hizmetleri',
    description: 'Kaliteli fotoğraf baskı, fotokitap, canvas tablo ve daha fazlası',
    url: 'https://furkanbxy.com',
    siteName: 'FurkanBxy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FurkanBxy - Fotoğraf Baskı Hizmetleri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FurkanBxy - Profesyonel Fotoğraf Baskı Hizmetleri',
    description: 'Kaliteli fotoğraf baskı, fotokitap, canvas tablo ve daha fazlası',
    images: ['/og-image.jpg'],
  },
  // viewport metadata'dan kaldırıldı
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 