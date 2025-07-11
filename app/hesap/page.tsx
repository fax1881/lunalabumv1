import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import dynamic from 'next/dynamic';
import type { JwtPayload } from 'jsonwebtoken';
const AdreslerBolumu = dynamic(() => import('../../components/AdreslerBolumu'), { ssr: false });

const JWT_SECRET = process.env.JWT_SECRET || 'gizliAnahtar';
const prisma = new PrismaClient();

type Order = {
  id: string;
  referans: string;
  tarih: string;
  urun: string;
  adet: number;
  kargo?: string;
};

export default async function HesapPage() {
  // Cookie'den token'ı al
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) redirect('/giris');

  let userData: JwtPayload;
  try {
    userData = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    redirect('/giris');
  }

  // Kullanıcıyı veritabanından çek
  const user = await prisma.user.findUnique({ where: { id: userData.id as string } });
  if (!user) redirect('/giris');

  // Kullanıcının siparişlerini çek
  const siparisler = await prisma.order.findMany({ where: { referans: user.email }, orderBy: { tarih: 'desc' } });

  // Adresler client-side çekilecek
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-8">
        <h1 className="text-2xl font-semibold mb-6 text-primary-700">Hesabım</h1>
        <div className="mb-6 text-center">
          <div className="text-lg font-medium">{user.name}</div>
          <div className="text-gray-500">{user.email}</div>
        </div>
        <div className="w-full max-w-2xl bg-white rounded shadow p-6 min-h-[200px] mb-8">
          <h2 className="text-lg font-semibold mb-4">Siparişlerim</h2>
          {siparisler.length === 0 ? (
            <p className="text-gray-500">Henüz siparişiniz yok.</p>
          ) : (
            <ul className="space-y-4">
              {siparisler.map((s: Order) => (
                <li key={s.id} className="border rounded p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="font-medium">Sipariş #{s.referans}</div>
                    <div className="text-sm text-gray-600">Tarih: {new Date(s.tarih).toLocaleString('tr-TR')}</div>
                    <div className="text-sm text-gray-600">Ürün: {s.urun}</div>
                    <div className="text-sm text-gray-600">Adet: {s.adet}</div>
                  </div>
                  <div>
                    <div className="text-sm">Referans No: <span className="font-mono">{s.referans}</span></div>
                    <div className="text-sm">Kargo Takip: <span className="font-mono">{s.kargo || '-'}</span></div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <AdreslerBolumu />
      </main>
      <Footer />
    </div>
  );
} 