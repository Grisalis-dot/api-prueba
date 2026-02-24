# IT Asset Management API - Prueba Técnica (Senior)

Esta es una solución profesional para la gestión de activos de infraestructura IT, diseñada con una arquitectura moderna **Serverless Cloud Native**.

## 🚀 Descripción de la Solución
La aplicación permite administrar un inventario de activos tecnológicos (servidores, equipos, bases de datos, etc.) utilizando:
- **Frontend:** Dashboard profesional con React, Shadcn/UI y Tailwind CSS.
- **Backend:** Next.js API Routes.
- **Base de Datos:** Cloud Firestore (Persistencia global NoSQL).
- **Hosting:** Desplegado en **Vercel** (Optimizado para Next.js).

---

## 🛠 Guía para el Reclutador

### 1. Acceso a la Interfaz (UI)
Acceda al dashboard visual a través de la URL de despliegue de Vercel proporcionada.
- **Funcionalidades:** Crear, editar, buscar y eliminar activos directamente desde la web.
- **Dato Técnico:** El sistema utiliza **Firestore Realtime Updates**; los cambios se reflejan instantáneamente.

### 2. Pruebas de la API REST (Endpoints)
Utilice los siguientes endpoints para validar el requerimiento técnico vía Postman o cURL:

| Método | Endpoint | Acción | Cuerpo (JSON) |
|--------|----------|--------|---------------|
| **GET** | `/api/assets` | Listar todos | N/A |
| **POST** | `/api/assets` | Crear activo | `{"titulo": "Servidor Linux", "cuerpo": "Ubuntu 22.04", "marca": "Dell"}` |
| **GET** | `/api/assets/{id}` | Ver detalle | N/A |
| **PUT** | `/api/assets/{id}` | Actualizar | `{"titulo": "Update", "cuerpo": "...", "marca": "..."}` |
| **DELETE** | `/api/assets/{id}` | Eliminar | N/A |

### 3. Suite de Pruebas Automatizadas
Se han implementado pruebas en `__tests__/api.test.ts` que validan los 5 escenarios solicitados:
1. `POST`: Creación exitosa.
2. `GET`: Listado correcto de la colección.
3. `GET {id}`: Recuperación de un activo específico.
4. `GET {error}`: Manejo de error 404 para IDs inexistentes.
5. `DELETE`: Persistencia de la eliminación.

---

## 🏗 Arquitectura e Infraestructura
- **Base de Datos:** Se utiliza **Cloud Firestore** para garantizar alta disponibilidad y escalado automático.
- **Seguridad:** Reglas de seguridad configuradas para permitir la evaluación técnica pública de la colección.
- **Despliegue:** Cloud Hosting en Vercel con integración continua (CI/CD) desde GitHub.

**Candidato:** [Tu Nombre]
**Puesto:** Base de Datos / Infraestructura
