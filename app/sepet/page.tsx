"use client";

import Link from "next/link";
import { useEffect, useState } from 'react';

export default function SepetPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      setCart(stored ? JSON.parse(stored) : []);
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem('cart');
    setCart([]);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Sepetim</h1>
        <p className="mb-8 text-gray-600">Sepetiniz şu anda boş.</p>
        <Link href="/" className="btn-primary px-8 py-3 text-lg">Alışverişe Devam Et</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Sepetim</h1>
      <button onClick={handleClear} className="mb-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Sepeti Temizle</button>
      <div className="space-y-8 mb-8">
        {cart.map((item, idx) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">
            <div className="flex gap-2 overflow-x-auto">
              {item.images && item.images.length > 0 ? (
                item.images.map((img: string, i: number) => (
                  <img key={i} src={img} alt="Yüklenen fotoğraf" className="w-24 h-24 object-cover rounded border" />
                ))
              ) : (
                <span className="text-gray-400 italic">Fotoğraf yok</span>
              )}
            </div>
            <div className="flex-1 space-y-2">
              <div><b>Ebat:</b> {item.ebat}</div>
              <div><b>Adet:</b> {item.adet}</div>
              {item.not && <div><b>Not:</b> {item.not}</div>}
              <div className="text-xs text-gray-400">Sipariş Tarihi: {new Date(item.createdAt).toLocaleString()}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/sepet/checkout" className="btn-primary px-8 py-3 text-lg">Siparişi Tamamla</Link>
      </div>
    </div>
  );
} 