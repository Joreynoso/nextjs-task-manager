import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto w-full px-4 md:px-0 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-normal text-foreground mb-6">
          Take control of your day with a task manager designed to keep everything <span className="italic">simple</span>, organized, and focused on what truly matters.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Stay focused. Get things done. No clutter.
        </p>
        <Button size="sm">
          Get Started
        </Button>
      </div>
    </section>
  )
}