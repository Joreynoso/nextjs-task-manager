'use client'

import { useState, useEffect } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { TaskItem } from './Task/TaskItem'
import { EmptyTask } from './Task/EmptyTask'

interface Task {
  id: string
  title: string
  description: string | null
  status: string
  order: number
  createdAt: string
}

interface TaskListProps {
  tasks: Task[]
  onUpdate: (id: string, data: { title?: string; description?: string; status?: string }) => void
  onDelete: (id: string) => void
  onReorder: (taskIds: string[]) => void
  sort?: string
  taskLoading?: Record<string, { updating: boolean; deleting: boolean }>
}

export function TaskList({ tasks, onUpdate, onDelete, onReorder, sort, taskLoading = {} }: TaskListProps) {
  const [localTasks, setLocalTasks] = useState(tasks)
  const [isDragging, setIsDragging] = useState(false)
  const isDraggable = sort === 'custom'

  useEffect(() => {
    if (!isDragging) {
      setLocalTasks(tasks)
    }
  }, [tasks, isDragging])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  if (localTasks.length === 0) {
    return <EmptyTask />
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = localTasks.findIndex((t) => t.id === active.id)
      const newIndex = localTasks.findIndex((t) => t.id === over.id)

      const newOrder = arrayMove(localTasks, oldIndex, newIndex)
      setLocalTasks(newOrder)
      onReorder(newOrder.map((t) => t.id))
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event) => {
        setIsDragging(false)
        handleDragEnd(event)
      }}
      onDragCancel={() => setIsDragging(false)}
    >
      <SortableContext
        items={localTasks.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-3">
          {localTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
              isDraggable={isDraggable}
              isUpdating={taskLoading[task.id]?.updating}
              isDeleting={taskLoading[task.id]?.deleting}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}