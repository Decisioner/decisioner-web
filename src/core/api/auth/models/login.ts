import { z } from 'zod';

export const LoginRequestSchema = z.object({
  username: z
    .string()
    .min(1, 'Username cannot be empty')
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
    .min(1, 'Password cannot be empty')
    .min(8, 'Password is too short (min: 8)')
    .max(50, 'Password is too long (max: 50)'),
});
export type LoginRequest = z.infer<typeof LoginRequestSchema>;
