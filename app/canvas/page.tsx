'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
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
  Camera,
  Home,
  Gift
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Canvas = () => {
  const products = [
    {
      id: 1,
      name: 'Tek Parça Canvas',
      description: 'Tek parça canvas tablo baskısı',
      sizes: ['30x40 cm', '40x60 cm', '50x70 cm', '60x80 cm', '80x120 cm'],
      prices: ['85₺', '125₺', '175₺', '225₺', '385₺'],
      features: ['Tek parça canvas', 'Ahşap çerçeve', 'Duvara asılabilir'],
      image: '/images/tek-parca-canvas.jpg'
    },
    {
      id: 2,
      name: 'Çerçeveli Canvas',
      description: 'Çerçeveli canvas tablo baskısı',
      sizes: ['30x40 cm', '40x60 cm', '50x70 cm', '60x80 cm'],
      prices: ['95₺', '145₺', '195₺', '245₺'],
      features: ['Ahşap çerçeve', 'Profesyonel görünüm', 'Hazır asılabilir'],
      image: '/images/cerceveli-canvas.jpg'
    },
    {
      id: 3,
      name: 'Parçalı Canvas',
      description: 'Çoklu parça canvas tablo seti',
      sizes: ['3 Parça (30x40)', '5 Parça (40x60)', '9 Parça (50x70)'],
      prices: ['225₺', '375₺', '675₺'],
      features: ['Çoklu parça', 'Kolaj efekti', 'Modern tasarım'],
      image: '/images/parcali-canvas.jpg'
    },
    {
      id: 4,
      name: 'Kolaj Canvas',
      description: 'Fotoğraf kolajı canvas tablo',
      sizes: ['40x60 cm', '50x70 cm', '60x80 cm'],
      prices: ['145₺', '195₺', '245₺'],
      features: ['Fotoğraf kolajı', 'Özel tasarım', 'Anlamlı düzenleme'],
      image: '/images/kolaj-canvas.jpg'
    },
    {
      id: 5,
      name: 'Pola Canvas',
      description: 'Polaroid tarzı canvas tablo',
      sizes: ['30x40 cm', '40x60 cm', '50x70 cm'],
      prices: ['95₺', '145₺', '195₺'],
      features: ['Polaroid efekti', 'Vintage görünüm', 'Özel kenarlık'],
      image: '/images/pola-canvas.jpg'
    }
  ]

  const features = [
    {
      icon: Image,
      title: 'Yüksek Kalite Baskı',
      description: 'Profesyonel canvas üzerine yüksek çözünürlüklü baskı'
    },
    {
      icon: Home,
      title: 'Dekoratif Tasarım',
      description: 'Evinizin dekorasyonuna uygun şık tasarımlar'
    },
    {
      icon: Shield,
      title: 'Dayanıklı Malzeme',
      description: 'Uzun yıllar bozulmayan kaliteli canvas malzeme'
    },
    {
      icon: Gift,
      title: 'Hediye İdeal',
      description: 'Sevdikleriniz için mükemmel hediye seçeneği'
    }
  ]

  const canvasTypes = [
    {
      title: 'Standart Canvas',
      description: 'Temel canvas baskı seçeneği',
      price: 'Ücretsiz',
      features: ['Yüksek kalite', 'Hızlı baskı', 'Standart çerçeve']
    },
    {
      title: 'Premium Canvas',
      description: 'Üstün kalitede canvas baskı',
      price: '+25₺',
      features: ['Premium malzeme', 'Özel kaplama', 'Gelişmiş renkler']
    },
    {
      title: 'Lüks Canvas',
      description: 'En yüksek kalitede lüks canvas',
      price: '+50₺',
      features: ['Lüks malzeme', 'Özel işlem', 'Mükemmel detaylar']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-400 to-accent-500 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Canvas Tablo
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-accent-100">
              Fotoğraflarınızı sanat eserine dönüştüren canvas tablolar
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Yüksek kalite canvas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Dekoratif tasarım</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Dayanıklı malzeme</span>
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
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-accent-600 text-2xl" />
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
              Canvas Tablo Çeşitleri
            </h2>
            <p className="text-gray-600 text-lg">
              İhtiyacınıza uygun canvas tablo seçenekleri
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
                <div className="h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center">
                  <Image className="text-accent-600 text-4xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Boyutlar ve Fiyatlar:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {product.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="flex justify-between">
                          <span className="text-gray-600">{size}</span>
                          <span className="font-semibold text-accent-600">
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

                  <button className="w-full mt-6 bg-accent-600 hover:bg-accent-700 text-white py-3 px-4 rounded-lg transition-colors font-medium">
                    Sipariş Ver
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Canvas Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Canvas Kalite Seçenekleri
            </h2>
            <p className="text-gray-600 text-lg">
              Bütçenize uygun canvas kalite seçeneğini belirleyin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canvasTypes.map((option, index) => (
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
                  <div className="text-2xl font-bold text-accent-600 mb-4">
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
                <button className="w-full mt-6 bg-accent-600 hover:bg-accent-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
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
              Canvas Tablo Nasıl Hazırlanır?
            </h2>
            <p className="text-gray-600 text-lg">
              4 basit adımda özel canvas tablonuzu oluşturun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Fotoğraf Seçin',
                description: 'Canvas tabloya dönüştürmek istediğiniz fotoğrafı seçin'
              },
              {
                step: '2',
                title: 'Boyut Belirleyin',
                description: 'İstediğiniz canvas boyutunu ve kalite seçeneğini belirleyin'
              },
              {
                step: '3',
                title: 'Düzenleme Yapın',
                description: 'Fotoğrafı canvas için optimize edin ve düzenleyin'
              },
              {
                step: '4',
                title: 'Sipariş Verin',
                description: 'Ödeme yapın ve canvas tablonuzu bekleyin'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-accent-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
              Fotoğraflarınızı Sanat Eserine Dönüştürün
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Özel canvas tablonuzu hemen sipariş edin
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Canvas Tablo Oluştur
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Canvas 