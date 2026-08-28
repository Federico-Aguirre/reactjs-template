import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryProvider } from './query-provider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <BrowserRouter>
        {children}
        <Toaster position="top-right" />
      </BrowserRouter>
    </QueryProvider>
  );
}
