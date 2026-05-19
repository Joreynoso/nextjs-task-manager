"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeSwitch } from "./theme-switch"
import { useAuth } from "./auth-provider"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const { user, loading, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background xl:px-0 md:px-4">
      <div className="max-w-7xl mx-auto w-full flex h-16 items-center justify-between px-4 md:px-0">
        <Link href="/" className="text-xl font-heading text-foreground">
          Task <span className="text-muted-foreground italic">Manager</span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-4">
          {loading ? (
            <span className="text-sm text-muted-foreground hidden sm:inline">Cargando...</span>
          ) : user ? (
            <>
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:inline">
                Dashboard
              </Link>
              <span className="text-sm text-muted-foreground hidden md:inline">{user.email}</span>
              <button
                onClick={logout}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:inline"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                Login
              </Link>
              <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline">
                Register
              </Link>
            </>
          )}
          <ThemeSwitch />
          
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-64 bg-background z-50 md:hidden p-4 animate-in slide-in-from-right">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-muted rounded-lg"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="space-y-4">
              {user ? (
                <>
                  <div className="text-sm text-muted-foreground pb-4 border-b">
                    {user.email}
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout()
                      setMenuOpen(false)
                    }}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}