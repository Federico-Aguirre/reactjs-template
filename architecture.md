# Arquitectura del Proyecto (React SPA)

## Estructura de Directorios

- `src/assets/`: Recursos estáticos (imágenes, fuentes, iconos SVGs).
- `src/components/`:
  - `ui/`: Componentes atómicos de UI reutilizables (Button, Input, Label, etc.).
  - `common/`: Componentes estructurales de la aplicación (Layouts, Navbar, Modales globales).
- `src/features/`: Módulos agrupados por dominio de negocio (ej. `auth`, `users`, `dashboard`).
  - Cada feature contiene sus propios `components/`, `hooks/`, `api/` y `types/`.
- `src/hooks/`: Custom hooks globales o compartidos entre múltiples features.
- `src/lib/`: Instancias de cliente global (`react-query`, `axios/fetch`, utilidades como `utils.ts`).
- `src/routes/`: Configuración centralizada de rutas y protección de vistas.
- `src/store/`: Stores de estado global gestionados con Zustand.
- `src/types/`: Interfaces y tipos globales de TypeScript.

## Flujo de Datos

1. **Estado de Servidor:** Manejado con `@tanstack/react-query` para caching y synchronización de datos externos.
2. **Estado Global de Cliente:** Manejado con `zustand` para UI states (temas, datos de sesión activos).
3. **Validación:** Modelos de datos validados usando esquemas `zod` e integrados a formularios con `react-hook-form`.
