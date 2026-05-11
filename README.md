# Innovatech

Proyecto desarrollado para la Evaluación Parcial N°2 de Introducción a Herramientas DevOps.

## Descripción

El proyecto consiste en una arquitectura Frontend y Backend contenerizada utilizando Docker y Docker Compose, desplegada en AWS EC2.

El frontend consume correctamente los endpoints del backend mediante comunicación HTTP.

---

# Tecnologías utilizadas

- Docker
- Docker Compose
- Node.js
- Express
- Nginx
- AWS EC2
- GitHub

---

# Estructura del proyecto

```bash
innovatech/
├── innovatech-frontend/
├── innovatech-backend/
└── docker-compose.yml
```

---

# Frontend

El frontend fue desarrollado utilizando HTML, CSS y JavaScript.

Puerto utilizado:

```bash
80
```

---

# Backend

El backend fue desarrollado utilizando Node.js y Express.

Puerto utilizado:

```bash
3000
```

Endpoint principal:

```bash
/api/saludo
```

Respuesta esperada:

```json
{
  "mensaje": "Hola desde el Backend Innovatech"
}
```

---

# Docker Compose

El proyecto utiliza Docker Compose para levantar automáticamente ambos servicios.

Comando de ejecución:

```bash
docker compose up --build
```

---

# Despliegue en AWS EC2

El proyecto fue desplegado utilizando instancias EC2 de AWS Academy.

Se configuraron Security Groups para permitir:

- Puerto 80 (Frontend)
- Puerto 3000 (Backend)

---

# Integración Frontend → Backend

El frontend consume el backend mediante fetch utilizando la IP pública de la instancia EC2.

Ejemplo:

```javascript
fetch("http://18.232.101.160:3000/api/saludo")
```

---

# Contenedores Docker

Contenedores utilizados:

- innovatech-frontend-container
- innovatech-backend-container

---

# Integrantes

- Martín Hernandez - Diego Sepulveda - Manuel Alvarez