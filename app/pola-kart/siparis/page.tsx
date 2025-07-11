"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EBATLAR = ['9x11 cm', '6x9 cm', '9x9 cm'];

export default function PolaKartSiparis() {
  const router = useRouter();
  const [ebat, setEbat] = useState(EBATLAR[0]);
  const [adet, setAdet] = useState(1);
  const [not, setNot] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/sepet');
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Pola Kart Sipariş Formu</h1>
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