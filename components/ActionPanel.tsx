'use client'

import { NewTaskCard } from './NewTaskCard'
import { SortDropdown } from './SortDropdown'
import { FilterDropdown } from './FilterDropdown'

interface ActionPanelProps {
  sort: string
  onSortChange: (sort: string) => void
  statusFilter: string[]
  onStatusFilterChange: (filter: string[]) => void
  onAddTask: (title: string, description: string) => Promise<void>
}

export function ActionPanel({
  sort,
  onSortChange,
  statusFilter,
  onStatusFilterChange,
  onAddTask
}: ActionPanelProps) {
  return (
    <div className="space-y-4">
      <NewTaskCard onAddTask={onAddTask} />

      <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
        <SortDropdown value={sort} onChange={onSortChange} disabled={sort === 'custom'} />
      </div>

      <div className="rounded-xl border bg-card text-card-foreground shadow p-4">
        <FilterDropdown value={statusFilter} onChange={onStatusFilterChange} />
      </div>
    </div>
  )
}