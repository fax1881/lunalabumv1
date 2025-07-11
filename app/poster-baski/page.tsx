'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Image, 
  Printer, 
  CheckCircle,
  Star,
  Truck,
  Shield,
  Clock,
  Palette,
  FileImage
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const fiyatlar = [
  { ebat: '40x60 см', adet1: '199,90 TL', adet2: '179,90 TL', adet3: '169,90 TL' },
  { ebat: '50x50 см', adet1: '199,90 TL', adet2: '189,90 TL', adet3: '179,90 TL' },
  { ebat: '50x75 см', adet1: '299,90 TL', adet2: '269,90 TL', adet3: '249,90 TL' },
  { ebat: '60x90 см', adet1: '349,90 TL', adet2: '319,90 TL', adet3: '299,90 TL' },
  { ebat: '75x100 см', adet1: '549,90 TL', adet2: '499,90 TL', adet3: '459,90 TL' },
  { ebat: '100x100 см', adet1: '699,90 TL', adet2: '639,90 TL', adet3: '589,90 TL' },
  { ebat: '100x150 см', adet1: '999,90 TL', adet2: '899,90 TL', adet3: '839,90 TL' },
]

const PosterBaski = () => {
  const products = [
    {
      id: 1,
      name: 'A3 Poster Baskı',
      description: '29.7 x 42 cm boyutunda yüksek kaliteli poster',
      price: '15₺',
      features: ['Yüksek çözünürlük', 'Canlı renkler', 'Dayanıklı kağıt'],
      image: '/images/poster-a3.jpg'
    },
    {
      id: 2,
      name: 'A2 Poster Baskı',
      description: '42 x 59.4 cm boyutunda büyük poster',
      price: '25₺',
      features: ['Büyük boyut', 'Net görüntü', 'Parlak renkler'],
      image: '/images/poster-a2.jpg'
    },
    {
      id: 3,
      name: 'A1 Poster Baskı',
      description: '59.4 x 84.1 cm boyutunda dev poster',
      price: '45₺',
      features: ['Dev boyut', 'Profesyonel kalite', 'Dekoratif'],
      image: '/images/poster-a1.jpg'
    },
    {
      id: 4,
      name: 'A0 Poster Baskı',
      description: '84.1 x 118.9 cm boyutunda jumbo poster',
      price: '85₺',
      features: ['Jumbo boyut', 'Mükemmel detay', 'Sergi kalitesi'],
      image: '/images/poster-a0.jpg'
    }
  ]

  const features = [
    {
      icon: Printer,
      title: 'Yüksek Kalite Baskı',
      description: 'Profesyonel baskı kalitesi ile net görüntüler'
    },
    {
      icon: Palette,
      title: 'Canlı Renkler',
      description: 'RGB renk paleti ile gerçekçi renkler'
    },
    {
      icon: Shield,
      title: 'Dayanıklı Kağıt',
      description: 'Uzun ömürlü, su geçirmez kağıt'
    },
    {
      icon: Truck,
      title: 'Hızlı Teslimat',
      description: 'Aynı gün kargo ile hızlı teslimat'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light mb-4">Poster Baskı</h1>
        <p className="text-lg text-gray-600 mb-8">Yüksek kaliteli poster baskı seçenekleri, uygun fiyatlar ve hızlı teslimat.</p>
        <div className="mb-10 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-2">Fiyat Listesi (KDV Dahil)</h2>
          <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
            <thead className="bg-primary-100">
              <tr>
                <th className="px-4 py-2">Ebat</th>
                <th className="px-4 py-2">1–3 Adet</th>
                <th className="px-4 py-2">4–9 Adet</th>
                <th className="px-4 py-2">10+ Adet</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {fiyatlar.map((row) => (
                <tr key={row.ebat}>
                  <td className="px-4 py-2 font-medium">{row.ebat}</td>
                  <td className="px-4 py-2">{row.adet1}</td>
                  <td className="px-4 py-2">{row.adet2}</td>
                  <td className="px-4 py-2">{row.adet3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-lg font-semibold mb-2">Kalite Garantisi</h4>
            <p className="text-gray-600 text-sm">Tüm poster baskılarımız son teknoloji makinalar ve en iyi materyallerle üretilir.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-lg font-semibold mb-2">Aynı Gün Kargo</h4>
            <p className="text-gray-600 text-sm">Saat 13.00'a kadar verilen siparişler aynı gün kargoya verilir.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-lg font-semibold mb-2">Ücretsiz Kargo</h4>
            <p className="text-gray-600 text-sm">900 TL ve üzeri alışverişlerde ücretsiz kargo fırsatı!</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/poster-baski/editor" className="btn-primary px-8 py-4 text-lg">Siparişe Başla</Link>
        </div>
      </div>
    </div>
  )
}

export default PosterBaski 
