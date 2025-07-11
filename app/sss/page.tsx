'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronUp,
  Search,
  HelpCircle,
  Package,
  CreditCard,
  Truck,
  Shield,
  Camera,
  FileText
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const SSS = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: 'Sipariş ve Ödeme',
      icon: Package,
      questions: [
        {
          question: 'Siparişim ne zaman hazır olur?',
          answer: 'Saat 15:00\'a kadar verilen siparişler aynı gün kargoda gönderilir. Diğer siparişler ertesi gün kargoda gönderilir.'
        },
        {
          question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
          answer: 'Kredi kartı, havale/EFT, kapıda ödeme ve taksitli ödeme seçeneklerini sunuyoruz. 9 taksit imkanı mevcuttur.'
        },
        {
          question: 'Siparişimi nasıl takip edebilirim?',
          answer: 'Siparişiniz kargoya verildikten sonra size SMS ve e-posta ile kargo takip numarası gönderilir.'
        },
        {
          question: 'Minimum sipariş tutarı var mı?',
          answer: 'Minimum sipariş tutarı yoktur. İstediğiniz miktarda sipariş verebilirsiniz.'
        }
      ]
    },
    {
      title: 'Kargo ve Teslimat',
      icon: Truck,
      questions: [
        {
          question: 'Kargo ücreti ne kadar?',
          answer: '150₺ üzeri siparişlerde kargo ücretsizdir. 150₺ altı siparişlerde 25₺ kargo ücreti alınır.'
        },
        {
          question: 'Hangi kargo firmalarını kullanıyorsunuz?',
          answer: 'Yurtiçi Kargo, Aras Kargo ve MNG Kargo ile çalışıyoruz. En hızlı teslimat için size en uygun kargo firması seçilir.'
        },
        {
          question: 'Teslimat süresi ne kadar?',
          answer: 'İstanbul içi 1-2 iş günü, diğer şehirlere 2-3 iş günü içinde teslimat yapılır.'
        },
        {
          question: 'Adres değişikliği yapabilir miyim?',
          answer: 'Siparişiniz kargoya verilmeden önce adres değişikliği yapabilirsiniz. Müşteri hizmetlerimizle iletişime geçin.'
        }
      ]
    },
    {
      title: 'Ürün ve Kalite',
      icon: Camera,
      questions: [
        {
          question: 'Hangi fotoğraf kağıdı kullanıyorsunuz?',
          answer: 'Orijinal Fujifilm fotoğraf kağıdı kullanıyoruz. Bu kağıt en yüksek kalitede baskı sağlar.'
        },
        {
          question: 'Fotoğraf kalitesi nasıl olmalı?',
          answer: 'En az 300 DPI çözünürlükte, JPEG formatında fotoğraflar önerilir. Düşük kaliteli fotoğraflar baskı kalitesini etkileyebilir.'
        },
        {
          question: 'Hangi dosya formatlarını kabul ediyorsunuz?',
          answer: 'JPEG, PNG, TIFF formatlarını kabul ediyoruz. En iyi sonuç için JPEG formatını öneriyoruz.'
        },
        {
          question: 'Fotoğraf düzenleme hizmeti veriyor musunuz?',
          answer: 'Evet, profesyonel fotoğraf düzenleme hizmeti sunuyoruz. Bu hizmet için ek ücret alınır.'
        }
      ]
    },
    {
      title: 'İade ve Değişim',
      icon: Shield,
      questions: [
        {
          question: 'İade ve değişim politikası nedir?',
          answer: 'Memnun kalmazsanız 14 gün içinde ücretsiz iade ve değişim yapabilirsiniz. Ürün orijinal halinde olmalıdır.'
        },
        {
          question: 'Hatalı baskı durumunda ne yapmalıyım?',
          answer: 'Hatalı baskı durumunda fotoğraf çekip müşteri hizmetlerimizle iletişime geçin. Ücretsiz yeniden baskı yapılır.'
        },
        {
          question: 'İade kargo ücreti kim tarafından ödenir?',
          answer: 'Bizim hatamız olan durumlarda kargo ücreti firmamız tarafından ödenir.'
        },
        {
          question: 'Kişiselleştirilmiş ürünlerde iade var mı?',
          answer: 'Kişiselleştirilmiş ürünlerde sadece hatalı baskı durumunda iade kabul edilir.'
        }
      ]
    },
    {
      title: 'Hesap ve Güvenlik',
      icon: CreditCard,
      questions: [
        {
          question: 'Hesabımı nasıl oluşturabilirim?',
          answer: 'Ana sayfadaki "Yeni Kullanıcı Kaydı" butonuna tıklayarak ücretsiz hesap oluşturabilirsiniz.'
        },
        {
          question: 'Şifremi unuttum, ne yapmalıyım?',
          answer: 'Giriş sayfasındaki "Şifremi Unuttum" linkine tıklayarak yeni şifre oluşturabilirsiniz.'
        },
        {
          question: 'Ödeme bilgilerim güvende mi?',
          answer: '256-bit SSL sertifikası ile tüm ödeme bilgileriniz şifrelenerek korunur.'
        },
        {
          question: 'Sipariş geçmişimi görebilir miyim?',
          answer: 'Evet, hesabınızda tüm sipariş geçmişinizi ve durumlarını görebilirsiniz.'
        }
      ]
    }
  ]

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((item, questionIndex) => ({
      ...item,
      category: category.title,
      globalIndex: categoryIndex * 100 + questionIndex
    }))
  )

  const filteredQuestions = allQuestions.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-100">
              Aradığınız cevabı hızlıca bulun
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Sorunuzu yazın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {searchTerm ? (
            // Search Results
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-8">Arama Sonuçları</h2>
              <div className="space-y-4">
                {filteredQuestions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm border border-gray-200"
                  >
                    <button
                      onClick={() => toggleItem(item.globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.question}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                      </div>
                      {openItems.includes(item.globalIndex) ? (
                        <ChevronUp className="text-gray-400" />
                      ) : (
                        <ChevronDown className="text-gray-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openItems.includes(item.globalIndex) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-600">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            // Category View
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <category.icon className="text-primary-600 text-2xl" />
                    </div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (questionIndex * 0.05) }}
                        className="bg-white rounded-lg shadow-sm border border-gray-200"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex * 100 + questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900">{item.question}</h3>
                          {openItems.includes(categoryIndex * 100 + questionIndex) ? (
                            <ChevronUp className="text-gray-400" />
                          ) : (
                            <ChevronDown className="text-gray-400" />
                          )}
                        </button>
                        <AnimatePresence>
                          {openItems.includes(categoryIndex * 100 + questionIndex) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-gray-600">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="text-primary-600 text-5xl mx-auto mb-6" />
            <h2 className="text-3xl font-light mb-4">
              Cevabınızı Bulamadınız mı?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Müşteri hizmetlerimizle iletişime geçin, size yardımcı olalım
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/iletisim"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
              >
                İletişime Geçin
              </a>
              <a
                href="tel:08508850515"
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
              >
                +90 0545 673 4497
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SSS 