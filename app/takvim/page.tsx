'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Image, 
  Heart, 
  Star, 
  CheckCircle,
  Truck,
  Shield,
  Clock,
  Users,
  FileText,
  Camera,
  Gift,
  Home
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Takvim = () => {
  const products = [
    {
      id: 1,
      name: 'Duvar Takvimi',
      description: 'Fotoğraflı duvar takvimi',
      sizes: ['A3 (12 ay)', 'A2 (12 ay)', 'A1 (12 ay)'],
      prices: ['45₺', '65₺', '95₺'],
      features: ['12 ay', 'Fotoğraflı', 'Duvara asılabilir'],
      image: '/images/duvar-takvimi.jpg'
    },
    {
      id: 2,
      name: 'Masa Takvimi',
      description: 'Kompakt masa takvimi',
      sizes: ['A4 (12 ay)', 'A5 (12 ay)'],
      prices: ['25₺', '35₺'],
      features: ['Kompakt boyut', 'Masa üstü', 'Pratik kullanım'],
      image: '/images/masa-takvimi.jpg'
    },
    {
      id: 3,
      name: 'Cep Takvimi',
      description: 'Küçük boyutlu cep takvimi',
      sizes: ['9x13 cm', '10x15 cm'],
      prices: ['15₺', '20₺'],
      features: ['Cep boyutu', 'Taşınabilir', 'Hediye ideal'],
      image: '/images/cep-takvimi.jpg'
    },
    {
      id: 4,
      name: 'Aile Takvimi',
      description: 'Aile fotoğrafları ile özel takvim',
      sizes: ['A3 (12 ay)', 'A2 (12 ay)'],
      prices: ['55₺', '75₺'],
      features: ['Aile fotoğrafları', 'Özel tasarım', 'Anlamlı hediye'],
      image: '/images/aile-takvimi.jpg'
    },
    {
      id: 5,
      name: 'Kurumsal Takvim',
      description: 'Şirketler için özel takvim',
      sizes: ['A3 (12 ay)', 'A2 (12 ay)', 'A1 (12 ay)'],
      prices: ['65₺', '85₺', '125₺'],
      features: ['Kurumsal tasarım', 'Logo entegrasyonu', 'Toplu sipariş'],
      image: '/images/kurumsal-takvimi.jpg'
    }
  ]

  const features = [
    {
      icon: Calendar,
      title: '12 Ay Takvim',
      description: 'Tüm yıl boyunca kullanabileceğiniz takvimler'
    },
    {
      icon: Image,
      title: 'Fotoğraflı Tasarım',
      description: 'Seçtiğiniz fotoğraflarla kişiselleştirilmiş takvimler'
    },
    {
      icon: Home,
      title: 'Dekoratif',
      description: 'Evinizin dekorasyonuna uygun şık tasarımlar'
    },
    {
      icon: Gift,
      title: 'Hediye İdeal',
      description: 'Sevdikleriniz için mükemmel hediye seçeneği'
    }
  ]

  const designOptions = [
    {
      title: 'Standart Tasarım',
      description: 'Temel takvim tasarım seçeneği',
      price: 'Ücretsiz',
      features: ['Hızlı işlem', 'Profesyonel görünüm', 'Kolay kullanım']
    },
    {
      title: 'Özel Tasarım',
      description: 'Tasarımcımızla birlikte özel tasarım',
      price: '30₺',
      features: ['Kişisel tasarım', 'Sınırsız düzenleme', 'Profesyonel sonuç']
    },
    {
      title: 'Premium Tasarım',
      description: 'Tamamen özelleştirilmiş premium tasarım',
      price: '60₺',
      features: ['Özel illüstrasyonlar', 'Grafik tasarım', 'Özel fontlar']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Foto Takvim
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              Fotoğraflarınızla kişiselleştirilmiş özel takvimler
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>12 ay takvim</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Fotoğraflı tasarım</span>
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
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-green-600 text-2xl" />
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
              Takvim Çeşitleri
            </h2>
            <p className="text-gray-600 text-lg">
              İhtiyacınıza uygun takvim seçenekleri
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
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <Calendar className="text-green-600 text-4xl" />
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
                          <span className="font-semibold text-green-600">
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

                  <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
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
              Takviminiz için en uygun tasarım seçeneğini belirleyin
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
                  <div className="text-2xl font-bold text-green-600 mb-4">
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
                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
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
              Takvim Nasıl Hazırlanır?
            </h2>
            <p className="text-gray-600 text-lg">
              4 basit adımda özel takviminizi oluşturun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Fotoğrafları Seçin',
                description: 'Takviminizde kullanmak istediğiniz fotoğrafları seçin'
              },
              {
                step: '2',
                title: 'Takvim Türü Belirleyin',
                description: 'Duvar, masa veya cep takvimi seçeneklerinden birini belirleyin'
              },
              {
                step: '3',
                title: 'Tasarım Seçin',
                description: 'Standart, özel veya premium tasarım seçeneklerinden birini belirleyin'
              },
              {
                step: '4',
                title: 'Sipariş Verin',
                description: 'Ödeme yapın ve takviminizi bekleyin'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
              Yeni Yıla Özel Takviminizle Başlayın
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Özel tasarım takviminizi hemen sipariş edin
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Takvim Oluştur
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Takvim 