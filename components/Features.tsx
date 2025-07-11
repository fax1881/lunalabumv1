'use client'

import React from 'react'

const Features = () => {
  const features = [
    {
      title: 'Kredi kartı ile veya banka havalesi ile ödeme seçeneği.',
      icon: '💳'
    },
    {
      title: 'Türkiyenin her yerine, kapınıza kadar kargo ile teslimat.',
      icon: '🚚'
    },
    {
      title: '%100 kalite garantisi, %99 müşteri memnuniyeti.',
      icon: '🏆'
    },
    {
      title: '7/24 istediğiniz yerden sipariş verme imkanı.',
      icon: '⏰'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 