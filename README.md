# 🚀 IT Asset Management API - Prueba Técnica (Senior)

Esta es una solución integral para la gestión de activos de infraestructura IT, diseñada para cumplir con los requerimientos de evaluación técnica.

## 📝 Descripción
La aplicación permite administrar un inventario de activos tecnológicos (servidores, equipos, bases de datos, etc.) utilizando una arquitectura **Serverless Cloud Native**:
- **Frontend:** Dashboard profesional con React, Shadcn/UI y Tailwind CSS.
- **Backend:** Next.js API Routes (RESTful API).
- **Base de Datos:** Cloud Firestore (Persistencia global en tiempo real).
- **Infraestructura:** Desplegado en **Firebase App Hosting**.

---

## 🛠 Guía para el Reclutador

### 1. Acceso a la Interfaz (UI)
Acceda al dashboard visual a través de la URL de despliegue proporcionada.
- **Funcionalidades:** Crear, editar, buscar y eliminar activos directamente desde la web.
- **Dato Técnico:** El sistema utiliza **Firestore Realtime Updates**; cualquier cambio se refleja instantáneamente.

### 2. Pruebas de la API REST (Endpoints)
Utilice los siguientes endpoints para validar el requerimiento técnico vía Postman o cURL:

| Método | Endpoint | Acción | Cuerpo (JSON) |
|--------|----------|--------|---------------|
| **GET** | `/api/assets` | Listar todos | N/A |
| **POST** | `/api/assets` | Crear activo | `{"titulo": "Servidor Linux", "cuerpo": "Ubuntu 22.04", "marca": "Dell"}` |
| **GET** | `/api/assets/{id}` | Ver detalle | N/A |
| **PUT** | `/api/assets/{id}` | Actualizar | `{"titulo": "Update", "cuerpo": "...", "marca": "..."}` |
| **DELETE** | `/api/assets/{id}` | Eliminar | N/A |

### 3. Suite de Pruebas (5 Pruebas Requeridas)
Se han implementado pruebas automatizadas en `__tests__/api.test.ts` que validan los 5 escenarios solicitados:
1. `POST`: Creación exitosa.
2. `GET`: Listado correcto de la colección.
3. `GET {id}`: Recuperación de un activo específico.
4. `GET {error}`: Manejo de error 404 para IDs inexistentes.
5. `DELETE`: Persistencia de la eliminación.

---

## 🏗 Arquitectura e Infraestructura
- **Base de Datos:** Se eligió **Cloud Firestore** por su capacidad de escalado automático y alta disponibilidad (99.9%), eliminando la gestión de servidores tradicionales.
- **Seguridad:** Configurada con reglas granulares para permitir la evaluación pública sin comprometer el resto del sistema.
- **Hosting:** Utiliza **Firebase App Hosting**, optimizado para el renderizado híbrido de Next.js.
