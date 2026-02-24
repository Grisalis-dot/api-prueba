import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { assetSchema } from '@/lib/validations/asset';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { firestore } = initializeFirebase();
    const docRef = doc(firestore, 'assets', params.id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ error: 'Activo no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ id: snapshot.id, ...snapshot.data() });
  } catch (error) {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validatedData = assetSchema.parse(body);
    const { firestore } = initializeFirebase();
    
    const docRef = doc(firestore, 'assets', params.id);
    await updateDoc(docRef, validatedData);

    return NextResponse.json({ id: params.id, ...validatedData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { firestore } = initializeFirebase();
    const docRef = doc(firestore, 'assets', params.id);
    await deleteDoc(docRef);

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar' }, { status: 500 });
  }
}
