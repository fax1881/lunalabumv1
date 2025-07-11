import React from 'react'
import Link from 'next/link'

const fakeOrders = [
  { id: 'ORD-001', date: '2024-05-01', status: 'Kargoya Verildi', total: '249,90 TL' },
  { id: 'ORD-002', date: '2024-04-15', status: 'Hazırlanıyor', total: '89,90 TL' },
]

const Siparislerim = () => {
  // Basit örnek: Giriş kontrolü (gerçek auth ile değiştirilebilir)
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h2 className="text-2xl font-semibold mb-4">Siparişlerim</h2>
          <p className="mb-4 text-gray-600">Siparişlerinizi görüntülemek için giriş yapmalısınız.</p>
          <Link href="/giris" className="btn-primary">Giriş Yap</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light mb-8">Siparişlerim</h2>
        <div className="bg-white rounded-lg shadow p-6">
          {fakeOrders.length === 0 ? (
            <p className="text-gray-600">Henüz bir siparişiniz yok.</p>
          ) : (
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="bg-primary-100">
                  <th className="px-4 py-2">Sipariş No</th>
                  <th className="px-4 py-2">Tarih</th>
                  <th className="px-4 py-2">Durum</th>
                  <th className="px-4 py-2">Tutar</th>
                </tr>
              </thead>
              <tbody>
                {fakeOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="px-4 py-2 font-medium">{order.id}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Siparislerim 