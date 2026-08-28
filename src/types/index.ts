// Respuestas genéricas de backend
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

// Estructura estándar para listas paginadas
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Tipos comunes compartidos
export type UserRole = 'admin' | 'user' | 'guest';
