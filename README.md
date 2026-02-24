# IT Asset Management API - Prueba Técnica (Senior)

Esta es una solución profesional para la gestión de activos de infraestructura IT, diseñada con una arquitectura moderna **Serverless Cloud Native**.

##  Acceso Rápido
- **URL del Dashboard (UI):** [INSERTAR_TU_URL_DE_VERCEL_AQUI]
- **Endpoint Base:** `https://[TU_URL_DE_VERCEL]/api/assets`

---

##  Guía de Pruebas (Paso a Paso)

### 1. Prueba de la Interfaz (Dashboard)
1. Abre la URL en tu navegador (móvil o PC).
2. Haz clic en **"Nuevo Activo"**.
3. Ingresa: `Servidor de Base de Datos`, `Oracle`, `Instancia de producción crítica`.
4. Verifica que la tarjeta aparezca instantáneamente con el icono de base de datos.

### 2. Prueba de la API REST (Vía ReqBin / Postman)
Si estás en tu celular, puedes usar [ReqBin.com](https://reqbin.com/) para probar los endpoints:

| Método | Endpoint | Acción | Cuerpo (JSON) |
|--------|----------|--------|---------------|
| **POST** | `/api/assets` | Crear | `{"titulo": "API Test", "marca": "Cisco", "cuerpo": "Switch Catalyst 9300"}` |
| **GET** | `/api/assets` | Listar | N/A |
| **PUT** | `/api/assets/{id}` | Editar | `{"titulo": "Actualizado", "marca": "Cisco", "cuerpo": "Nuevos detalles"}` |
| **DELETE** | `/api/assets/{id}` | Borrar | N/A |

---

##  Arquitectura e Infraestructura
- **Frontend/Backend:** Next.js 15 (App Router).
- **Base de Datos:** Cloud Firestore (NoSQL Real-time).
- **Validación:** Zod (Esquemas de datos estrictos).
- **Estilos:** Tailwind CSS + Shadcn/UI (Diseño responsivo).
- **Hosting:** Vercel (CI/CD desde GitHub).

**Candidato:** [Samuel Grisales Barrera]
**Puesto:** Base de Datos / Infraestructura
 add .