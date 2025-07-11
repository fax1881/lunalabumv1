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
  Magnet
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const FotoMagnet = () => {
  const products = [
    {
      id: 1,
      name: '5x7.5 cm Foto Magnet',
      description: 'Küçük boyut foto magnet',
      price: '8₺',
      features: ['Mıknatıslı', 'Yüksek kalite', 'Buzdolabı için'],
      image: '/images/magnet-5x7.jpg'
    },
    {
      id: 2,
      name: '7.5x10 cm Foto Magnet',
      description: 'Orta boyut foto magnet',
      price: '12₺',
      features: ['Dayanıklı', 'Net görüntü', 'Metal yüzeyler'],
      image: '/images/magnet-7x10.jpg'
    },
    {
      id: 3,
      name: '10x10 cm Foto Magnet',
      description: 'Kare boyut foto magnet',
      price: '15₺',
      features: ['Kare format', 'Profesyonel', 'Kaliteli'],
      image: '/images/magnet-10x10.jpg'
    },
    {
      id: 4,
      name: '10x15 cm Foto Magnet',
      description: 'Büyük boyut foto magnet',
      price: '18₺',
      features: ['Büyük boyut', 'Dayanıklı', 'Dekoratif'],
      image: '/images/magnet-10x15.jpg'
    },
    {
      id: 5,
      name: '15x15 cm Foto Magnet',
      description: 'Dev boyut foto magnet',
      price: '25₺',
      features: ['Dev boyut', 'Güçlü mıknatıs', 'Görsel etki'],
      image: '/images/magnet-15x15.jpg'
    },
    {
      id: 6,
      name: '15x21 cm Foto Magnet',
      description: 'Jumbo boyut foto magnet',
      price: '35₺',
      features: ['Jumbo boyut', 'Mükemmel detay', 'Sergi kalitesi'],
      image: '/images/magnet-15x21.jpg'
    }
  ]

  const features = [
    {
      icon: Magnet,
      title: 'Mıknatıslı',
      description: 'Güçlü mıknatıs ile metal yüzeylere yapışır'
    },
    {
      icon: Shield,
      title: 'Dayanıklı',
      description: 'Uzun ömürlü kaliteli malzeme'
    },
    {
      icon: Clock,
      title: 'Hızlı Baskı',
      description: 'Aynı gün teslimat imkanı'
    },
    {
      icon: Palette,
      title: 'Canlı Renkler',
      description: 'RGB renk paleti ile gerçekçi renkler'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-600 to-rose-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Foto Magnet
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-rose-100">
              Buzdolabı ve metal yüzeyler için foto magnet
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Mıknatıslı</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Dayanıklı</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Metal yüzeyler</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-rose-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Foto Magnet Boyutları
            </h2>
            <p className="text-gray-600 text-lg">
              İhtiyacınıza uygun foto magnet boyutunu seçin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center">
                  <FileImage className="text-rose-600 text-4xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="text-2xl font-bold text-rose-600 mb-4">
                    {product.price}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-gray-800">Özellikler:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                    Sipariş Ver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Foto Magnetinizi Hemen Basın
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Buzdolabı ve metal yüzeyler için foto magnet siparişi verin
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Siparişe Başla
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FotoMagnet 