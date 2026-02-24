"use client";

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { assetSchema, type AssetInput } from '@/lib/validations/asset';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useFirestore, addDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase';
import { collection, doc, serverTimestamp } from 'firebase/firestore';

interface AssetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  asset: any | null;
  onSuccess: () => void;
}

export function AssetDialog({ isOpen, onClose, asset, onSuccess }: AssetDialogProps) {
  const { toast } = useToast();
  const db = useFirestore();
  const form = useForm<AssetInput>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      titulo: '',
      cuerpo: '',
      marca: '',
    },
  });

  useEffect(() => {
    if (asset) {
      form.reset({
        titulo: asset.titulo,
        cuerpo: asset.cuerpo,
        marca: asset.marca,
      });
    } else {
      form.reset({
        titulo: '',
        cuerpo: '',
        marca: '',
      });
    }
  }, [asset, form, isOpen]);

  const onSubmit = (data: AssetInput) => {
    try {
      if (asset) {
        const docRef = doc(db, 'assets', asset.id);
        updateDocumentNonBlocking(docRef, data);
        toast({ title: 'Éxito', description: 'Activo actualizado correctamente.' });
      } else {
        const colRef = collection(db, 'assets');
        addDocumentNonBlocking(colRef, {
          ...data,
          fecha_creacion: serverTimestamp()
        });
        toast({ title: 'Éxito', description: 'Activo creado correctamente.' });
      }
      onClose();
    } catch (error) {
      toast({ title: 'Error', description: 'Ocurrió un error inesperado.', variant: 'destructive' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{asset ? 'Editar Activo' : 'Nuevo Activo de IT'}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Servidor Producción A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marca"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marca / Vendor</FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Dell, Cisco, AWS" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cuerpo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción Técnica</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Detalles del activo..." className="min-h-[100px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={onClose}>Cancelar</Button>
              <Button type="submit" className="bg-primary">{asset ? 'Actualizar' : 'Guardar'}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
