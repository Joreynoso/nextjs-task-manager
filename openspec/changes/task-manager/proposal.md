## Why

Necesito una aplicación simple de gestión de tareas tipo todo-list con autenticación de usuarios. Mi objetivo es tener una lista personal donde pueda agregar, editar, eliminar y reordenar tareas con drag & drop. El panel lateral permitirá filtrar y ordenar las tareas por diferentes criterios.

## What Changes

- Sistema de autenticación con email y password (propio, no Supabase Auth)
- CRUD completo de tareas (crear, leer, actualizar, eliminar)
- Reordenamiento de tareas mediante drag & drop
- Panel lateral con opciones de filtrar por estado y ordenar (reciente, antiguo, estado)
- Persistencia de datos con Prisma + Supabase (PostgreSQL)

## Capabilities

### New Capabilities
- `user-auth`: Autenticación de usuarios con email y password hasheado
- `task-management`: CRUD de tareas con soporte para drag & drop
- `task-ordering`: Panel de acciones para filtrar y ordenar tareas

### Modified Capabilities
(ninguno - proyecto nuevo)

## Impact

- Nueva base de datos PostgreSQL en Supabase
- Nuevas dependencias: prisma, @prisma/client, bcryptjs, @dnd-kit/core
- Rutas API para auth y tareas en Next.js App Router
- Componentes de UI para lista de tareas y panel lateral