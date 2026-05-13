'use client'

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
}

export function TaskList({ tasks, onUpdate, onDelete, onReorder }: TaskListProps) {
  if (tasks.length === 0) {
    return <EmptyTask />
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}