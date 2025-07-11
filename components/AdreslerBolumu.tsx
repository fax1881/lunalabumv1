'use client'

import React, { useState, useEffect } from 'react';

export default function AdreslerBolumu() {
  const [adresler, setAdresler] = useState<any[]>([]);
  const [form, setForm] = useState({ ad: '', adres: '', il: '', ilce: '', posta: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetch('/api/adresler')
      .then(res => res.json())
      .then(data => {
        setAdresler(data);
        setLoading(false);
      });
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/adresler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        const yeni = await res.json();
        setAdresler([...adresler, yeni]);
        setForm({ ad: '', adres: '', il: '', ilce: '', posta: '' });
        setSuccess('Adres eklendi!');
      } else {
        const data = await res.json();
        setError(data.error || 'Adres eklenemedi.');
      }
    } catch {
      setError('Sunucu hatası.');
    }
  };

  const handleDelete = async (id: number) => {
    setError('');
    setSuccess('');
    try {
      const res = await fetch(`/api/adresler?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setAdresler(adresler.filter(a => a.id !== id));
        setSuccess('Adres silindi!');
      } else {
        const data = await res.json();
        setError(data.error || 'Adres silinemedi.');
      }
    } catch {
      setError('Sunucu hatası.');
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded shadow p-6 min-h-[200px] mb-8">
      <h2 className="text-lg font-semibold mb-4">Adreslerim</h2>
      {loading ? (
        <p className="text-gray-500">Yükleniyor...</p>
      ) : adresler.length === 0 ? (
        <p className="text-gray-500">Henüz adres eklenmedi.</p>
      ) : (
        <ul className="mb-6">
          {adresler.map((a, idx) => (
            <li key={a.id} className="mb-2 border-b pb-2 flex justify-between items-center">
              <div>
                <div className="font-medium">{a.ad}</div>
                <div className="text-sm text-gray-600">{a.adres}, {a.ilce}/{a.il} ({a.posta})</div>
              </div>
              <button onClick={() => handleDelete(a.id)} className="text-red-500 hover:underline text-sm">Sil</button>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <input name="ad" value={form.ad} onChange={handleChange} placeholder="Adres Adı (Ev, Ofis vb.)" className="border rounded px-3 py-2" required />
        <input name="adres" value={form.adres} onChange={handleChange} placeholder="Adres" className="border rounded px-3 py-2" required />
        <input name="il" value={form.il} onChange={handleChange} placeholder="İl" className="border rounded px-3 py-2" required />
        <input name="ilce" value={form.ilce} onChange={handleChange} placeholder="İlçe" className="border rounded px-3 py-2" required />
        <input name="posta" value={form.posta} onChange={handleChange} placeholder="Posta Kodu" className="border rounded px-3 py-2" required />
        <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white rounded px-4 py-2 col-span-1 md:col-span-2 font-medium">
          Adres Ekle
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {success && <div className="text-green-600 mt-2">{success}</div>}
    </div>
  );
} 