
import { z } from 'zod';

export const assetSchema = z.object({
  titulo: z.string().min(1, 'El título es obligatorio').max(255),
  cuerpo: z.string().min(1, 'El cuerpo es obligatorio'),
  marca: z.string().min(1, 'La marca es obligatoria').max(100),
});

export type AssetInput = z.infer<typeof assetSchema>;
