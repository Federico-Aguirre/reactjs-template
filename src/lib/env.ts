import { z } from 'zod';

// Definimos el esquema de validación para las variables de entorno de la SPA
const envSchema = z.object({
  VITE_APP_TITLE: z.string().min(1, 'El título de la app es obligatorio'),
  VITE_API_BASE_URL: z
    .string()
    .url('VITE_API_BASE_URL debe ser una URL válida'),
});

// Validamos las variables expuestas por Vite
const _env = envSchema.safeParse(import.meta.env);

if (!_env.success) {
  console.error('❌ Variables de entorno inválidas:', _env.error.format());
  throw new Error(
    'Faltan variables de entorno o son incorrectas. Revisa tu archivo .env'
  );
}

// Exportamos el objeto ya validado y tipado
export const env = _env.data;
