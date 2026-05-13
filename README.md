# Next.js Task Manager

A task management web application built with Next.js 16 (App Router). This project provides a robust interface for organizing, tracking, and managing tasks efficiently, featuring a custom authentication system and interactive drag-and-drop capabilities.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Database:** PostgreSQL (hosted on Supabase)
- **ORM:** Prisma
- **Authentication:** Custom Auth with `bcryptjs` and HTTP-only signed cookies
- **Styling & UI:** Tailwind CSS, shadcn/ui
- **Interactions:** `@dnd-kit/core` for Drag & Drop

## Features & Current Progress

We are currently building out the core features defined in the project specification.

### ✅ Completed
- Project initialization and dependency setup.
- Database modeling (`User` and `Task`) and synchronization with Supabase via Prisma.
- Custom Authentication API (Register, Login, Logout, Session check).
- Authentication UI (Login and Register pages).

### 🚧 In Progress / Pending
- **Tasks API:** Endpoints for CRUD operations, filtering, sorting, and reordering.
- **Dashboard UI:** Main interface including a Sidebar action panel for filters.
- **Interactive Task List:** Implementing drag-and-drop reordering with `@dnd-kit`.
- **UI Polish:** Adjusting shadcn components and applying the designated color palette.
- **Testing & Deployment:** Vercel deployment setup.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
