'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  CheckCircle
} from 'lucide-react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 0545 673 4497',
      link: 'tel:+9005456734497'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@furkanbxy.com',
      link: 'mailto:info@furkanbxy.com'
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: 'İstanbul, Türkiye',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: '7/24 Online Hizmet',
      link: '#'
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
              İletişim
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-100">
              Sorularınız için bizimle iletişime geçin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <a 
                  href={info.link}
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {info.content}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-light mb-8">Mesaj Gönderin</h2>
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center space-x-2"
                >
                  <CheckCircle size={20} />
                  <span>Mesajınız başarıyla gönderildi!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0555 123 45 67"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Konu *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Konu seçin</option>
                      <option value="siparis">Sipariş Hakkında</option>
                      <option value="urun">Ürün Bilgisi</option>
                      <option value="teknik">Teknik Destek</option>
                      <option value="oneri">Öneri/Şikayet</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Mesaj Gönder</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-light mb-6">Konum</h2>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-gray-400 text-4xl mx-auto mb-2" />
                    <p className="text-gray-600">Harita burada görüntülenecek</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Hızlı İletişim</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <MessageSquare className="text-primary-600" />
                    <div>
                      <p className="font-medium">Canlı Destek</p>
                      <p className="text-sm text-gray-600">7/24 online destek</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Phone className="text-primary-600" />
                    <div>
                      <p className="font-medium">Telefon Desteği</p>
                      <p className="text-sm text-gray-600">0850 885 05 15</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <Mail className="text-primary-600" />
                    <div>
                      <p className="font-medium">E-posta</p>
                      <p className="text-sm text-gray-600">info@furkanbxy.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-600 text-lg">
              En çok sorulan sorulara hızlı cevaplar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'Siparişim ne zaman hazır olur?',
                answer: 'Saat 15:00\'a kadar verilen siparişler aynı gün kargoda gönderilir.'
              },
              {
                question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
                answer: 'Kredi kartı, havale/EFT ve kapıda ödeme seçeneklerini sunuyoruz.'
              },
              {
                question: 'İade ve değişim politikası nedir?',
                answer: 'Memnun kalmazsanız 14 gün içinde ücretsiz iade ve değişim yapabilirsiniz.'
              },
              {
                question: 'Kargo ücreti ne kadar?',
                answer: '150₺ üzeri siparişlerde kargo ücretsizdir.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Iletisim 