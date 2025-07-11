import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'Tüm alanlar zorunlu.' }, { status: 400 });
  }
  // Email benzersiz mi kontrol et
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: 'Bu e-posta ile kayıtlı kullanıcı var.' }, { status: 409 });
  }
  // Şifreyi hashle
  const hashed = await bcrypt.hash(password, 10);
  // Kullanıcıyı oluştur
  const user = await prisma.user.create({
    data: { name, email, password: hashed }
  });
  // Şifreyi response'da gösterme
  const { password: _, ...userSafe } = user;
  return NextResponse.json(userSafe);
} 