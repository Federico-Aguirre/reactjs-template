# Etapa 1: Compilación con Node (Chainguard dev)
FROM cgr.dev/chainguard/node:latest-dev AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa 2: Servidor estático ultra seguro y libre de CVEs
FROM cgr.dev/chainguard/nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["-g", "daemon off;"]