import { z } from 'zod';
import { EntityBaseSchema } from './entity-base';

export const UserSchema = EntityBaseSchema.merge(
  z.object({
    username: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
);
export type User = z.infer<typeof UserSchema>;
