"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    payment: 'Kapıda Ödeme',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cart');
      setCart(stored ? JSON.parse(stored) : []);
    }
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.removeItem('cart');
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Siparişiniz Alındı</h1>
        <p className="mb-6">Teşekkürler, {form.name}! Siparişiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
        <Link href="/" className="btn-primary px-8 py-3 text-lg">Anasayfaya Dön</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Siparişi Tamamla</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <label className="block font-medium mb-2">Ad Soyad</label>
          <input name="name" value={form.name} onChange={handleChange} required className="input-field w-full" />
        </div>
        <div>
          <label className="block font-medium mb-2">Telefon</label>
          <input name="phone" value={form.phone} onChange={handleChange} required className="input-field w-full" />
        </div>
        <div>
          <label className="block font-medium mb-2">E-posta</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field w-full" />
        </div>
        <div>
          <label className="block font-medium mb-2">Adres</label>
          <textarea name="address" value={form.address} onChange={handleChange} required className="input-field w-full" rows={3} />
        </div>
        <div>
          <label className="block font-medium mb-2">Ödeme Yöntemi</label>
          <select name="payment" value={form.payment} onChange={handleChange} className="input-field w-full">
            <option>Kapıda Ödeme</option>
          </select>
        </div>
        <button type="submit" className="btn-primary w-full py-3 text-lg">Siparişi Onayla</button>
      </form>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Sipariş Özeti</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Sepetiniz boş.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li key={item.id} className="border rounded p-3">
                <div><b>Ebat:</b> {item.ebat}</div>
                <div><b>Adet:</b> {item.adet}</div>
                {item.not && <div><b>Not:</b> {item.not}</div>}
                {item.images && item.images.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {item.images.map((img: string, i: number) => (
                      <img key={i} src={img} alt="Yüklenen fotoğraf" className="w-12 h-12 object-cover rounded border" />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 