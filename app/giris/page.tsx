"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const GirisPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (email && password) {
      try {
        const res = await fetch("/api/giris", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        if (res.ok) {
          router.push("/hesap");
        } else {
          const data = await res.json();
          setError(data.error || "Giriş başarısız.");
        }
      } catch {
        setError("Sunucu hatası. Lütfen tekrar deneyin.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("E-posta ve şifre giriniz.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl font-semibold mb-6 text-primary-700">Giriş Yap</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-8 w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-1 font-medium">E-posta</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Şifre</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded font-medium" disabled={loading}>
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
          <div className="mt-4 text-center">
            Hesabınız yok mu? <a href="/kayit" className="text-primary-600 hover:underline">Kayıt Ol</a>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default GirisPage; 