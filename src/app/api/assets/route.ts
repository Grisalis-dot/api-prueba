
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { assetSchema } from '@/lib/validations/asset';

export async function GET() {
  try {
    const assets = await prisma.asset.findMany({
      orderBy: { fecha_creacion: 'desc' },
    });
    return NextResponse.json(assets);
  } catch (error) {
    console.error('Error fetching assets:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = assetSchema.parse(body);

    const asset = await prisma.asset.create({
      data: validatedData,
    });

    return NextResponse.json(asset, { status: 201 });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation Error', details: error.errors },
        { status: 400 }
      );
    }
    console.error('Error creating asset:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
