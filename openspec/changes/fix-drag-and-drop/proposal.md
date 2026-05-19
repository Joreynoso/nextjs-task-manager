## Why

El sistema tiene `@dnd-kit` instalado y los componentes TaskItem ya usan `useSortable`, pero falta el contexto de Drag & Drop en TaskList. El drag & drop no funciona - las tareas no se pueden reordenar visualmente ni persistir el cambio.

## What Changes

- Agregar `DndContext` en `TaskList.tsx` para habilitar drag & drop
- Agregar `SortableContext` para que dnd-kit maneje la reorderación
- Implementar handler `onDragEnd` para persistir el nuevo orden
- Ocultar el drag handle (GripVertical) cuando el sort no es "custom"
- Agregar animación suave al soltar las tareas

## Capabilities

### New Capabilities

- **task-drag-drop**: Habilitar reordenamiento manual de tareas con drag & drop, solo cuando el usuario selecciona "custom order"

### Modified Capabilities

- Ninguno - es un fix de implementación

## Impact

- Componentes afectados: `TaskList.tsx`, `TaskItem.tsx`
- API: El endpoint `/api/tasks/reorder` ya existe y funciona
- Dependencias: `@dnd-kit/core`, `@dnd-kit/sortable` (ya instalados)