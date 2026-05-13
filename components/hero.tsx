"use client"

import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"

export function Hero() {
  const { user, loading } = useAuth()
  const router = useRouter()

  const handleGetStarted = () => {
    if (user) {
      router.push("/dashboard")
    } else {
      router.push("/register")
    }
  }

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-3xl mx-auto w-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-normal text-foreground mb-6">
          Take control of your day with a task manager designed to keep everything <span className="italic">simple</span>, organized, and focused on what truly matters.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-garamond">
          Stay focused. Get things done. No clutter.
        </p>
        <Button size="sm" onClick={handleGetStarted} disabled={loading}>
          {loading ? "Cargando..." : "Get Started"}
        </Button>
      </div>
    </section>
  )
}