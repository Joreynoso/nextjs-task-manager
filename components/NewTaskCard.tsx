'use client'

import { useState } from 'react'
import { Plus, Loader2 } from 'lucide-react'

interface NewTaskCardProps {
  onAddTask: (title: string, description: string) => Promise<void>
}

export function NewTaskCard({ onAddTask }: NewTaskCardProps) {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [isAdding, setIsAdding] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim() || isSubmitting) return
    setIsSubmitting(true)
    try {
      await onAddTask(newTitle, newDescription)
      setNewTitle('')
      setNewDescription('')
      setIsAdding(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
      <h2 className="text-lg font-normal font-heading mb-1 flex items-center gap-2">
        <Plus size={18} /> New Task
      </h2>
      <p className="text-muted-foreground text-xs mb-4">Create a new task to stay organized</p>

      {!isAdding ? (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full py-2 border-2 border-dashed border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
        >
          + Add Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Task title"
            className="w-full px-3 py-2 border border-input bg-background rounded-lg text-sm focus-visible:ring-2 focus-visible:ring-ring"
            autoFocus
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description (optional)"
            className="w-full px-3 py-2 border border-input bg-background rounded-lg text-sm resize-none focus-visible:ring-2 focus-visible:ring-ring"
            rows={2}
          />
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create'
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1.5 text-muted-foreground hover:text-foreground text-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}