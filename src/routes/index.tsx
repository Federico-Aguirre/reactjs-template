import { Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold tracking-tight">
        Plantilla React + Vite
      </h1>
      <p className="text-muted-foreground max-w-md text-center">
        Todo configurado con Tailwind v4, TanStack Query, Zustand y componentes
        UI.
      </p>
      <Button onClick={() => alert('¡Funciona!')}>Probar Botón</Button>
    </main>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-bold">404 - Página no encontrada</h2>
      <a href="/" className="text-primary text-sm underline">
        Volver al inicio
      </a>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
