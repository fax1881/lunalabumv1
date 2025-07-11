import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Siparişleri listele
export async function GET() {
  const orders = await prisma.order.findMany({ orderBy: { tarih: 'desc' } });
  return NextResponse.json(orders);
}

// Sipariş güncelle (ödeme veya kargo)
export async function PUT(req: NextRequest) {
  const { id, odeme, kargo } = await req.json();
  if (!id) {
    return NextResponse.json({ error: 'id zorunlu' }, { status: 400 });
  }
  const updated = await prisma.order.update({
    where: { id },
    data: {
      odeme: odeme !== undefined ? odeme : undefined,
      kargo: kargo !== undefined ? kargo : undefined,
    },
  });
  return NextResponse.json(updated);
} 