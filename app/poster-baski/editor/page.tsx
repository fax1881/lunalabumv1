"use client"

import React, { useRef, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useRouter } from "next/navigation";

const BOYUTLAR = [
  { label: "A3 (29.7x42 cm)", value: "A3" },
  { label: "A2 (42x59.4 cm)", value: "A2" },
  { label: "A1 (59.4x84.1 cm)", value: "A1" },
  { label: "A0 (84.1x118.9 cm)", value: "A0" },
];

const EditorPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [adetler, setAdetler] = useState<number[]>([]);
  const [boyut, setBoyut] = useState<string>(BOYUTLAR[0].value);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const arr = Array.from(files);
      Promise.all(
        arr.map(
          (file) =>
            new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = (ev) => resolve(ev.target?.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(file);
            })
        )
      ).then((result) => {
        setImages((prev) => [...prev, ...result]);
        setAdetler((prev) => [...prev, ...Array(result.length).fill(1)]);
      });
    }
  };

  const handleAdetChange = (idx: number, value: number) => {
    setAdetler((prev) => prev.map((a, i) => (i === idx ? value : a)));
  };

  const handleRemove = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setAdetler((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleTasarimKaydet = () => {
    if (images.length === 0) return;
    const tasarimlar = JSON.parse(localStorage.getItem("tasarimlar") || "[]");
    images.forEach((img, idx) => {
      tasarimlar.push({ image: img, name: `Poster Tasarımı ${tasarimlar.length + 1}` });
    });
    localStorage.setItem("tasarimlar", JSON.stringify(tasarimlar));
    alert("Tasarım(lar) kaydedildi!");
  };

  const handleSipariseEkle = () => {
    router.push("/poster-baski/siparis");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-8">
        <h1 className="text-3xl font-semibold mb-6 text-primary-700">Poster Editörü</h1>
        <div className="mb-6">
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
          <button
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded shadow"
            onClick={() => fileInputRef.current?.click()}
          >
            Fotoğraf Yükle
          </button>
        </div>
        <div className="mb-6 w-full max-w-2xl">
          <label className="block font-medium mb-2">Boyut Seç</label>
          <select
            value={boyut}
            onChange={(e) => setBoyut(e.target.value)}
            className="input-field w-full border rounded px-3 py-2"
          >
            {BOYUTLAR.map((b) => (
              <option key={b.value} value={b.value}>{b.label}</option>
            ))}
          </select>
        </div>
        <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.length === 0 && (
            <div className="col-span-2 text-gray-400 text-center py-12 border rounded-lg bg-white">
              Henüz fotoğraf yüklenmedi.
            </div>
          )}
          {images.map((img, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center relative border">
              <img
                src={img}
                alt={`Yüklenen fotoğraf ${idx + 1}`}
                className="max-h-48 max-w-full object-contain mb-4"
              />
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm">Adet:</label>
                <input
                  type="number"
                  min={1}
                  value={adetler[idx]}
                  onChange={(e) => handleAdetChange(idx, Number(e.target.value))}
                  className="w-16 border rounded px-2 py-1 text-center"
                />
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center"
                onClick={() => handleRemove(idx)}
                title="Fotoğrafı kaldır"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow"
            disabled={images.length === 0}
            onClick={handleTasarimKaydet}
          >
            Tasarımı Kaydet
          </button>
          <button
            className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg text-lg font-medium shadow"
            disabled={images.length === 0}
            onClick={handleSipariseEkle}
          >
            Siparişe Ekle
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditorPage; 