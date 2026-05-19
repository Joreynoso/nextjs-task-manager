'use client'

import { useState, useRef, useEffect } from 'react'
import { Filter, ChevronDown, Clock, Calendar, CheckCircle2 } from 'lucide-react'

interface FilterDropdownProps {
  value: string[]
  onChange: (value: string[]) => void
}

const statusOptions = [
  { value: 'pendiente', label: 'Pending', icon: Clock },
  { value: 'en_curso', label: 'In Progress', icon: Calendar },
  { value: 'hecho', label: 'Done', icon: CheckCircle2 }
]

export function FilterDropdown({ value, onChange }: FilterDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleToggle = (status: string) => {
    if (value.includes(status)) {
      onChange(value.filter(s => s !== status))
    } else {
      onChange([status])
    }
  }

  const activeCount = value.length

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border bg-card text-sm hover:bg-muted transition-colors ${activeCount > 0 ? 'border-primary' : ''}`}
      >
        <Filter size={16} />
        <span className="hidden sm:inline">Filter</span>
        {activeCount > 0 && (
          <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded">{activeCount}</span>
        )}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-card border rounded-lg shadow-lg z-10 py-1 animate-in fade-in slide-in-from-top-2">
          {statusOptions.map((option) => {
            const Icon = option.icon
            const isSelected = value.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleToggle(option.value)}
                className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-muted transition-colors"
              >
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-primary border-primary' : 'border-border'}`}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <Icon size={14} className="text-muted-foreground" />
                <span>{option.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}