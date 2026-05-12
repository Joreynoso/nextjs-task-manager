"use client"

import { cn } from "@/lib/utils"

function TestHeading1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-normal tracking-tight lg:text-5xl font-heading", className)}>
      {children}
    </h1>
  )
}

function TestHeading2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("scroll-m-20 text-3xl font-normal tracking-tight first:mt-0 font-heading", className)}>
      {children}
    </h2>
  )
}

function TestHeading3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-normal tracking-tight font-heading", className)}>
      {children}
    </h3>
  )
}

function TestHeading4({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-normal tracking-tight font-heading", className)}>
      {children}
    </h4>
  )
}

function TestParagraph({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

function TestBlockquote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  )
}

function TestSmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {children}
    </small>
  )
}

function TestCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}>
      {children}
    </div>
  )
}

function TestCardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>
}

function TestCardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn("font-semibold leading-none tracking-tight", className)}>{children}</h3>
}

function TestCardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}

function TestCardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>
}

function TestCardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>
}

function TestButton({ children, variant = "default", size = "default", className }: {
  children: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}) {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }
  return (
    <button className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </button>
  )
}

function TestBadge({ children, variant = "default" }: {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
}) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  }
  return (
    <span className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      variants[variant]
    )}>
      {children}
    </span>
  )
}

function TestAlert({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full rounded-lg border p-4", className)}>
      {children}
    </div>
  )
}

function TestAlertTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)}>{children}</h5>
}

function TestAlertDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("text-sm [&_p]:leading-relaxed", className)}>{children}</div>
}

export function ThemeTester() {
  return (
    <div className="container mx-auto py-12 space-y-16 px-4">
      <section>
        <TestHeading1>Theme Tester</TestHeading1>
        <TestParagraph className="mt-4">
          Componente para probar todos los elementos del tema: colores, tipografía, spacing y más.
        </TestParagraph>
      </section>

      <section>
        <TestHeading2>Tipografía - Títulos</TestHeading2>
        <div className="mt-6 space-y-4">
          <TestHeading1>Heading 1 - Font Extrabold</TestHeading1>
          <TestHeading2>Heading 2 - Font Semibold</TestHeading2>
          <TestHeading3>Heading 3 - Font Semibold</TestHeading3>
          <TestHeading4>Heading 4 - Font Semibold</TestHeading4>
        </div>
      </section>

      <section>
        <TestHeading2>Tipografía - Textos</TestHeading2>
        <div className="mt-6 space-y-4">
          <TestParagraph>
            Párrafo normal con texto de ejemplo. El tema usa colores beige/taupe que proporcionan una estética cálida y profesional.
          </TestParagraph>
          <TestBlockquote>
            "Este es un blockquote - una cita destacadas que puede usar para enfatizar palabras o frases importantes."
          </TestBlockquote>
          <TestSmall>Texto pequeño (small) para captions o información secundaria</TestSmall>
        </div>
      </section>

      <section>
        <TestHeading2>Tarjetas (Cards)</TestHeading2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestCard>
            <TestCardHeader>
              <TestCardTitle>Card Título</TestCardTitle>
              <TestCardDescription>Descripción de la card conmuted text</TestCardDescription>
            </TestCardHeader>
            <TestCardContent>
              <TestParagraph>Contenido de la tarjeta con texto de ejemplo para mostrar el estilo.</TestParagraph>
            </TestCardContent>
            <TestCardFooter>
              <TestButton size="sm">Acción</TestButton>
            </TestCardFooter>
          </TestCard>

          <TestCard>
            <TestCardHeader>
              <TestCardTitle>Otra Card</TestCardTitle>
              <TestCardDescription>Segunda tarjeta de ejemplo</TestCardDescription>
            </TestCardHeader>
            <TestCardContent>
              <TestParagraph>Más contenido de ejemplo para probar los estilos del tema.</TestParagraph>
            </TestCardContent>
            <TestCardFooter>
              <TestButton variant="outline" size="sm">Secundario</TestButton>
            </TestCardFooter>
          </TestCard>

          <TestCard className="bg-primary text-primary-foreground">
            <TestCardHeader>
              <TestCardTitle>Card invertida</TestCardTitle>
              <TestCardDescription>Con colores primary</TestCardDescription>
            </TestCardHeader>
            <TestCardContent>
              <TestParagraph>Esta card usa colores invertidos para probar contraste.</TestParagraph>
            </TestCardContent>
            <TestCardFooter>
              <TestButton variant="secondary" size="sm">Botón</TestButton>
            </TestCardFooter>
          </TestCard>
        </div>
      </section>

      <section>
        <TestHeading2>Botones</TestHeading2>
        <div className="mt-6 space-y-6">
          <div className="flex flex-wrap gap-4">
            <TestButton>Default</TestButton>
            <TestButton variant="destructive">Destructive</TestButton>
            <TestButton variant="outline">Outline</TestButton>
            <TestButton variant="secondary">Secondary</TestButton>
            <TestButton variant="ghost">Ghost</TestButton>
            <TestButton variant="link">Link</TestButton>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <TestButton size="sm">Small</TestButton>
            <TestButton size="default">Default</TestButton>
            <TestButton size="lg">Large</TestButton>
            <TestButton size="icon">☰</TestButton>
          </div>
        </div>
      </section>

      <section>
        <TestHeading2>Badges / Tags</TestHeading2>
        <div className="mt-6 flex flex-wrap gap-3">
          <TestBadge>Default</TestBadge>
          <TestBadge variant="secondary">Secondary</TestBadge>
          <TestBadge variant="destructive">Destructive</TestBadge>
          <TestBadge variant="outline">Outline</TestBadge>
        </div>
      </section>

      <section>
        <TestHeading2>Alertas</TestHeading2>
        <div className="mt-6 space-y-4">
          <TestAlert>
            <TestAlertTitle>Alerta Default</TestAlertTitle>
            <TestAlertDescription>
              Esta es una alerta para mostrar información importante al usuario.
            </TestAlertDescription>
          </TestAlert>
          <TestAlert className="border-destructive/50 text-destructive">
            <TestAlertTitle>Alerta Destructiva</TestAlertTitle>
            <TestAlertDescription>
              Alerta para mostrar errores o acciones peligrosas.
            </TestAlertDescription>
          </TestAlert>
        </div>
      </section>

      <section>
        <TestHeading2>Colores del Tema</TestHeading2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Background", var: "--background" },
            { name: "Foreground", var: "--foreground" },
            { name: "Primary", var: "--primary" },
            { name: "Secondary", var: "--secondary" },
            { name: "Muted", var: "--muted" },
            { name: "Accent", var: "--accent" },
            { name: "Card", var: "--card" },
            { name: "Border", var: "--border" },
          ].map((color) => (
            <div key={color.name} className="rounded-lg border p-4">
              <div
                className="h-16 w-full rounded-md mb-2"
                style={{ backgroundColor: `var(${color.var})` }}
              />
              <p className="font-medium">{color.name}</p>
              <p className="text-sm text-muted-foreground font-mono">{color.var}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}