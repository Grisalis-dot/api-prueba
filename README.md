
# 🚀 IT Asset Management API - Prueba Técnica

Este proyecto es una solución integral para la gestión de activos de infraestructura IT, diseñada para cumplir con los requerimientos de una evaluación técnica para perfiles de Base de Datos e Infraestructura.

## 📝 Descripción del Proyecto
La aplicación permite administrar un inventario de activos tecnológicos (servidores, equipos, bases de datos, etc.). Implementa una arquitectura moderna con:
- **Backend:** Next.js API Routes (Node.js).
- **Base de Datos:** PostgreSQL con Prisma ORM.
- **Frontend:** Dashboard profesional con React, Shadcn/UI y Tailwind CSS.
- **Validación:** Esquemas de datos con Zod.

## 🛠 Requerimientos Implementados
- [x] **CRUD Completo:** Crear, Leer, Editar y Eliminar activos.
- [x] **Campos obligatorios:** Título, Cuerpo y Marca.
- [x] **Suite de Pruebas:** 5 pruebas de integración automatizadas.
- [x] **Dockerizado:** Listo para despliegue consistente.

---

## 📖 Guía para el Reclutador (Cómo probar la API)

### 1. Despliegue Local (Recomendado)
La forma más sencilla de evaluar el proyecto es usando **Docker**:

```bash
docker-compose up --build
```
La aplicación estará disponible en `http://localhost:3000`.

### 2. Uso de la Interfaz (UI)
- Al ingresar, verás el **Dashboard de Activos**.
- Haz clic en **"Nuevo Activo"** para registrar uno.
- Prueba la **barra de búsqueda** para filtrar por marca o título en tiempo real.
- Las opciones de **Editar** y **Eliminar** aparecen al pasar el mouse sobre cada tarjeta.

### 3. Pruebas de la API (Endpoints REST)
Si prefieres probar los endpoints directamente (vía Postman o cURL):

| Método | Endpoint | Acción |
|--------|----------|--------|
| **GET** | `/api/assets` | Lista todos los activos en formato JSON. |
| **POST** | `/api/assets` | Crea un activo. Body: `{"titulo": "...", "cuerpo": "...", "marca": "..."}` |
| **GET** | `/api/assets/{id}` | Obtiene el detalle de un activo específico. |
| **PUT** | `/api/assets/{id}` | Actualiza un activo existente. |
| **DELETE** | `/api/assets/{id}` | Elimina un activo del sistema. |

---

## 🧪 Suite de Pruebas (5 Pruebas Requeridas)
Se han implementado pruebas de integración que validan el flujo completo del servicio. Para ejecutarlas:

1. Asegúrate de que el servidor esté corriendo.
2. Ejecuta:
```bash
npm test
```
**Pruebas incluidas:**
1. `POST /assets`: Creación exitosa.
2. `GET /assets`: Listado correcto de la colección.
3. `GET /assets/{id}`: Recuperación de un activo específico.
4. `GET /assets/{id}`: Validación de error 404 (activo inexistente).
5. `DELETE /assets/{id}`: Eliminación exitosa y persistencia.

---

## ☁️ Instrucciones de Hosting
Este servicio está optimizado para ser hosteado en:
- **Railway / Render:** Solo necesitas conectar el repositorio y configurar la variable `DATABASE_URL` con tu instancia de PostgreSQL.
- **Vercel:** Ideal para el frontend y las Serverless Functions de la API.

---
**Candidato:** [Tu Nombre]
**Puesto:** Base de Datos / Infraestructura
**Tiempo de implementación:** ~3 horas
