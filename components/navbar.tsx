import Link from "next/link"
import { ThemeSwitch } from "./theme-switch"

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto w-full flex h-16 items-center justify-between px-4 md:px-0">
        <Link href="/" className="text-xl font-heading text-foreground">
          Task <span className="text-muted-foreground italic">Manager</span>
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}