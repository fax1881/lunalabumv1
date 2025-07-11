import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'gizliAnahtar';

export async function POST(req: NextRequest) {
  // Kullanıcıyı JWT ile doğrula
  const token = req.cookies.get('token')?.value;
  if (!token) return NextResponse.json({ error: 'Giriş yapmalısınız.' }, { status: 401 });
  let userData: JwtPayload;
  try {
    userData = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return NextResponse.json({ error: 'Oturum geçersiz.' }, { status: 401 });
  }

  const { urun, adet, adres } = await req.json();
  if (!urun || !adet || !adres) {
    return NextResponse.json({ error: 'Tüm alanlar zorunlu.' }, { status: 400 });
  }

  // Referans numarası üret
  const referans = Math.random().toString(36).substring(2, 10).toUpperCase();

  // Siparişi oluştur
  const siparis = await prisma.order.create({
    data: {
      urun,
      adet,
      adres,
      referans,
      odeme: false,
      kargo: '',
      tarih: new Date(),
      kullaniciEmail: userData.email
    }
  });

  return NextResponse.json(siparis);
} 