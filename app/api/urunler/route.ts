import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Ürünleri listele
export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(products);
}

// Yeni ürün ekle
export async function POST(req: NextRequest) {
  const { name, description, price, image, category } = await req.json();
  if (!name || !price) {
    return NextResponse.json({ error: 'Ürün adı ve fiyat zorunlu.' }, { status: 400 });
  }
  const product = await prisma.product.create({
    data: { name, description, price, image, category }
  });
  return NextResponse.json(product);
} 