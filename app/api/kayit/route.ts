import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();
    
    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Tüm alanlar zorunlu.' }, { status: 400 });
    }
    
    // Name validation
    if (name.trim().length < 2) {
      return NextResponse.json({ error: 'İsim en az 2 karakter olmalı.' }, { status: 400 });
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Geçerli bir e-posta adresi girin.' }, { status: 400 });
    }
    
    // Password strength validation
    if (password.length < 6) {
      return NextResponse.json({ error: 'Şifre en az 6 karakter olmalı.' }, { status: 400 });
    }
    
    // Email benzersiz mi kontrol et
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'Bu e-posta ile kayıtlı kullanıcı var.' }, { status: 409 });
    }
    
    // Şifreyi hashle
    const hashed = await bcrypt.hash(password, 12); // Salt rounds artırıldı
    
    // Kullanıcıyı oluştur
    const user = await prisma.user.create({
      data: { 
        name: name.trim(), 
        email: email.toLowerCase().trim(), 
        password: hashed 
      }
    });
    
    // Şifreyi response'da gösterme
    const { password: _, ...userSafe } = user;
    return NextResponse.json(userSafe);
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Sunucu hatası.' }, { status: 500 });
  }
} 