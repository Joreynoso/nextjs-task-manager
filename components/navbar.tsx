import Link from "next/link"
import { ThemeSwitch } from "./theme-switch"

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto w-full flex h-16 items-center justify-between px-4 md:px-0">
        <Link href="/" className="text-xl font-heading text-foreground">
          Task <span className="text-muted-foreground italic">Manager</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Login
          </Link>
          <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Register
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
}