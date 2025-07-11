'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  CreditCard,
  Truck,
  Shield,
  Heart
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Fotoğraf Baskısı', href: '/fotograf-baskisi' },
      { name: 'Fotokitap', href: '/fotokitap' },
      { name: 'Canvas Tablo', href: '/canvas' },
      { name: 'Foto Takvim', href: '/takvim' },
      { name: 'Pola Kart', href: '/pola-kart' },
      { name: 'Foto Magnet', href: '/foto-magnet' },
      { name: 'Çerçeveli Fotoğraf', href: '/cerceveli-fotograf' },
    ],
    services: [
      { name: 'Kurumsal Hizmetler', href: '/kurumsal' },
      { name: 'Toplu Sipariş', href: '/toplu-siparis' },
      { name: 'Özel Tasarım', href: '/ozel-tasarim' },
      { name: 'Fotoğraf Düzenleme', href: '/fotograf-duzenleme' },
      { name: 'Acil Baskı', href: '/acil-baski' },
    ],
    support: [
      { name: 'Sıkça Sorulan Sorular', href: '/sss' },
      { name: 'Kargo Takip', href: '/kargo-takip' },
      { name: 'İade ve Değişim', href: '/iade-degisim' },
      { name: 'Gizlilik Politikası', href: '/gizlilik' },
      { name: 'Kullanım Şartları', href: '/kullanim-sartlari' },
    ],
    company: [
      { name: 'Hakkımızda', href: '/hakkimizda' },
      { name: 'İletişim', href: '/iletisim' },
      { name: 'Kariyer', href: '/kariyer' },
      { name: 'Blog', href: '/blog' },
      { name: 'Basın', href: '/basin' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/furkanbxy', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/furkanbxy', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/furkanbxy', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/furkanbxy', label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold text-gradient mb-4 block">
              FurkanBxy
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Türkiye'nin en güvenilir fotoğraf baskı platformu. Orijinal Fujifilm kağıdı, 
              profesyonel baskı kalitesi ve hızlı kargo ile anılarınızı ölümsüzleştirin.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="text-primary-400" />
                <span>+90 0545 673 4497</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-primary-400" />
                <span>info@furkanbxy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="text-primary-400" />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock size={18} className="text-primary-400" />
                <span>7/24 Online Hizmet</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ürünler</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetler</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destek</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <Truck className="text-primary-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Aynı Gün Kargo</h4>
                <p className="text-sm text-gray-400">Saat 15:00'a kadar</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-center md:text-left">
              <Shield className="text-primary-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Güvenli Ödeme</h4>
                <p className="text-sm text-gray-400">256-bit SSL koruması</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-center md:text-left">
              <CreditCard className="text-primary-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Taksitli Ödeme</h4>
                <p className="text-sm text-gray-400">9 taksit imkanı</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-center md:text-left">
              <Heart className="text-primary-400 text-2xl" />
              <div>
                <h4 className="font-semibold">Müşteri Memnuniyeti</h4>
                <p className="text-sm text-gray-400">%99.8 memnuniyet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} FurkanBxy. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/gizlilik" className="text-gray-400 hover:text-white transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-white transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cerez-politikasi" className="text-gray-400 hover:text-white transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 