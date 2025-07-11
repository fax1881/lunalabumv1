"use client"

import React, { useEffect, useState } from "react";

const IBAN = "TR00 0000 0000 0000 0000 0000 00";

const AdminPanel = () => {
  const [siparisler, setSiparisler] = useState<any[]>([]);
  const [kargoInput, setKargoInput] = useState<{ [key: number]: string }>({});
  const [odemeDurum, setOdemeDurum] = useState<{ [key: number]: boolean }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Siparişleri API'den çek
  useEffect(() => {
    setLoading(true);
    fetch("/api/siparisler")
      .then(res => res.json())
      .then(data => {
        setSiparisler(data);
        // Ödeme ve kargo inputlarını başlat
        const odeme: any = {};
        const kargo: any = {};
        data.forEach((sip: any, idx: number) => {
          odeme[sip.id] = !!sip.odeme;
          kargo[sip.id] = sip.kargo || "";
        });
        setOdemeDurum(odeme);
        setKargoInput(kargo);
        setLoading(false);
      })
      .catch(() => {
        setError("Siparişler yüklenemedi.");
        setLoading(false);
      });
  }, []);

  // Ödeme güncelle
  const handleOdemeChange = async (id: number, checked: boolean) => {
    try {
      await fetch("/api/siparisler", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, odeme: checked })
      });
      setOdemeDurum({ ...odemeDurum, [id]: checked });
      setSiparisler(siparisler.map(s => s.id === id ? { ...s, odeme: checked } : s));
    } catch {
      setError("Ödeme durumu güncellenemedi.");
    }
  };

  // Kargo güncelle
  const handleKargoKaydet = async (id: number) => {
    try {
      await fetch("/api/siparisler", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, kargo: kargoInput[id] })
      });
      setSiparisler(siparisler.map(s => s.id === id ? { ...s, kargo: kargoInput[id] } : s));
    } catch {
      setError("Kargo numarası güncellenemedi.");
    }
  };

  // Ürünler
  const [urunler, setUrunler] = useState<any[]>([]);
  const [urunForm, setUrunForm] = useState({ name: '', description: '', price: '', image: '', category: '' });
  const [urunLoading, setUrunLoading] = useState(true);
  const [urunError, setUrunError] = useState('');
  const [urunSuccess, setUrunSuccess] = useState('');

  useEffect(() => {
    fetch('/api/urunler')
      .then(res => res.json())
      .then(data => {
        setUrunler(data);
        setUrunLoading(false);
      })
      .catch(() => {
        setUrunError('Ürünler yüklenemedi.');
        setUrunLoading(false);
      });
  }, []);

  const handleUrunFormChange = (e: any) => {
    setUrunForm({ ...urunForm, [e.target.name]: e.target.value });
  };

  const handleUrunEkle = async (e: any) => {
    e.preventDefault();
    setUrunError('');
    setUrunSuccess('');
    try {
      const res = await fetch('/api/urunler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: urunForm.name,
          description: urunForm.description,
          price: parseFloat(urunForm.price),
          image: urunForm.image,
          category: urunForm.category
        })
      });
      if (res.ok) {
        const yeni = await res.json();
        setUrunler([yeni, ...urunler]);
        setUrunForm({ name: '', description: '', price: '', image: '', category: '' });
        setUrunSuccess('Ürün eklendi!');
      } else {
        const data = await res.json();
        setUrunError(data.error || 'Ürün eklenemedi.');
      }
    } catch {
      setUrunError('Sunucu hatası.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-2xl font-bold mb-8 text-center text-primary-700">Admin Paneli</h1>
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Tüm Siparişler</h2>
        {loading ? (
          <p className="text-gray-500">Yükleniyor...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : siparisler.length === 0 ? (
          <p className="text-gray-500">Henüz sipariş yok.</p>
        ) : (
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">#</th>
                <th className="p-2 border">Tarih</th>
                <th className="p-2 border">Ürün</th>
                <th className="p-2 border">Adet</th>
                <th className="p-2 border">Adres</th>
                <th className="p-2 border">Referans</th>
                <th className="p-2 border">Ödeme</th>
                <th className="p-2 border">Kargo Takip</th>
              </tr>
            </thead>
            <tbody>
              {siparisler.map((s, idx) => (
                <tr key={s.id} className="border-b">
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">{new Date(s.tarih).toLocaleString("tr-TR")}</td>
                  <td className="p-2 border">{s.urun}</td>
                  <td className="p-2 border">{s.adet}</td>
                  <td className="p-2 border text-xs">{s.adres}</td>
                  <td className="p-2 border font-mono">{s.referans}</td>
                  <td className="p-2 border text-center">
                    <input type="checkbox" checked={!!odemeDurum[s.id]} onChange={e => handleOdemeChange(s.id, e.target.checked)} />
                  </td>
                  <td className="p-2 border">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={kargoInput[s.id] || ""}
                        onChange={e => setKargoInput({ ...kargoInput, [s.id]: e.target.value })}
                        className="border rounded px-2 py-1 w-32"
                        placeholder="Kargo No"
                      />
                      <button
                        className="bg-primary-600 hover:bg-primary-700 text-white px-2 py-1 rounded text-xs"
                        onClick={() => handleKargoKaydet(s.id)}
                      >Kaydet</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-2">IBAN Bilgisi</h2>
        <div className="font-mono bg-gray-100 rounded p-2 select-all mb-2">{IBAN}</div>
        <div className="text-gray-500 text-sm">Her siparişin açıklamasında referans numarası bulunur.</div>
      </div>
      {/* Ürün Yönetimi */}
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Ürün Yönetimi</h2>
        <form onSubmit={handleUrunEkle} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input name="name" value={urunForm.name} onChange={handleUrunFormChange} placeholder="Ürün Adı" className="border rounded px-3 py-2" required />
          <input name="price" value={urunForm.price} onChange={handleUrunFormChange} placeholder="Fiyat (₺)" type="number" step="0.01" className="border rounded px-3 py-2" required />
          <input name="image" value={urunForm.image} onChange={handleUrunFormChange} placeholder="Görsel URL" className="border rounded px-3 py-2" />
          <input name="category" value={urunForm.category} onChange={handleUrunFormChange} placeholder="Kategori" className="border rounded px-3 py-2" />
          <textarea name="description" value={urunForm.description} onChange={handleUrunFormChange} placeholder="Açıklama" className="border rounded px-3 py-2 md:col-span-2" rows={2} />
          <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white rounded px-4 py-2 font-medium md:col-span-2">Ürün Ekle</button>
        </form>
        {urunError && <div className="text-red-500 mb-2">{urunError}</div>}
        {urunSuccess && <div className="text-green-600 mb-2">{urunSuccess}</div>}
        <h3 className="text-md font-semibold mb-2 mt-6">Mevcut Ürünler</h3>
        {urunLoading ? (
          <p className="text-gray-500">Yükleniyor...</p>
        ) : urunler.length === 0 ? (
          <p className="text-gray-500">Henüz ürün yok.</p>
        ) : (
          <ul className="divide-y">
            {urunler.map((u) => (
              <li key={u.id} className="py-2 flex items-center gap-4">
                <img src={u.image || 'https://via.placeholder.com/60x60?text=Ürün'} alt={u.name} className="w-16 h-16 object-cover rounded border" />
                <div className="flex-1">
                  <div className="font-medium">{u.name}</div>
                  <div className="text-sm text-gray-600">{u.category}</div>
                  <div className="text-xs text-gray-500">{u.description}</div>
                </div>
                <div className="font-semibold text-primary-700">{u.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminPanel; 