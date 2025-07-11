"use client"

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TABS = [
  { key: "adresler", label: "Adreslerim" },
  { key: "siparisler", label: "Siparişlerim" },
  { key: "tasarimlar", label: "Tasarimlarım" },
  { key: "bilgiler", label: "Kişisel Bilgilerim" },
];

const getAdresler = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("adresler") || "[]");
  } catch {
    return [];
  }
};

const setAdresler = (adresler: any[]) => {
  localStorage.setItem("adresler", JSON.stringify(adresler));
};

const getSiparisler = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("siparisler") || "[]");
  } catch {
    return [];
  }
};

const setSiparisler = (siparisler: any[]) => {
  localStorage.setItem("siparisler", JSON.stringify(siparisler));
};

const getTasarimlar = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("tasarimlar") || "[]");
  } catch {
    return [];
  }
};

const setTasarimlar = (tasarimlar: any[]) => {
  localStorage.setItem("tasarimlar", JSON.stringify(tasarimlar));
};

const HesapPage = () => {
  const [activeTab, setActiveTab] = useState("adresler");
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);
  const [adresler, setAdreslerState] = useState<any[]>([]);
  const [adresForm, setAdresForm] = useState({ ad: "", adres: "", il: "", ilce: "", posta: "" });
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [siparisler, setSiparislerState] = useState<any[]>([]);
  const [tasarimlar, setTasarimlarState] = useState<any[]>([]);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
    setAdreslerState(getAdresler());
    setSiparislerState(getSiparisler());
    setTasarimlarState(getTasarimlar());
  }, []);

  const handleAdresFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdresForm({ ...adresForm, [e.target.name]: e.target.value });
  };

  const handleAdresEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adresForm.ad || !adresForm.adres || !adresForm.il || !adresForm.ilce || !adresForm.posta) return;
    let yeniAdresler = [...adresler];
    if (editIdx !== null) {
      yeniAdresler[editIdx] = { ...adresForm };
    } else {
      yeniAdresler.push({ ...adresForm });
    }
    setAdreslerState(yeniAdresler);
    setAdresler(yeniAdresler);
    setAdresForm({ ad: "", adres: "", il: "", ilce: "", posta: "" });
    setEditIdx(null);
  };

  const handleAdresDuzenle = (idx: number) => {
    setAdresForm(adresler[idx]);
    setEditIdx(idx);
  };

  const handleAdresSil = (idx: number) => {
    const yeniAdresler = adresler.filter((_, i) => i !== idx);
    setAdreslerState(yeniAdresler);
    setAdresler(yeniAdresler);
    setEditIdx(null);
    setAdresForm({ ad: "", adres: "", il: "", ilce: "", posta: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-8">
        <h1 className="text-2xl font-semibold mb-6 text-primary-700">Hesabım</h1>
        {user && (
          <div className="mb-6 text-center">
            <div className="text-lg font-medium">{user.name}</div>
            <div className="text-gray-500">{user.email}</div>
          </div>
        )}
        <div className="flex gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-t font-medium border-b-2 transition-colors ${activeTab === tab.key ? "border-primary-600 text-primary-700 bg-white" : "border-transparent text-gray-500 bg-gray-100"}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="w-full max-w-2xl bg-white rounded-b shadow p-6 min-h-[200px]">
          {activeTab === "adresler" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Adreslerim</h2>
              {adresler.length === 0 && <p className="text-gray-500 mb-4">Henüz adres eklenmedi.</p>}
              <ul className="mb-6">
                {adresler.map((a, idx) => (
                  <li key={idx} className="mb-2 border-b pb-2 flex justify-between items-center">
                    <div>
                      <div className="font-medium">{a.ad}</div>
                      <div className="text-sm text-gray-600">{a.adres}, {a.ilce}/{a.il} ({a.posta})</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-primary-600 hover:underline" onClick={() => handleAdresDuzenle(idx)}>Düzenle</button>
                      <button className="text-red-500 hover:underline" onClick={() => handleAdresSil(idx)}>Sil</button>
                    </div>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleAdresEkle} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <input name="ad" value={adresForm.ad} onChange={handleAdresFormChange} placeholder="Adres Adı (Ev, Ofis vb.)" className="border rounded px-3 py-2" required />
                <input name="adres" value={adresForm.adres} onChange={handleAdresFormChange} placeholder="Adres" className="border rounded px-3 py-2" required />
                <input name="il" value={adresForm.il} onChange={handleAdresFormChange} placeholder="İl" className="border rounded px-3 py-2" required />
                <input name="ilce" value={adresForm.ilce} onChange={handleAdresFormChange} placeholder="İlçe" className="border rounded px-3 py-2" required />
                <input name="posta" value={adresForm.posta} onChange={handleAdresFormChange} placeholder="Posta Kodu" className="border rounded px-3 py-2" required />
                <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white rounded px-4 py-2 col-span-1 md:col-span-2 font-medium">
                  {editIdx !== null ? "Adresi Güncelle" : "Adres Ekle"}
                </button>
              </form>
            </div>
          )}
          {activeTab === "siparisler" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Siparişlerim</h2>
              {siparisler.length === 0 ? (
                <p className="text-gray-500">Henüz siparişiniz yok.</p>
              ) : (
                <ul className="space-y-4">
                  {siparisler.map((s, idx) => (
                    <li key={idx} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <div className="font-medium">Sipariş #{s.referans}</div>
                        <div className="text-sm text-gray-600">Tarih: {s.tarih}</div>
                        <div className="text-sm text-gray-600">Ürün: {s.urun}</div>
                        <div className="text-sm text-gray-600">Adet: {s.adet}</div>
                      </div>
                      <div>
                        <div className="text-sm">Referans No: <span className="font-mono">{s.referans}</span></div>
                        <div className="text-sm">Kargo Takip: <span className="font-mono">{s.kargo || "-"}</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {activeTab === "tasarimlar" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Tasarimlarım</h2>
              {tasarimlar.length === 0 ? (
                <p className="text-gray-500">Henüz tasarım kaydedilmedi.</p>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tasarimlar.map((t, idx) => (
                    <li key={idx} className="border rounded p-4 flex flex-col items-center">
                      <img src={t.image} alt={`Tasarım ${idx + 1}`} className="max-h-40 mb-2 rounded shadow" />
                      <div className="text-sm text-gray-600 mb-1">{t.name || `Tasarım ${idx + 1}`}</div>
                      <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1 rounded text-sm">İndir</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {activeTab === "bilgiler" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Kişisel Bilgilerim</h2>
              <div className="mb-2">Ad Soyad: <span className="font-medium">{user?.name || "-"}</span></div>
              <div className="mb-2">E-posta: <span className="font-medium">{user?.email}</span></div>
              <div className="mb-2">Şifre: <span className="font-medium">********</span></div>
              <button className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded">Bilgileri Düzenle</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HesapPage; 