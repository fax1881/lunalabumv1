'use client'

import React from 'react'

const PaymentDelivery = () => {
  const items = [
    {
      title: 'Ödeme Yöntemleri',
      description: 'Web sitemiz SSL güvenlik sistemi ile korunmaktadır. Güvenli bir şekilde tüm kredi kartlarınızla veya Havale/Eft seçeneği ile ödeme yapabilirsiniz. Web sitemizdeki tüm fiyatlara KDV dahildir.'
    },
    {
      title: 'Teslimat',
      description: 'Teslimat kargo firması ile yapılmaktadır. Türkiye\'nin her yerine 1-2 iş günü içerisinde ürünleriniz teslim edilmektedir.'
    },
    {
      title: 'Hazırlanma Süresi',
      description: 'Her ürünün hazırlanma süresi sayfa altında yazmaktadır. Siparişiniz hazırlanma süresinde hazırlanıp kargoya verilecektir. Kargoya verildikten sonra kargo takip numarası size mail ile bildirilecektir.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ödeme ve Teslimat
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PaymentDelivery 