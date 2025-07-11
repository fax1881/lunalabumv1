'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/urunler')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Ürünler yüklenemedi.');
        setLoading(false);
      });
  }, []);

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

        {loading ? (
          <p className="text-gray-500 text-center">Yükleniyor...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image || 'https://via.placeholder.com/400x300?text=Ürün'}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  {product.category && (
                    <div className="text-xs text-yellow-600 mb-2">{product.category}</div>
                  )}
                  <div className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </div>
                  <div className="text-lg font-semibold text-primary-700 mb-4">
                    {product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                  </div>
                  <Link href={"/sepet/checkout"} className="btn-primary w-full block text-center">
                    Siparişe Başla
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products 