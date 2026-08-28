🌐 Idioma: Español | English Version

# Plantilla Base React + Vite + TypeScript

Plantilla de inicio rápida y optimizada para aplicaciones SPA con React 19, Vite 8, Tailwind CSS v4 y componentes de interfaz construidos con Radix UI.

## Stack Tecnológico

- **Core:** React 19, TypeScript, Vite 8
- **Estilos:** Tailwind CSS v4, Radix UI, Lucide Icons
- **Enrutamiento:** React Router v7
- **Estado:** Zustand (Cliente) + TanStack Query v5 (Servidor)
- **Formularios:** React Hook Form + Zod
- **Calidad de Código:** ESLint 9, Prettier, Husky, Vitest

## Uso Rápido

1. Instalar dependencias:
   ```bash
   npm install
   ```

Iniciar servidor de desarrollo:

Bash
npm run dev
Compilar para producción:

Bash
npm run build
Estructura del Proyecto
src/components/ui/: Componentes base de interfaz.

src/features/: Módulos de negocio aislados.

src/hooks/: Custom hooks globales.

src/lib/: Configuración de clientes (QueryClient, utilidades).

src/routes/: Configuración de rutas.

src/store/: Estado global de cliente con Zustand.
