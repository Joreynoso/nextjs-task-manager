## 1. Setup

- [x] 1.1 Instalar dependencias: prisma, @prisma/client, bcryptjs, @dnd-kit/core, @dnd-kit/sortable
- [x] 1.2 Configurar Prisma con schema para User y Task
- [x] 1.3 Configurar Supabase (crear proyecto y obtener URL + keys)
- [x] 1.4 Crear archivo .env con DATABASE_URL y NEXT_PUBLIC_SUPABASE_URL/ANON_KEY

## 2. Base de datos

- [x] 2.1 Ejecutar `npx prisma generate` y `npx prisma db push`
- [x] 2.2 Verificar tablas User y Task en Supabase

## 3. Auth API

- [x] 3.1 Crear Route Handler POST /api/auth/register (crear usuario)
- [x] 3.2 Crear Route Handler POST /api/auth/login (verificar password, crear cookie de sesión)
- [x] 3.3 Crear Route Handler POST /api/auth/logout (eliminar cookie)
- [x] 3.4 Crear Route Handler GET /api/auth/me (verificar sesión activa)

## 4. Tasks API

- [ ] 4.1 Crear Route Handler GET /api/tasks (obtener tareas del usuario, soportar query params: sort, filter)
- [ ] 4.2 Crear Route Handler POST /api/tasks (crear nueva tarea)
- [ ] 4.3 Crear Route Handler PUT /api/tasks/[id] (actualizar tarea)
- [ ] 4.4 Crear Route Handler DELETE /api/tasks/[id] (eliminar tarea)
- [ ] 4.5 Crear Route Handler PATCH /api/tasks/reorder (reordenar tareas con nuevo orden)

## 5. UI - Auth

- [x] 5.1 Crear página de login /app/login/page.tsx
- [x] 5.2 Crear página de registro /app/register/page.tsx
- [x] 5.3 Crear componente de formulario de auth

## 6. UI - Dashboard

- [ ] 6.1 Crear página principal /app/dashboard/page.tsx
- [ ] 6.2 Crear componente TaskList (lista de tareas con drag & drop)
- [ ] 6.3 Crear componente TaskItem (tarea individual)
- [ ] 6.4 Crear componente TaskForm (crear/editar tarea)
- [ ] 6.5 Crear componente ActionPanel (sidebar con filtros y ordenamiento)
- [ ] 6.6 Integrar @dnd-kit para drag & drop

## 7. UI - Componentes

- [ ] 7.1 Crear/ajustar componentes shadcn: button, input, checkbox, select, card
- [ ] 7.2 Implementar diseño desde docs/design/design.md (colores taupe)

## 8. Testing

- [ ] 8.1 Probar registro de usuario
- [ ] 8.2 Probar login/logout
- [ ] 8.3 Probar CRUD de tareas
- [ ] 8.4 Probar drag & drop
- [ ] 8.5 Probar filtros y ordenamiento

## 9. Setup Final

- [ ] 9.1 Configurar deployment (Vercel)
- [ ] 9.2 Configurar variables de entorno en Vercel