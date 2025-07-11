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
  FileImage,
  Square
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const Fotoblok = () => {
  const products = [
    {
      id: 1,
      name: '10x15 cm Fotoblok',
      description: 'Küçük boyut fotoblok',
      price: '12₺',
      features: ['Sert yüzey', 'Su geçirmez', 'Kolay temizlik'],
      image: '/images/fotoblok-10x15.jpg'
    },
    {
      id: 2,
      name: '15x21 cm Fotoblok',
      description: 'Orta boyut fotoblok',
      price: '18₺',
      features: ['Dayanıklı', 'Canlı renkler', 'Dekoratif'],
      image: '/images/fotoblok-15x21.jpg'
    },
    {
      id: 3,
      name: '20x30 cm Fotoblok',
      description: 'Büyük boyut fotoblok',
      price: '25₺',
      features: ['Büyük boyut', 'Profesyonel', 'Kaliteli'],
      image: '/images/fotoblok-20x30.jpg'
    }
  ]

  const features = [
    {
      icon: Square,
      title: 'Sert Yüzey',
      description: 'Dayanıklı sert yüzey koruması'
    },
    {
      icon: Shield,
      title: 'Su Geçirmez',
      description: 'Su ve nem geçirmez yüzey'
    },
    {
      icon: Clock,
      title: 'Uzun Ömürlü',
      description: 'Yıllarca bozulmayan kalite'
    },
    {
      icon: Palette,
      title: 'Canlı Renkler',
      description: 'RGB renk paleti ile gerçekçi renkler'
    }
  ]

  const fiyatlar = [
    { ebat: '10x15 см', adet1: '49,90 TL', adet2: '44,90 TL', adet3: '39,90 TL' },
    { ebat: '15x21 см', adet1: '69,90 TL', adet2: '64,90 TL', adet3: '59,90 TL' },
    { ebat: '20x30 см', adet1: '99,90 TL', adet2: '89,90 TL', adet3: '79,90 TL' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-light mb-4">Fotoblok</h1>
        <p className="text-lg text-gray-600 mb-8">Ahşap blok üzerine yüksek kaliteli fotoğraf baskısı, uygun fiyatlar ve hızlı teslimat.</p>
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
            <h4 className="text-lg font-semibold mb-2">Doğal Ahşap</h4>
            <p className="text-gray-600 text-sm">Fotoblok ürünlerimizde doğal ahşap ve özel kaplama kullanılır.</p>
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
          <Link href="/fotoblok/editor" className="btn-primary px-8 py-4 text-lg">Siparişe Başla</Link>
        </div>
      </div>
    </div>
  )
}

export default Fotoblok 
