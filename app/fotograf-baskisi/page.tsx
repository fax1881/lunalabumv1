'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Printer, 
  Image, 
  Users, 
  FileImage, 
  Palette,
  CheckCircle,
  Star,
  Truck,
  Shield,
  Clock
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

const FotografBaskisi = () => {
  const products = [
    {
      id: 1,
      name: 'Fotoğraf Baskısı',
      description: 'Orijinal Fujifilm fotoğraf kağıdı ile yüksek kaliteli baskı',
      sizes: ['9x13 cm', '10x15 cm', '13x18 cm', '15x21 cm', '20x30 cm'],
      prices: ['0.50₺', '0.75₺', '1.25₺', '1.75₺', '3.50₺'],
      features: ['Orijinal Fujifilm kağıdı', 'Profesyonel baskı', 'Hızlı teslimat'],
      image: '/images/fotograf-baskisi.jpg'
    },
    {
      id: 2,
      name: 'Poster Baskı',
      description: 'Büyük boyutlu poster baskı hizmeti',
      sizes: ['A3', 'A2', 'A1', 'A0'],
      prices: ['15₺', '25₺', '45₺', '85₺'],
      features: ['Yüksek çözünürlük', 'Canlı renkler', 'Dayanıklı kağıt'],
      image: '/images/poster-baski.jpg'
    },
    {
      id: 3,
      name: 'Bez Üzerine Baskı',
      description: 'Kumaş üzerine özel baskı teknolojisi',
      sizes: ['50x70 cm', '70x100 cm', '100x150 cm'],
      prices: ['45₺', '75₺', '150₺'],
      features: ['Su geçirmez', 'Yıkanabilir', 'Uzun ömürlü'],
      image: '/images/bez-baski.jpg'
    },
    {
      id: 4,
      name: 'Vesikalık & Biyometrik',
      description: 'Resmi belgeler için uygun fotoğraf baskısı',
      sizes: ['4.5x6 cm', '3x4 cm'],
      prices: ['2₺', '1.50₺'],
      features: ['Resmi belge uyumlu', 'Hızlı baskı', '6 adet'],
      image: '/images/vesikalik.jpg'
    },
    {
      id: 5,
      name: 'Fotoblok',
      description: 'Ahşap blok üzerine fotoğraf baskısı',
      sizes: ['10x15 cm', '15x21 cm', '20x30 cm'],
      prices: ['25₺', '35₺', '55₺'],
      features: ['Doğal ahşap', 'Özel kaplama', 'Duvara asılabilir'],
      image: '/images/fotoblok.jpg'
    }
  ]

  const features = [
    {
      icon: Printer,
      title: 'Orijinal Fujifilm Kağıdı',
      description: 'En yüksek kalitede fotoğraf baskısı için özel kağıt'
    },
    {
      icon: Truck,
      title: 'Aynı Gün Kargo',
      description: 'Saat 15:00\'a kadar verilen siparişler aynı gün kargoda'
    },
    {
      icon: Shield,
      title: 'Kalite Garantisi',
      description: 'Memnun kalmazsanız ücretsiz yeniden baskı'
    },
    {
      icon: Clock,
      title: 'Hızlı İşlem',
      description: 'Ortalama 2-3 saat içinde baskı tamamlanır'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-light mb-6">
              Fotoğraf Baskısı
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-100">
              Orijinal Fujifilm fotoğraf kağıdı ile profesyonel kalitede baskı
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Orijinal Fujifilm kağıdı</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Aynı gün kargo</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} />
                <span>Kalite garantisi</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <Link href="/fotograf-baskisi/editor" className="btn-primary px-8 py-4 text-lg">Siparişe Başla</Link>
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
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary-600 text-2xl" />
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
              Fotoğraf Baskı Ürünleri
            </h2>
            <p className="text-gray-600 text-lg">
              İhtiyacınıza uygun fotoğraf baskı seçenekleri
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
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Image className="text-primary-600 text-4xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Boyutlar ve Fiyatlar:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {product.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="flex justify-between">
                          <span>{size}</span>
                          <span>{product.prices[sizeIndex]}</span>
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

                  <div className="mt-4 flex justify-center">
                    <a
                      href={`/fotograf-baskisi/editor?product=${product.id}`}
                      className="btn-primary px-6 py-2 text-white rounded shadow hover:bg-primary-700 transition-colors"
                    >
                      Sipariş Ver
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat Tablosu ve Bilgilendirici Bölümler */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">Fotoğraf Baskı Fiyatları</h2>
            <p className="text-gray-600 text-lg">Adet ve ebatlara göre avantajlı fiyatlar</p>
          </motion.div>

          {/* Standart Ebatlar */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">Standart Ebatlar</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
                <thead className="bg-primary-100">
                  <tr>
                    <th className="px-4 py-2">Ebat</th>
                    <th className="px-4 py-2">1–49 Adet</th>
                    <th className="px-4 py-2">50–199 Adet</th>
                    <th className="px-4 py-2">200–499 Adet</th>
                    <th className="px-4 py-2">500+ Adet</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-2 font-medium">9x13</td>
                    <td className="px-4 py-2">7,90 TL</td>
                    <td className="px-4 py-2">7,20 TL</td>
                    <td className="px-4 py-2">6,70 TL</td>
                    <td className="px-4 py-2">6,30 TL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">10x15</td>
                    <td className="px-4 py-2">8,90 TL</td>
                    <td className="px-4 py-2">8,10 TL</td>
                    <td className="px-4 py-2">7,50 TL</td>
                    <td className="px-4 py-2">7,10 TL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">13x18</td>
                    <td className="px-4 py-2">14,90 TL</td>
                    <td className="px-4 py-2">13,50 TL</td>
                    <td className="px-4 py-2">12,60 TL</td>
                    <td className="px-4 py-2">11,80 TL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">15x21</td>
                    <td className="px-4 py-2">16,90 TL</td>
                    <td className="px-4 py-2">15,40 TL</td>
                    <td className="px-4 py-2">14,20 TL</td>
                    <td className="px-4 py-2">13,50 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Kare Ebatlar */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">Kare Ebatlar</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
                <thead className="bg-primary-100">
                  <tr>
                    <th className="px-4 py-2">Ebat</th>
                    <th className="px-4 py-2">1–49 Adet</th>
                    <th className="px-4 py-2">50–199 Adet</th>
                    <th className="px-4 py-2">200–499 Adet</th>
                    <th className="px-4 py-2">500+ Adet</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-2 font-medium">10x10</td>
                    <td className="px-4 py-2">8,90 TL</td>
                    <td className="px-4 py-2">8,10 TL</td>
                    <td className="px-4 py-2">7,50 TL</td>
                    <td className="px-4 py-2">7,10 TL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">13x13</td>
                    <td className="px-4 py-2">12,90 TL</td>
                    <td className="px-4 py-2">11,70 TL</td>
                    <td className="px-4 py-2">11,00 TL</td>
                    <td className="px-4 py-2">10,40 TL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">15x15</td>
                    <td className="px-4 py-2">15,90 TL</td>
                    <td className="px-4 py-2">14,50 TL</td>
                    <td className="px-4 py-2">13,40 TL</td>
                    <td className="px-4 py-2">12,70 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Büyük Ebatlar */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-2">Büyük Ebatlar</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
                <thead className="bg-primary-100">
                  <tr>
                    <th className="px-4 py-2">Ebat</th>
                    <th className="px-4 py-2">1–3 Adet</th>
                    <th className="px-4 py-2">4–10 Adet</th>
                    <th className="px-4 py-2">10+ Adet</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr><td className="px-4 py-2 font-medium">18x24 cm</td><td className="px-4 py-2">39,90 TL</td><td className="px-4 py-2">36,30 TL</td><td className="px-4 py-2">33,60 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">20x30 cm</td><td className="px-4 py-2">49,90 TL</td><td className="px-4 py-2">45,00 TL</td><td className="px-4 py-2">42,00 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">24x30 cm</td><td className="px-4 py-2">59,90 TL</td><td className="px-4 py-2">54,50 TL</td><td className="px-4 py-2">49,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">30x30 cm</td><td className="px-4 py-2">69,90 TL</td><td className="px-4 py-2">63,00 TL</td><td className="px-4 py-2">58,00 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">30x40 cm</td><td className="px-4 py-2">89,90 TL</td><td className="px-4 py-2">81,00 TL</td><td className="px-4 py-2">74,00 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">30x45 cm</td><td className="px-4 py-2">109,90 TL</td><td className="px-4 py-2">99,90 TL</td><td className="px-4 py-2">92,50 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">40x60 cm</td><td className="px-4 py-2">199,90 TL</td><td className="px-4 py-2">179,90 TL</td><td className="px-4 py-2">169,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">50x50 cm</td><td className="px-4 py-2">199,90 TL</td><td className="px-4 py-2">179,90 TL</td><td className="px-4 py-2">169,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">50x75 cm</td><td className="px-4 py-2">299,90 TL</td><td className="px-4 py-2">269,90 TL</td><td className="px-4 py-2">249,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">60x90 cm</td><td className="px-4 py-2">349,90 TL</td><td className="px-4 py-2">319,90 TL</td><td className="px-4 py-2">299,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">75x100 cm</td><td className="px-4 py-2">549,90 TL</td><td className="px-4 py-2">499,90 TL</td><td className="px-4 py-2">459,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">100x100 cm</td><td className="px-4 py-2">699,90 TL</td><td className="px-4 py-2">639,90 TL</td><td className="px-4 py-2">589,90 TL</td></tr>
                  <tr><td className="px-4 py-2 font-medium">100x150 cm</td><td className="px-4 py-2">999,90 TL</td><td className="px-4 py-2">899,90 TL</td><td className="px-4 py-2">839,90 TL</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bilgilendirici Kutular */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2">Mat / Parlak Fotoğraf Kağıdı Farkı</h4>
              <p className="text-gray-600 text-sm">Fotoğraf baskılarımızın tamamı <b>Fujifilm Crytal Archive Paper</b>'a basılmaktadır ve mat ile parlak fotoğraf kağıdı arasında kalite olarak hiçbir fark yoktur. Parlak baskıda fotoğraflarınızın renkleri daha canlı, mat baskıda ise daha net ve profesyonel bir görünüm olur.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2">Fotoğraf Baskı Kalitesi</h4>
              <p className="text-gray-600 text-sm">Tüm baskılarımızda geleneksel gerçek fotoğraf kağıdı kullanılır. Renklerin 300 yıl solmama garantisi vardır. Netbaski.com gibi biz de <b>Fujifilm fotoğraf kağıdı</b> kullanıyoruz. Kalite önemlidir!</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2">Neden Fotoğraf Baskısı?</h4>
              <p className="text-gray-600 text-sm">Fotoğraflarınız dijital ortamda kaybolmasın, kaliteli baskı ile anılarınızı ölümsüzleştirin. Gelecek nesillere aktarılacak değerli hatıralar için baskı yaptırın.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2">Telefondan Baskı</h4>
              <p className="text-gray-600 text-sm">Telefondan kolayca fotoğraf baskısı siparişi verebilirsiniz. Ebatınızı seçin, fotoğraflarınızı yükleyin, siparişinizi tamamlayın.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2">Aynı Gün Kargo</h4>
              <p className="text-gray-600 text-sm">Saat 13.00'a kadar verilen siparişler aynı gün kargoya verilir. 900 TL ve üzeri alışverişlerde ücretsiz kargo fırsatı!</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="text-lg font-semibold mb-2">Güvenli Alışveriş</h4>
              <p className="text-gray-600 text-sm">Tüm ödemeleriniz güvenli altyapı ile korunur. Memnuniyet garantisi ile alışveriş yapın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Nasıl Çalışır?
            </h2>
            <p className="text-gray-600 text-lg">
              3 basit adımda fotoğraflarınızı basıyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Fotoğraflarınızı Yükleyin',
                description: 'Yüksek kaliteli fotoğraflarınızı sisteme yükleyin'
              },
              {
                step: '2',
                title: 'Boyut ve Adet Seçin',
                description: 'İstediğiniz boyut ve adet miktarını belirleyin'
              },
              {
                step: '3',
                title: 'Siparişinizi Tamamlayın',
                description: 'Ödeme yapın ve fotoğraflarınızı bekleyin'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-16 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Fotoğraflarınızı Ölümsüzleştirin
            </h2>
            <p className="text-xl mb-8 text-secondary-100">
              Hemen sipariş verin, aynı gün kargoda
            </p>
            <button
              className="bg-white text-secondary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              onClick={() => window.open('https://www.netbaski.com/printing/fotograf-baski/10x15/editor?ws=b2867f6e320a1c379b6094e05ff92e63&q=1&oq=0', '_blank')}
            >
              Siparişe Başla
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FotografBaskisi 