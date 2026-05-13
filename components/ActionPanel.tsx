'use client'

import { useState } from 'react'
import { Plus, Filter, ArrowUpDown, Calendar, Clock, CheckCircle2 } from 'lucide-react'

interface ActionPanelProps {
  sort: string
  onSortChange: (sort: string) => void
  statusFilter: string[]
  onStatusFilterChange: (filter: string[]) => void
  onAddTask: (title: string, description: string) => void
}

const statusOptions = [
  { value: 'pendiente', label: 'Pending', icon: Clock },
  { value: 'en_curso', label: 'In Progress', icon: Calendar },
  { value: 'hecho', label: 'Done', icon: CheckCircle2 }
]

const sortOptions = [
  { value: 'custom', label: 'Custom Order' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'status', label: 'By Status' }
]

export function ActionPanel({
  sort,
  onSortChange,
  statusFilter,
  onStatusFilterChange,
  onAddTask
}: ActionPanelProps) {
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim()) return
    onAddTask(newTitle, newDescription)
    setNewTitle('')
    setNewDescription('')
    setIsAdding(false)
  }

  const handleStatusToggle = (status: string) => {
    if (statusFilter.includes(status)) {
      onStatusFilterChange(statusFilter.filter((s) => s !== status))
    } else {
      onStatusFilterChange([status])
    }
  }

  return (
    <div className="space-y-4">
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
                className="flex-1 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors"
              >
                Create
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

      <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
        <h3 className="text-base font-normal font-heading text-foreground mb-3 flex items-center gap-2">
          <ArrowUpDown size={16} /> Sort By
        </h3>
        <div className="space-y-1">
          {sortOptions.map((option) => (
            <label 
              key={option.value} 
              className={`flex items-center gap-2 p-2 rounded-lg transition-all hover:bg-muted ${sort === option.value ? 'bg-muted' : ''} ${sort === 'custom' && option.value !== 'custom' ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${sort === option.value ? 'border-primary' : 'border-border'}`}>
                {sort === option.value && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <input
                type="radio"
                name="sort"
                value={option.value}
                checked={sort === option.value}
                onChange={() => sort !== 'custom' && onSortChange(option.value)}
                disabled={sort === 'custom' && option.value !== 'custom'}
                className="sr-only"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
        <h3 className="text-base font-normal font-heading text-foreground mb-3 flex items-center gap-2">
          <Filter size={16} /> Filter By Status
        </h3>
        <div className="space-y-1">
          {statusOptions.map((option) => {
            const Icon = option.icon
            const isSelected = statusFilter.includes(option.value)
            return (
              <label 
                key={option.value} 
                className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all hover:bg-muted ${isSelected ? 'bg-muted' : ''}`}
              >
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-primary border-primary' : 'border-border'}`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleStatusToggle(option.value)}
                  className="sr-only"
                />
                <Icon size={14} className="text-muted-foreground" />
                <span className="text-sm text-foreground">{option.label}</span>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}