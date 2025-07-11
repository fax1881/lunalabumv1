import React from 'react'
import Link from 'next/link'

const fiyatlar = [
  { ebat: '4,5x6 cm (6 Adet)', adet1: '29,90 TL', adet2: '24,90 TL', adet3: '19,90 TL' },
  { ebat: '3x4 cm (8 Adet)', adet1: '24,90 TL', adet2: '19,90 TL', adet3: '14,90 TL' },
]

const BiyometrikVesikalik = () => (
  <div className="min-h-screen bg-gray-50 py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-light mb-4">Biyometrik & Vesikalık Fotoğraf</h1>
      <p className="text-lg text-gray-600 mb-8">Resmi belgeler için uygun, yüksek kaliteli biyometrik ve vesikalık fotoğraf baskısı.</p>
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
          <h4 className="text-lg font-semibold mb-2">Resmi Uyum</h4>
          <p className="text-gray-600 text-sm">Tüm biyometrik ve vesikalık fotoğraflar resmi belge standartlarına uygundur.</p>
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
        <Link href="/biyometrik-vesikalik-fotograf/siparis" className="btn-primary px-8 py-4 text-lg">Siparişe Başla</Link>
      </div>
    </div>
  </div>
)

export default BiyometrikVesikalik 
 
 