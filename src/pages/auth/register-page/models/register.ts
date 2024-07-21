import { DefaultValues } from 'react-hook-form';
import { z } from 'zod';

export const RegisterRequestSchema = z.object({
  username: z
    .string()
    .min(1, 'Username cannot be empty')
    .regex(/^[a-zA-Z0-9_]/, 'Username is not correct (a-zA-Z0-9_)')
    .min(2, 'Username is too short (min: 2)')
    .max(40, 'Username is too long (max: 40)'),
  email: z
    .string()
    .min(1, 'Email cannot be empty')
    .email('Email is not an email'),
  fullName: z
    .string()
    .min(1, 'Full name cannot be empty')
    .min(2, 'Full name is too short (min: 2)')
    .max(50, 'Full name is too long (max: 50)'),
  password: z
    .string()
    .min(1, 'Password cannot be empty')
    .min(8, 'Password is too short (min: 8)')
    .max(50, 'Password is too long (max: 50)')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      'The password must be between 8 and 50 characters long, include at least 1 digit and 1 letter'
    ),
});
export type RegisterRequest = z.infer<typeof RegisterRequestSchema>;

export const registerFormDefaultValues: DefaultValues<RegisterRequest> = {
  username: '',
  email: '',
  fullName: '',
  password: '',
};
