# Design System - Task Manager

## Colores

### Paleta Taupe/Beige
| Token | Light Mode | Dark Mode |
|-------|------------|-----------|
| `background` | #e9e4d8 | #141414 |
| `foreground` | #1e1e1e | #e8e3da |
| `card` | #f4efe4 | #1c1c1c |
| `card-foreground` | #1e1e1e | #e8e3da |
| `primary` | #2e2e2e | #d1cfc0 |
| `primary-foreground` | #e6e4d7 | #363636 |
| `secondary` | #d8d2c4 | #222222 |
| `muted` | #cfc8b8 | #2a2a2a |
| `muted-foreground` | #5e5a52 | #8e8a83 |
| `accent` | #e6e4d7 | #363636 |
| `destructive` | #dc2626 | #ef4444 |
| `border` | #d2cbbb | #2c2c2c |

## Tipografía

| Token | Valor | Uso |
|-------|-------|-----|
| `font-sans` | Inter | Texto general |
| `font-heading` | Instrument Serif | Titulares (font-normal) |
| `font-mono` | JetBrains Mono | Código |

### Headings
```tsx
// H1
<h1 className="text-4xl font-normal font-heading">Título</h1>
// H2
<h2 className="text-3xl font-normal font-heading">Título</h2>
// H3
<h3 className="text-2xl font-normal font-heading">Título</h3>
// H4
<h4 className="text-xl font-normal font-heading">Título</h4>
// Hero responsive - gradual desde móvil hasta desktop
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-heading">Título</h1>
```

## Reglas

1. Usar clases Tailwind con tokens CSS
2. Soporte dark mode con `.dark`
3. Focus states: `focus-visible:ring-2 focus-visible:ring-ring`
4. Contenedor: `max-w-7xl mx-auto w-full`
5. NO usar colores fuera de la paleta - mantener diseño minimalista sin acentos de color extra

## Componentes Base

```tsx
// Card
<div className="rounded-xl border bg-card text-card-foreground shadow">

// Botón
<button className="bg-primary text-primary-foreground hover:bg-primary/90">

// Input
<input className="border border-input bg-background focus-visible:ring-ring">
```