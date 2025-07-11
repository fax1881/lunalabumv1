'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Image, 
  Palette, 
  Heart, 
  Star, 
  CheckCircle,
  Truck,
  Shield,
  Clock,
  Users,
  FileText,
  Camera
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Fotokitap = () => {
  const products = [
    {
      id: 1,
      name: 'Sert Kapak Fotokitap',
      description: 'Premium kalitede sert kapak fotokitap',
      sizes: ['A4 (20 sayfa)', 'A4 (40 sayfa)', 'A4 (60 sayfa)'],
      prices: ['85₺', '125₺', '165₺'],
      features: ['Sert kapak', 'Yüksek kalite baskı', 'Özel tasarım'],
      image: '/images/sert-kapak-fotokitap.jpg'
    },
    {
      id: 2,
      name: 'Akordiyon Kitap',
      description: 'Katlanabilir akordiyon tarzı fotokitap',
      sizes: ['10x15 cm', '15x21 cm', '20x30 cm'],
      prices: ['45₺', '65₺', '95₺'],
      features: ['Katlanabilir', 'Pratik kullanım', 'Özel ambalaj'],
      image: '/images/akordiyon-kitap.jpg'
    },
    {
      id: 3,
      name: 'Tel Spiralli Kitap',
      description: 'Tel spiral ciltli fotokitap',
      sizes: ['A5 (20 sayfa)', 'A5 (40 sayfa)', 'A4 (20 sayfa)'],
      prices: ['55₺', '85₺', '75₺'],
      features: ['Tel spiral cilt', '360° açılabilir', 'Dayanıklı'],
      image: '/images/tel-spiral-kitap.jpg'
    },
    {
      id: 4,
      name: 'Mini Kitap',
      description: 'Küçük boyutlu sevimli fotokitap',
      sizes: ['10x10 cm', '12x12 cm', '15x15 cm'],
      prices: ['35₺', '45₺', '55₺'],
      features: ['Kompakt boyut', 'Taşınabilir', 'Hediye ideal'],
      image: '/images/mini-kitap.jpg'
    },
    {
      id: 5,
      name: 'Anı Kitabı',
      description: 'Özel anılarınız için tasarlanmış kitap',
      sizes: ['A4 (30 sayfa)', 'A4 (50 sayfa)', 'A4 (80 sayfa)'],
      prices: ['95₺', '145₺', '195₺'],
      features: ['Özel tasarım', 'Kişiselleştirilebilir', 'Premium kağıt'],
      image: '/images/ani-kitabi.jpg'
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: 'Profesyonel Tasarım',
      description: 'Uzman tasarımcılarımızla özel fotokitap tasarımı'
    },
    {
      icon: Truck,
      title: 'Hızlı Teslimat',
      description: '3-5 iş günü içinde kapınızda'
    },
    {
      icon: Shield,
      title: 'Kalite Garantisi',
      description: 'Memnun kalmazsanız ücretsiz yeniden baskı'
    },
    {
      icon: Heart,
      title: 'Kişiselleştirilebilir',
      description: 'Her sayfayı istediğiniz gibi düzenleyin'
    }
  ]

  const designOptions = [
    {
      title: 'Otomatik Tasarım',
      description: 'Fotoğraflarınızı otomatik olarak düzenler',
      price: 'Ücretsiz',
      features: ['Hızlı işlem', 'Profesyonel görünüm', 'Kolay kullanım']
    },
    {
      title: 'Özel Tasarım',
      description: 'Tasarımcımızla birlikte özel tasarım',
      price: '50₺',
      features: ['Kişisel tasarım', 'Sınırsız düzenleme', 'Profesyonel sonuç']
    },
    {
      title: 'Premium Tasarım',
      description: 'Tamamen özelleştirilmiş premium tasarım',
      price: '100₺',
      features: ['Özel illüstrasyonlar', 'Grafik tasarım', 'Özel fontlar']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Fotokitap
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-secondary-100">
              Anılarınızı ölümsüzleştiren özel tasarım fotokitaplar
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Özel tasarım</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Yüksek kalite</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Kişiselleştirilebilir</span>
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
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-secondary-600 text-2xl" />
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
              Fotokitap Çeşitleri
            </h2>
            <p className="text-gray-600 text-lg">
              İhtiyacınıza uygun fotokitap seçenekleri
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
                <div className="h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                  <BookOpen className="text-secondary-600 text-4xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Seçenekler ve Fiyatlar:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {product.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="flex justify-between">
                          <span className="text-gray-600">{size}</span>
                          <span className="font-semibold text-secondary-600">
                            {product.prices[sizeIndex]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
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

                  <button className="w-full mt-6 bg-secondary-600 hover:bg-secondary-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                    Sipariş Ver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Tasarım Seçenekleri
            </h2>
            <p className="text-gray-600 text-lg">
              Fotokitabınız için en uygun tasarım seçeneğini belirleyin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="text-2xl font-bold text-secondary-600 mb-4">
                    {option.price}
                  </div>
                </div>
                <ul className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-secondary-600 hover:bg-secondary-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                  Seç
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Fotokitap Nasıl Hazırlanır?
            </h2>
            <p className="text-gray-600 text-lg">
              4 basit adımda özel fotokitabınızı oluşturun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Fotoğrafları Yükleyin',
                description: 'Fotokitabınızda kullanmak istediğiniz fotoğrafları yükleyin'
              },
              {
                step: '2',
                title: 'Tasarım Seçin',
                description: 'Otomatik, özel veya premium tasarım seçeneklerinden birini belirleyin'
              },
              {
                step: '3',
                title: 'Düzenleyin',
                description: 'Sayfa düzenlerini ve metinleri kişiselleştirin'
              },
              {
                step: '4',
                title: 'Sipariş Verin',
                description: 'Ödeme yapın ve fotokitabınızı bekleyin'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-secondary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
              Anılarınızı Kitaba Dönüştürün
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Özel tasarım fotokitabınızı hemen sipariş edin
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Fotokitap Oluştur
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Fotokitap 