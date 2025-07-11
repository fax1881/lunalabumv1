'use client'

import React from 'react'

const PreparationTimes = () => {
  const times = [
    { product: 'Fotoğraf Baskısı', time: 'Aynı gün kargoda *' },
    { product: 'Foto Kitap', time: 'Aynı gün kargoda *' },
    { product: 'Canvas Tablo', time: '1 İş günü' },
    { product: 'Hediyelik Ürünler', time: '1 İş günü' },
    { product: 'Pola Kart', time: 'Aynı gün kargoda *' },
    { product: 'Foto Magnet', time: 'Aynı gün kargoda *' },
    { product: 'Çerçeveli Fotoğraf', time: 'Aynı gün kargoda *' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hazırlanma Süresi
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Ürün</th>
                  <th className="px-6 py-4 text-left font-semibold">Süre</th>
                </tr>
              </thead>
              <tbody>
                {times.map((item, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">{item.product}</td>
                    <td className="px-6 py-4 text-gray-600">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-gray-600 mt-6 italic">
            * Saat 13:00'a kadar verdiğiniz siparişler için geçerlidir.
          </p>
          <p className="text-center text-gray-600 mt-4">
            Bu tabloda siparişinizi kargoya veriş sürelerimiz gösterilmektedir, kargo şirketinin teslimat süresi il/ilçe'lere göre değişkenlik göstermektedir.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PreparationTimes 