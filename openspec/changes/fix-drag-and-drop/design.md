## Context

El proyecto Next.js tiene drag & drop parcialmente implementado:
- `@dnd-kit/core` y `@dnd-kit/sortable` instalados
- `TaskItem.tsx` usa `useSortable` hook con handle GripVertical
- Endpoint `/api/tasks/reorder` existe y guarda el nuevo orden

Falta: el `DndContext` provider en `TaskList` que conecta los sortable items.

## Goals / Non-Goals

**Goals:**
- Habilitar drag & drop funcional para reordenar tareas
- Persistir el nuevo orden en la base de datos
- Mostrar drag handle solo cuando sort='custom'
- Animación suave al soltar

**Non-Goals:**
- Reordenar entre diferentes filtros de status
- Múltiples listas (kanban style) - solo una lista vertical
- Offline support para drag & drop

## Decisions

### 1. DndContext con SortableContext
**Decisión:** Envolver las tareas con `DndContext` y `SortableContext` en `TaskList.tsx`

```tsx
<DndContext onDragEnd={handleDragEnd}>
  <SortableContext items={tasks.map(t => t.id)}>
    {tasks.map(task => <TaskItem ... />)}
  </SortableContext>
</DndContext>
```

**Alternativa:** Usar `closestCenter` collision detection para mejor UX.

### 2. onDragEnd handler
**Decisión:** Usar `arrayMove` de dnd-kit para reordenar localmente, luego llamar `onReorder` con los IDs en nuevo orden.

```ts
const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event
  if (over && active.id !== over.id) {
    const oldIndex = tasks.findIndex(t => t.id === active.id)
    const newIndex = tasks.findIndex(t => t.id === over.id)
    const newOrder = arrayMove(tasks, oldIndex, newIndex)
    onReorder(newOrder.map(t => t.id))
  }
}
```

### 3. Drag handle visibility
**Decisión:** Agregar prop `isDraggable` a `TaskItem` que viene de `TaskList` basado en `sort === 'custom'`.

```tsx
<TaskItem
  isDraggable={sort === 'custom'}
  ...
/>
```

### 4. Animación
**Decisión:** Usar la transición por defecto de dnd-kit (configurable en `transition` de useSortable). Ya está implementado en TaskItem.tsx con `transition`.

## Risks / Trade-offs

- **[Risk]** Si el usuario draggea muy rápido, el reorder podría fallar
  - **Mitigation:** Dnd-kit maneja esto bien, pero podemos agregar debounce si es necesario

- **[Risk]** La tarea no se visualiza bien mientras se arrastra en móvil
  - **Mitigation:** Dnd-kit tiene buen soporte touch, pero podemos mejorar el styling del drag overlay si es necesario

- **[Trade-off]** Solo funciona cuando sort='custom' - el usuario no puede reorder en otras vistas
  - **Mitigation:** Es un comportamiento esperado, no es un bug - otras vistas tienen su propio orden (recientes, oldest, status)

## Migration Plan

1. Modificar `TaskList.tsx` para agregar DndContext y SortableContext
2. Modificar `TaskItem.tsx` para recibir prop `isDraggable` y conditionally render handle
3. Modificar `dashboard/page.tsx` para pasar `sort` a TaskList
4. Testear drag & drop y persistencia del reorder