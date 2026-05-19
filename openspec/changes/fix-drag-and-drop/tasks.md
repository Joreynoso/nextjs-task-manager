## 1. Modificar TaskList.tsx

- [x] 1.1 Importar DndContext, DragEndEvent, arrayMove de @dnd-kit
- [x] 1.2 Importar SortableContext de @dnd-kit/sortable
- [x] 1.3 Agregar DndContext con onDragEnd handler
- [x] 1.4 Agregar SortableContext con items={tasks.map(t => t.id)}
- [x] 1.5 Implementar handleDragEnd que usa arrayMove y llama onReorder

## 2. Modificar TaskItem.tsx

- [x] 2.1 Agregar prop isDraggable al interface
- [x] 2.2 Conditionally render el drag handle basado en isDraggable
- [x] 2.3 Pasar isDraggable={true/false} desde TaskList

## 3. Modificar Dashboard page

- [x] 3.1 Pasar sort a TaskList para determinar isDraggable

## 4. Testing

- [ ] 4.1 Probar drag & drop cuando sort='custom'
- [ ] 4.2 Verificar que el handle no aparece en otros sort
- [ ] 4.3 Verificar que el reorder se persiste correctamente