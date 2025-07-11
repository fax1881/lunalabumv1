"use client"

import React, { useState, useEffect } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useRouter } from "next/navigation";

const IBAN = "TR00 0000 0000 0000 0000 0000 00";

function generateRef() {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
}

const SiparisPage = () => {
  const [adet, setAdet] = useState(1);
  const [adresler, setAdresler] = useState<any[]>([]);
  const [adresIdx, setAdresIdx] = useState(0);
  const [siparisTamam, setSiparisTamam] = useState(false);
  const [refNo, setRefNo] = useState("");
  const router = useRouter();

  useEffect(() => {
    setAdresler(JSON.parse(localStorage.getItem("adresler") || "[]"));
  }, []);

  const handleSiparis = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = generateRef();
    setRefNo(ref);
    setSiparisTamam(true);
    // Siparişi kaydet
    const siparisler = JSON.parse(localStorage.getItem("siparisler") || "[]");
    siparisler.push({
      urun: "Bez Baskı",
      adet,
      adres: adresler[adresIdx],
      referans: ref,
      tarih: new Date().toLocaleDateString(),
      kargo: "",
    });
    localStorage.setItem("siparisler", JSON.stringify(siparisler));
  };

  if (siparisTamam) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center py-8">
          <div className="bg-white rounded-lg shadow p-8 w-full max-w-md text-center">
            <h1 className="text-2xl font-semibold mb-4 text-primary-700">Siparişiniz Alındı!</h1>
            <div className="mb-4">Lütfen aşağıdaki IBAN'a ödemenizi yapınız.</div>
            <div className="mb-2 font-medium">IBAN:</div>
            <div className="mb-4 text-lg font-mono bg-gray-100 rounded p-2 select-all">{IBAN}</div>
            <div className="mb-2 font-medium">Açıklama (Referans No):</div>
            <div className="mb-4 text-lg font-mono bg-gray-100 rounded p-2 select-all">{refNo}</div>
            <div className="text-gray-500 text-sm mb-4">Her sipariş için farklı bir referans numarası üretilir. Lütfen açıklama kısmına bu numarayı yazınız.</div>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded" onClick={() => router.push("/hesap")}>Hesabım</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-semibold mb-6 text-primary-700">Sipariş Oluştur</h1>
        <form onSubmit={handleSiparis} className="bg-white rounded-lg shadow p-8 w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Adet</label>
            <input type="number" min={1} value={adet} onChange={e => setAdet(Number(e.target.value))} className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Adres Seç</label>
            <select value={adresIdx} onChange={e => setAdresIdx(Number(e.target.value))} className="w-full border rounded px-3 py-2">
              {adresler.length === 0 ? (
                <option>Adres ekleyin</option>
              ) : (
                adresler.map((a, idx) => (
                  <option key={idx} value={idx}>{a.ad} - {a.adres}, {a.ilce}/{a.il}</option>
                ))
              )}
            </select>
          </div>
          <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded font-medium">Siparişi Tamamla</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SiparisPage; 