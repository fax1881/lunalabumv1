'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'

const Products = () => {
  const products = [
    {
      title: 'Pola Kart',
      image: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Pola+Kart',
      features: [
        'Polaroid ebatı retro baskılar',
        'Fotoğraflarınıza not ekleyebilirsiniz',
        '3 farklı ebat seçeneği'
      ],
      buttonText: 'Siparişe Başla',
      siparisLink: '/pola-kart/siparis'
    },
    {
      title: 'Canvas Tablo',
      image: 'https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Canvas+Tablo',
      features: [
        'Canvas kumaşına yüksek kaliteli uv baskı teknolojisi',
        'Yıllarca bozulmaz, renkler solmaz',
        'Yaşam alanlarınızı renklendirebilirsiniz'
      ],
      buttonText: 'Siparişe Başla',
      siparisLink: '/canvas/siparis'
    },
    {
      title: 'Fotokitap',
      image: 'https://via.placeholder.com/400x300/45b7d1/ffffff?text=Fotokitap',
      features: [
        'Fotoğraflarınızı kitap haline getirip ömür boyu saklayabilirsiniz',
        'Özel Fujifilm albüm kağıdı ile yüksek kaliteli renkler',
        'Layflat ciltleme teknolojisi ile sayfalarınız tamamen açılır',
        'Aynı gün kargo'
      ],
      buttonText: 'Siparişe Başla',
      siparisLink: '/fotokitap/siparis'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Popüler Ürünlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fotoğraflarınızı en kaliteli şekilde baskıya dönüştürüyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={product.siparisLink} className="btn-primary w-full block text-center">
                  {product.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products 