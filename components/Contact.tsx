'use client'

import React from 'react'

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              İletişim Formu
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Adınız Soyadınız"
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  placeholder="E-posta Adresiniz"
                  className="input-field"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Telefon Numaranız"
                  className="input-field"
                  required
                />
                <select className="input-field">
                  <option value="">Konu Seçiniz</option>
                  <option value="siparis">Sipariş Hakkında</option>
                  <option value="urun">Ürün Bilgisi</option>
                  <option value="teslimat">Teslimat</option>
                  <option value="odeme">Ödeme</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="input-field"
                required
              ></textarea>
              <button type="submit" className="btn-primary">
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              İletişim Bilgileri
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600">+90 0545 673 4497</p>
                  <p className="text-gray-600">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-posta</h3>
                  <p className="text-gray-600">furkanbxy@gmail.com</p>
                  <p className="text-gray-600">furkanbxy@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Adres</h3>
                  <p className="text-gray-600">FotoBaski Merkez</p>
                  <p className="text-gray-600">İstanbul, Türkiye</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-2xl"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
                  <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-600">Cumartesi: 09:00 - 16:00</p>
                  <p className="text-gray-600">Pazar: Kapalı</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sosyal Medya
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-600 hover:text-primary-700 text-lg">
                  Instagram
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 text-lg">
                  Facebook
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 text-lg">
                  Twitter
                </a>
                <a href="#" className="text-primary-600 hover:text-primary-700 text-lg">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 