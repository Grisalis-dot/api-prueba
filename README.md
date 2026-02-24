# 🚀 IT Asset Management API - Prueba Técnica (Hosted)

Este proyecto es una solución integral para la gestión de activos de infraestructura IT, diseñada para cumplir con los requerimientos de una evaluación técnica senior de Base de Datos e Infraestructura.

## 📝 Descripción del Proyecto
La aplicación permite administrar un inventario de activos tecnológicos (servidores, equipos, bases de datos, etc.). Implementa una arquitectura moderna **Serverless**:
- **Frontend:** Dashboard profesional con React, Shadcn/UI y Tailwind CSS.
- **Backend:** Next.js API Routes (para compatibilidad REST).
- **Base de Datos:** Google Cloud Firestore (Base de datos en tiempo real y global).
- **Hosting:** Firebase App Hosting.

---

## 📖 Guía para el Reclutador (Pruebas en Línea)

### 1. Acceso Directo (Producción)
Puedes probar la aplicación directamente en la URL proporcionada en el despliegue de Firebase App Hosting.

### 2. Uso de la Interfaz (UI)
- **Gestión CRUD:** Crea, edita y elimina notas de activos en tiempo real.
- **Barra de búsqueda:** Filtra instantáneamente por marca o título.
- **Iconografía Dinámica:** El sistema detecta automáticamente si el activo es un Servidor o DB según el título.

### 3. Pruebas de la API (Endpoints REST)
Si deseas validar el requerimiento de la API directamente (vía Postman o cURL):

| Método | Endpoint | Acción |
|--------|----------|--------|
| **GET** | `/api/assets` | Lista todos los activos en JSON. |
| **POST** | `/api/assets` | Crea un activo. Body: `{"titulo": "...", "cuerpo": "...", "marca": "..."}` |
| **GET** | `/api/assets/{id}` | Obtiene el detalle de un activo. |
| **PUT** | `/api/assets/{id}` | Actualiza un activo existente. |
| **DELETE** | `/api/assets/{id}` | Elimina un activo. |

---

## 🧪 Suite de Pruebas (5 Pruebas Requeridas)
Se han implementado pruebas de integración automáticas en `__tests__/api.test.ts` que validan:
1. `POST /assets`: Creación exitosa.
2. `GET /assets`: Listado correcto de la colección.
3. `GET /assets/{id}`: Recuperación de un activo específico.
4. `GET /assets/{id}`: Validación de error 404 (ID inexistente).
5. `DELETE /assets/{id}`: Eliminación y verificación de persistencia.

---

## 🛠 Arquitectura e Infraestructura
- **Seguridad:** Reglas de base de datos (`firestore.rules`) que garantizan la integridad.
- **Escalabilidad:** Al ser Serverless, la infraestructura escala automáticamente de 0 a millones de peticiones.
- **Persistencia:** Google Cloud garantiza 99.9% de disponibilidad.

---
**Candidato:** [Tu Nombre]
**Puesto:** Base de Datos / Infraestructura
**Tiempo de implementación:** 3 horas
