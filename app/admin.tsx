"use client"

import React, { useEffect, useState } from "react";

const IBAN = "TR00 0000 0000 0000 0000 0000 00";

const AdminPanel = () => {
  const [siparisler, setSiparisler] = useState<any[]>([]);
  const [kargoInput, setKargoInput] = useState<{ [key: number]: string }>({});
  const [odemeDurum, setOdemeDurum] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem("siparisler") || "[]");
    setSiparisler(s);
    // Ödeme ve kargo inputlarını başlat
    const odeme: any = {};
    const kargo: any = {};
    s.forEach((sip: any, idx: number) => {
      odeme[idx] = !!sip.odeme;
      kargo[idx] = sip.kargo || "";
    });
    setOdemeDurum(odeme);
    setKargoInput(kargo);
  }, []);

  const handleOdemeChange = (idx: number, checked: boolean) => {
    const yeni = [...siparisler];
    yeni[idx].odeme = checked;
    setSiparisler(yeni);
    setOdemeDurum({ ...odemeDurum, [idx]: checked });
    localStorage.setItem("siparisler", JSON.stringify(yeni));
  };

  const handleKargoKaydet = (idx: number) => {
    const yeni = [...siparisler];
    yeni[idx].kargo = kargoInput[idx];
    setSiparisler(yeni);
    localStorage.setItem("siparisler", JSON.stringify(yeni));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-2xl font-bold mb-8 text-center text-primary-700">Admin Paneli</h1>
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Tüm Siparişler</h2>
        {siparisler.length === 0 ? (
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
                <tr key={idx} className="border-b">
                  <td className="p-2 border">{idx + 1}</td>
                  <td className="p-2 border">{s.tarih}</td>
                  <td className="p-2 border">{s.urun}</td>
                  <td className="p-2 border">{s.adet}</td>
                  <td className="p-2 border text-xs">{s.adres ? `${s.adres.ad}, ${s.adres.adres}, ${s.adres.ilce}/${s.adres.il}` : "-"}</td>
                  <td className="p-2 border font-mono">{s.referans}</td>
                  <td className="p-2 border text-center">
                    <input type="checkbox" checked={!!odemeDurum[idx]} onChange={e => handleOdemeChange(idx, e.target.checked)} />
                  </td>
                  <td className="p-2 border">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={kargoInput[idx] || ""}
                        onChange={e => setKargoInput({ ...kargoInput, [idx]: e.target.value })}
                        className="border rounded px-2 py-1 w-32"
                        placeholder="Kargo No"
                      />
                      <button
                        className="bg-primary-600 hover:bg-primary-700 text-white px-2 py-1 rounded text-xs"
                        onClick={() => handleKargoKaydet(idx)}
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
    </div>
  );
};

export default AdminPanel; 