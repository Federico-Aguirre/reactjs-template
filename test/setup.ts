import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Limpia el DOM generado por Testing Library tras cada prueba
afterEach(() => {
  cleanup();
});
