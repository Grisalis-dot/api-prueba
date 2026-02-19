
# Asset API - IT Infrastructure Management

Profesional REST API diseñada para el control de activos de IT, implementada con Next.js (Node.js), Prisma ORM y PostgreSQL.

## 🚀 Despliegue Local (Docker)

La forma más rápida de levantar el entorno completo (API + DB) es usando Docker Compose:

```bash
docker-compose up --build
```

Esto levantará la API en `http://localhost:3000` y una instancia de PostgreSQL.

### Requisitos Manuales
1. Instalar dependencias: `npm install`
2. Configurar `.env` con `DATABASE_URL`
3. Sincronizar DB: `npx prisma db push`
4. Iniciar: `npm run dev`

## 🛠 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| **POST** | `/api/assets` | Crea un nuevo activo |
| **GET** | `/api/assets` | Lista todos los activos |
| **GET** | `/api/assets/{id}` | Obtiene un activo por UUID |
| **PUT** | `/api/assets/{id}` | Actualiza un activo |
| **DELETE** | `/api/assets/{id}` | Elimina un activo |

### Ejemplo de Payload (POST/PUT)
```json
{
  "titulo": "Servidor Linux Proliant",
  "cuerpo": "Servidor de base de datos principal con 64GB RAM.",
  "marca": "HP"
}
```

## 🧪 Pruebas
Ejecuta la suite de pruebas unitarias e integración con:
```bash
npm test
```
*Nota: Asegúrate de tener el servidor corriendo para las pruebas de integración.*

## ☁️ Despliegue en la Nube (Cloud)

### Render / Railway
1. Conecta este repositorio.
2. Crea una base de datos PostgreSQL en el panel de control.
3. Configura la variable de entorno `DATABASE_URL` en el servicio de la API.
4. Comando de Build: `npm run build`
5. Comando de Start: `npm run start`

## 🛡 Calidad y Estructura
- **Validación:** Uso de `Zod` para esquemas de datos.
- **ORM:** `Prisma` para migraciones y consultas tipadas.
- **UI:** Dashboard profesional con `shadcn/ui` y `Tailwind CSS`.
- **Logging:** Manejo de errores global y logs de base de datos.
