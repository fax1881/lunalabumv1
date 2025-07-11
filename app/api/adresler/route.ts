import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'gizliAnahtar';

// Adresleri listele
export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token) return NextResponse.json({ error: 'Giriş yapmalısınız.' }, { status: 401 });
  let userData: JwtPayload;
  try {
    userData = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return NextResponse.json({ error: 'Oturum geçersiz.' }, { status: 401 });
  }
  const user = await prisma.user.findUnique({ where: { id: userData.id as string }, include: { addresses: true } });
  if (!user) return NextResponse.json({ error: 'Kullanıcı bulunamadı.' }, { status: 404 });
  return NextResponse.json(user.addresses);
}

// Yeni adres ekle
export async function POST(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token) return NextResponse.json({ error: 'Giriş yapmalısınız.' }, { status: 401 });
  let userData: JwtPayload;
  try {
    userData = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return NextResponse.json({ error: 'Oturum geçersiz.' }, { status: 401 });
  }
  const { ad, adres, il, ilce, posta } = await req.json();
  if (!ad || !adres || !il || !ilce || !posta) {
    return NextResponse.json({ error: 'Tüm alanlar zorunlu.' }, { status: 400 });
  }
  const newAddress = await prisma.address.create({
    data: {
      userId: userData.id as string,
      ad,
      adres,
      il,
      ilce,
      posta
    }
  });
  return NextResponse.json(newAddress);
}

// Adres sil
export async function DELETE(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  if (!token) return NextResponse.json({ error: 'Giriş yapmalısınız.' }, { status: 401 });
  let userData: JwtPayload;
  try {
    userData = jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return NextResponse.json({ error: 'Oturum geçersiz.' }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get('id'));
  if (!id) return NextResponse.json({ error: 'Adres ID gerekli.' }, { status: 400 });
  // Sadece kendi adresini silebilsin
  const address = await prisma.address.findUnique({ where: { id } });
  if (!address || address.userId !== (userData.id as string)) {
    return NextResponse.json({ error: 'Adres bulunamadı veya yetkisiz.' }, { status: 403 });
  }
  await prisma.address.delete({ where: { id } });
  return NextResponse.json({ success: true });
} 