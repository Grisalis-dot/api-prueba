
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { assetSchema } from '@/lib/validations/asset';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const asset = await prisma.asset.findUnique({
      where: { id: params.id },
    });

    if (!asset) {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }

    return NextResponse.json(asset);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validatedData = assetSchema.parse(body);

    const asset = await prisma.asset.update({
      where: { id: params.id },
      data: validatedData,
    });

    return NextResponse.json(asset);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: 'Validation Error', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.asset.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
