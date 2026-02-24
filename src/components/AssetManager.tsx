"use client";

import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Server, Laptop, Database, Search, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { AssetDialog } from './AssetDialog';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { useFirestore, useCollection, useMemoFirebase, deleteDocumentNonBlocking } from '@/firebase';
import { collection, query, orderBy, doc } from 'firebase/firestore';

export function AssetManager() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAsset, setEditingAsset] = useState<any>(null);
  const { toast } = useToast();
  const db = useFirestore();

  const assetsQuery = useMemoFirebase(() => {
    return query(collection(db, 'assets'), orderBy('fecha_creacion', 'desc'));
  }, [db]);

  const { data: assets, isLoading } = useCollection(assetsQuery);

  const handleDelete = (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este activo?')) return;
    const docRef = doc(db, 'assets', id);
    deleteDocumentNonBlocking(docRef);
    toast({ title: 'Éxito', description: 'Activo eliminado correctamente.' });
  };

  const filteredAssets = assets?.filter(a => 
    (a.titulo?.toLowerCase() || '').includes(searchTerm.toLowerCase()) || 
    (a.marca?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Buscar por título o marca..." 
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button onClick={() => { setEditingAsset(null); setIsDialogOpen(true); }} className="bg-accent hover:bg-accent/90">
          <Plus className="h-4 w-4 mr-2" /> Nuevo Activo
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-accent" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.length > 0 ? filteredAssets.map((asset) => (
            <Card key={asset.id} className="group hover:shadow-md transition-shadow relative overflow-hidden border-l-4 border-l-accent">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-secondary rounded-lg">
                    {asset.titulo?.toLowerCase().includes('servidor') ? <Server className="h-5 w-5 text-accent" /> : 
                     asset.titulo?.toLowerCase().includes('base') ? <Database className="h-5 w-5 text-accent" /> :
                     <Laptop className="h-5 w-5 text-accent" />}
                  </div>
                  <Badge variant="outline" className="text-xs uppercase font-bold tracking-wider">{asset.marca}</Badge>
                </div>
                <CardTitle className="mt-4 line-clamp-1">{asset.titulo}</CardTitle>
                <CardDescription className="text-xs">
                  ID: {asset.id?.substring(0, 8)}... • {asset.fecha_creacion?.toDate ? format(asset.fecha_creacion.toDate(), 'dd MMM yyyy') : 'Reciente'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{asset.cuerpo}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" onClick={() => { setEditingAsset(asset); setIsDialogOpen(true); }}>
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(asset.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )) : (
            <div className="col-span-full py-20 text-center text-muted-foreground border-2 border-dashed rounded-xl">
              No se encontraron activos de IT.
            </div>
          )}
        </div>
      )}

      <AssetDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        asset={editingAsset} 
        onSuccess={() => {}}
      />
    </div>
  );
}
