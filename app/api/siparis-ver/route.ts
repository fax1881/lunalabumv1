import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient();

// JWT_SECRET environment variable'ı zorunlu
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required');
}

export async function POST(req: NextRequest) {
  try {
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
    
    // Input validation
    if (!urun || !adet || !adres) {
      return NextResponse.json({ error: 'Tüm alanlar zorunlu.' }, { status: 400 });
    }
    
    // Adet validation
    if (typeof adet !== 'number' || adet <= 0 || adet > 1000) {
      return NextResponse.json({ error: 'Geçerli bir adet girin.' }, { status: 400 });
    }
    
    // String validation
    if (typeof urun !== 'string' || urun.trim().length === 0) {
      return NextResponse.json({ error: 'Geçerli bir ürün adı girin.' }, { status: 400 });
    }
    
    if (typeof adres !== 'string' || adres.trim().length === 0) {
      return NextResponse.json({ error: 'Geçerli bir adres girin.' }, { status: 400 });
    }

    // Referans numarası üret
    const referans = Math.random().toString(36).substring(2, 10).toUpperCase();

    // Siparişi oluştur
    const siparis = await prisma.order.create({
      data: {
        urun: urun.trim(),
        adet,
        adres: adres.trim(),
        referans,
        odeme: false,
        kargo: '',
        tarih: new Date(),
        userId: userData.id as number
      }
    });

    return NextResponse.json(siparis);
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json({ error: 'Sunucu hatası.' }, { status: 500 });
  }
} 