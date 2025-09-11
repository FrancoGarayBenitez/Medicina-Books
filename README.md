# Medicina-Books

Proyecto fullstack para gestión y venta de libros de medicina.

## Estructura del proyecto

- `/backend`: API REST con Node.js, Express y MongoDB
- `/frontend`: Aplicación web con React y Vite

## Requisitos

- Node.js >= 18.x
- MongoDB (Atlas o local)

## Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/FrancoGarayBenitez/Medicina-Books.git
cd Medicina-Books
```

### 2. Backend

```bash
cd backend
npm install
# Configura tu archivo .env con la URI de MongoDB
npm run seed   # (opcional) para poblar la base de datos
npm start
```

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

## Uso

- Accede a la app en `http://localhost:5173`
- El backend corre por defecto en `http://localhost:3000`

## Funcionalidades

- Catálogo de libros de medicina
- Carrito de compras
- Gestión de órdenes
- Imágenes y detalles de cada libro

## Créditos

Desarrollado por Franco Garay Benitez
