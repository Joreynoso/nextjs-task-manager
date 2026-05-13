'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TaskList } from '@/components/TaskList'
import { ActionPanel } from '@/components/ActionPanel'

interface Task {
  id: string
  title: string
  description: string | null
  status: string
  order: number
  createdAt: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState('custom')
  const [statusFilter, setStatusFilter] = useState<string[]>([])

  const fetchTasks = async () => {
    try {
      const params = new URLSearchParams()
      params.set('sort', sort)
      if (statusFilter.length > 0) {
        params.set('status', statusFilter[0])
      }

      const res = await fetch(`/api/tasks?${params}`)
      const data = await res.json()
      
      if (res.ok) {
        setTasks(data.tasks)
      }
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/me')
      if (!res.ok) {
        router.push('/login')
      }
    }
    checkAuth()
  }, [router])

  useEffect(() => {
    fetchTasks()
  }, [sort, statusFilter])

  const handleCreateTask = async (title: string, description: string) => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
    if (res.ok) {
      fetchTasks()
    }
  }

  const handleUpdateTask = async (id: string, data: { title?: string; description?: string; status?: string }) => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (res.ok) {
      fetchTasks()
    }
  }

  const handleDeleteTask = async (id: string) => {
    const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    if (res.ok) {
      fetchTasks()
    }
  }

  const handleReorder = async (taskIds: string[]) => {
    const res = await fetch('/api/tasks/reorder', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskIds })
    })
    if (res.ok) {
      fetchTasks()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        <aside className="w-72 flex-shrink-0">
          <ActionPanel
            sort={sort}
            onSortChange={setSort}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            onAddTask={handleCreateTask}
          />
        </aside>

        <main className="flex-1">
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : (
            <TaskList
              tasks={tasks}
              onUpdate={handleUpdateTask}
              onDelete={handleDeleteTask}
              onReorder={handleReorder}
            />
          )}
        </main>
      </div>
    </div>
  )
}