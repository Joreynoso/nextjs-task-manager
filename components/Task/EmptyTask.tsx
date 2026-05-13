'use client'

import { ClipboardList } from 'lucide-react'

export function EmptyTask() {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow p-12 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
        <ClipboardList size={32} className="text-muted-foreground" />
      </div>
      
      <h3 className="text-2xl font-normal font-heading text-foreground mb-3">
        No tasks yet
      </h3>
      
      <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
        Your task list is empty. Start building your productivity by adding your first task above. 
        Break down your goals into manageable items and watch your progress grow one step at a time.
      </p>
      
      <p className="text-sm text-muted-foreground/70">
        Tip: Click the "+ Add Task" button to get started
      </p>
    </div>
  )
}