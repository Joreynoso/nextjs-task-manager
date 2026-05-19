'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowUpDown, ChevronDown } from 'lucide-react'

interface SortDropdownProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

const sortOptions = [
  { value: 'custom', label: 'Custom Order' },
  { value: 'recent', label: 'Most Recent' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'status', label: 'By Status' }
]

export function SortDropdown({ value, onChange, disabled }: SortDropdownProps) {
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

  const currentLabel = sortOptions.find(o => o.value === value)?.label || 'Sort by'

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border bg-card text-sm hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowUpDown size={16} />
        <span className="hidden sm:inline">{currentLabel}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-card border rounded-lg shadow-lg z-10 py-1 animate-in fade-in slide-in-from-top-2">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors ${value === option.value ? 'bg-muted' : ''}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}