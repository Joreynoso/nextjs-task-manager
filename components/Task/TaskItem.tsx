'use client'

import { useState } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Pencil, Trash2, Check, X } from 'lucide-react'

interface TaskItemProps {
  task: {
    id: string
    title: string
    description: string | null
    status: string
  }
  onUpdate: (id: string, data: { title?: string; description?: string; status?: string }) => void
  onDelete: (id: string) => void
}

const statusLabels: Record<string, string> = {
  pendiente: 'Pending',
  en_curso: 'In Progress',
  hecho: 'Done'
}

export function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [editDescription, setEditDescription] = useState(task.description || '')
  const [editStatus, setEditStatus] = useState(task.status)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  }

  const handleSave = () => {
    onUpdate(task.id, {
      title: editTitle,
      description: editDescription || undefined,
      status: editStatus
    })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditTitle(task.title)
    setEditDescription(task.description || '')
    setEditStatus(task.status)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="p-4 bg-card border-2 border-primary/30 rounded-xl space-y-3 shadow"
      >
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="w-full px-3 py-2 border border-input bg-background rounded-lg text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Title"
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          className="w-full px-3 py-2 border border-input bg-background rounded-lg text-foreground resize-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder="Description (optional)"
          rows={2}
        />
        <select
          value={editStatus}
          onChange={(e) => setEditStatus(e.target.value)}
          className="w-full px-3 py-2 border border-input bg-background rounded-lg text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="pendiente">Pending</option>
          <option value="en_curso">In Progress</option>
          <option value="hecho">Done</option>
        </select>
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            className="flex items-center gap-1 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 text-sm"
          >
            <Check size={14} /> Save
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-1 px-3 py-1.5 text-muted-foreground hover:text-foreground text-sm"
          >
            <X size={14} /> Cancel
          </button>
        </div>
      </div>
    )
  }

  const statusStyles: Record<string, string> = {
  pendiente: 'bg-[#d4a373]/20 text-[#a67c52] dark:text-[#d4a373]',
  en_curso: 'bg-[#669bbc]/20 text-[#4a7a9a] dark:text-[#669bbc]',
  hecho: 'bg-[#577a5e]/20 text-[#3d5c42] dark:text-[#577a5e]'
}

return (
    <div
      ref={setNodeRef}
      style={style}
      className="p-4 bg-card border rounded-xl flex items-start gap-3 group hover:shadow-md transition-shadow"
    >
      <button
        {...attributes}
        {...listeners}
        className="mt-1 text-muted-foreground hover:text-foreground cursor-grab active:cursor-grabbing opacity-50 group-hover:opacity-100 transition-opacity"
      >
        <GripVertical size={18} />
      </button>

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground truncate">{task.title}</h3>
        {task.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{task.description}</p>
        )}
        <span className={`inline-block mt-2 text-xs px-2.5 py-1 rounded-full font-medium ${statusStyles[task.status] || 'bg-muted text-muted-foreground'}`}>
          {statusLabels[task.status] || task.status}
        </span>
      </div>

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
          title="Edit"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-1.5 text-muted-foreground hover:text-destructive hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          title="Delete"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}