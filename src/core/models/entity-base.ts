import { z } from 'zod';

export const IdStringSchema = z.string();
export const IdNumberSchema = z.coerce.number().int().nonnegative();

export const IdSchema = z.union([IdStringSchema, IdNumberSchema]);
export type Id = z.infer<typeof IdSchema>;

export const EntityBaseSchema = z.object({
  id: IdSchema,
  created_at: z.string().datetime(),
  created_by: z.string().uuid().nullable(),
  updated_at: z.string().datetime(),
  updated_by: z.string().uuid().nullable(),
});

export type EntityBase = z.infer<typeof EntityBaseSchema>;
