## Context

Proyecto nuevo: Task Manager tipo todo-list con autenticación de usuarios. Stack: Next.js 16 (App Router), Prisma + Supabase (PostgreSQL), Tailwind + Shadcn/ui.

## Goals / Non-Goals

**Goals:**
- Autenticación de usuarios con email y password (hasheado con bcrypt)
- CRUD completo de tareas (crear, editar, eliminar, marcar estado)
- Drag & drop para reordenar tareas
- Panel lateral para filtrar por estado y ordenar por diferentes criterios

**Non-Goals:**
- No usar Supabase Auth (auth propia)
- No múltiples workspaces o equipos
- No notificaciones ni recordatorios
- No compartición de tareas entre usuarios

## Decisiones

### Auth
- **Elegido**: bcrypt para hashear passwords en la base de datos
- **Alternativa considerada**: JWT con cookies HttpOnly
- **Razón**: Simplicidad - session simple basada en userId en cookie signed

### Drag & Drop
- **Elegido**: @dnd-kit/core (más moderno, mejor soporte para React 19)
- **Alternativa**: @hello-pangea/dnd (fork de beautiful-dnd)
- **Razón**: Mejor integración con React 19 y más flexible para reordenamiento

### Estado de tareas
- **Elegido**: Enum en la base de datos [pendiente, en_curso, hecho]
- **Razón**: Más limpio que texto libre, permite filtrar eficientemente

### API Routes
- **Elegido**: Next.js App Router con Route Handlers (app/api/*)
- **Razón**: Estandar para Next.js 16, mejor que Pages Router

## Risks / Trade-offs

- [Riesgo] Si el usuario borra su cuenta, ¿qué pasa con sus tareas? → Se eliminan en cascada (onDelete: Cascade en Prisma)
- [Trade-off] Auth simple sin tokens de refresh → Sesión limitada, fácil de implementar
- [Trade-off] Un solo password por usuario → No es lo mismo que login tradicional, pero cumple el requisito