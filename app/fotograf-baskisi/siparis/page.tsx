"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

const EBATLAR = [
  '10x15 cm',
  '13x18 cm',
  '15x21 cm',
  '20x30 cm',
  '30x40 cm',
];

export default function FotografBaskisiSiparis() {
  const router = useRouter();
  const [ebat, setEbat] = useState(EBATLAR[0]);
  const [adet, setAdet] = useState(1);
  const [not, setNot] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Fotoğrafları base64'e çevir
    let images: string[] = [];
    if (files && files.length > 0) {
      images = await Promise.all(
        Array.from(files).map(file => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );
    }
    // Sepet verisini oluştur
    const newItem = {
      id: uuidv4(),
      ebat,
      adet,
      not,
      images,
      createdAt: Date.now(),
    };
    // localStorage'dan mevcut sepeti al
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    router.push('/sepet');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Fotoğraf Baskısı Sipariş Formu</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <label className="block font-medium mb-2">Ebat Seçimi</label>
          <select value={ebat} onChange={e => setEbat(e.target.value)} className="input-field">
            {EBATLAR.map(e => <option key={e}>{e}</option>)}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-2">Adet</label>
          <input type="number" min={1} value={adet} onChange={e => setAdet(Number(e.target.value))} className="input-field w-32" />
        </div>
        <div>
          <label className="block font-medium mb-2">Fotoğraf Yükle</label>
          <input type="file" multiple accept="image/*" onChange={e => setFiles(e.target.files)} className="input-field" />
        </div>
        <div>
          <label className="block font-medium mb-2">Sipariş Notu (isteğe bağlı)</label>
          <textarea value={not} onChange={e => setNot(e.target.value)} className="input-field" rows={3} placeholder="Eklemek istediğiniz not..." />
        </div>
        <button type="submit" className="btn-primary w-full py-3 text-lg">Sepete Ekle</button>
      </form>
    </div>
  );
} 