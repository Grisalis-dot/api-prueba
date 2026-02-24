# 🚀 IT Asset Management API - Prueba Técnica (Senior)

Esta es una solución integral para la gestión de activos de infraestructura IT, diseñada para cumplir con los requerimientos de evaluación técnica para el puesto de **Base de Datos / Infraestructura**.

## 📝 Descripción
La aplicación permite administrar un inventario de activos tecnológicos (servidores, equipos, bases de datos, etc.). Implementa una arquitectura **Serverless** moderna:
- **Frontend:** Dashboard profesional con React, Shadcn/UI y Tailwind CSS.
- **Backend:** Next.js API Routes (RESTful API).
- **Base de Datos:** Google Cloud Firestore (Persistencia global en tiempo real).
- **Infraestructura:** Preparado para despliegue en Google Cloud (Firebase App Hosting).

---

## 🛠 Guía para el Reclutador

### 1. Acceso a la Interfaz (UI)
Puedes acceder al dashboard visual a través de la URL de despliegue proporcionada en el correo de entrega.
- **Funcionalidades:** Crear, editar, buscar y eliminar activos directamente desde la web.
- **Dato Técnico:** El sistema utiliza **Firestore Realtime Updates**; los cambios se reflejan instantáneamente en todos los clientes conectados.

### 2. Pruebas de la API REST (Endpoints)
Si prefieres validar el requerimiento técnico vía Postman o cURL, utiliza los siguientes endpoints:

| Método | Endpoint | Acción | Cuerpo (JSON) |
|--------|----------|--------|---------------|
| **GET** | `/api/assets` | Listar todos | N/A |
| **POST** | `/api/assets` | Crear activo | `{"titulo": "Servidor Linux", "cuerpo": "Ubuntu 22.04", "marca": "Dell"}` |
| **GET** | `/api/assets/{id}` | Ver detalle | N/A |
| **PUT** | `/api/assets/{id}` | Actualizar | `{"titulo": "Update", "cuerpo": "...", "marca": "..."}` |
| **DELETE** | `/api/assets/{id}` | Eliminar | N/A |

### 3. Suite de Pruebas (5 Pruebas Requeridas)
Se han implementado pruebas automatizadas en `__tests__/api.test.ts` que validan los 5 escenarios solicitados:
1. `POST`: Creación exitosa de activos.
2. `GET`: Listado correcto de la colección.
3. `GET {id}`: Recuperación de un activo específico por su ID.
4. `GET {error}`: Manejo de error 404 para IDs inexistentes.
5. `DELETE`: Persistencia de la eliminación.

---

## 🏗 Arquitectura e Infraestructura
- **Base de Datos:** Se eligió **Cloud Firestore** por su capacidad de escalado automático y alta disponibilidad (99.9%), eliminando la necesidad de gestionar parches de servidores de base de datos tradicionales.
- **Seguridad:** Configurada con reglas de seguridad granulares para permitir la evaluación técnica pública sin comprometer el resto de la base de datos.
- **Tiempo de Implementación:** ~3 horas.

---
**Candidato:** [Tu Nombre]
**Puesto:** Base de Datos / Infraestructura
