import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { collection, getDocs, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { assetSchema } from '@/lib/validations/asset';

export async function GET() {
  try {
    const { firestore } = initializeFirebase();
    const assetsCol = collection(firestore, 'assets');
    const q = query(assetsCol, orderBy('fecha_creacion', 'desc'));
    const snapshot = await getDocs(q);
    
    const assets = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      fecha_creacion: doc.data().fecha_creacion?.toDate?.() || new Date()
    }));

    return NextResponse.json(assets);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener activos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = assetSchema.parse(body);
    const { firestore } = initializeFirebase();

    const docRef = await addDoc(collection(firestore, 'assets'), {
      ...validatedData,
      fecha_creacion: serverTimestamp()
    });

    return NextResponse.json({ id: docRef.id, ...validatedData }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
