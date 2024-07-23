import { z } from 'zod';

export const LoginRequestSchema = z.object({
  username: z
    .string()
    .refine(
      (value) =>
        /^[a-zA-Z0-9_]+$/.test(value) ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      {
        message:
          'Username must be either a valid username (a-zA-Z0-9_) or a valid email address',
      }
    ),
  password: z
    .string()
    .min(8, 'Password is too short (min: 8)')
    .max(50, 'Password is too long (max: 50)'),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
