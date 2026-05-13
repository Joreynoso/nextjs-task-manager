import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

async function getSessionId() {
  const cookieStore = await cookies()
  return cookieStore.get('session')?.value
}

export async function GET(request: Request) {
  try {
    const sessionId = await getSessionId()
    if (!sessionId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const sort = searchParams.get('sort') || 'recent'
    const status = searchParams.get('status')

    const where: Record<string, unknown> = { userId: sessionId }
    if (status) {
      where.status = status
    }

    let orderBy: Record<string, string> | Record<string, string>[] = {}
    switch (sort) {
      case 'oldest':
        orderBy = { createdAt: 'asc' }
        break
      case 'status':
        orderBy = [
          { status: 'asc' },
          { order: 'asc' }
        ]
        break
      case 'custom':
        orderBy = { order: 'asc' }
        break
      case 'recent':
      default:
        orderBy = { createdAt: 'desc' }
    }

    const tasks = await prisma.task.findMany({
      where,
      orderBy,
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        order: true,
        createdAt: true
      }
    })

    return NextResponse.json({ tasks })
  } catch (error) {
    console.error('Get tasks error:', error)
    return NextResponse.json({ error: 'Error al obtener tareas' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const sessionId = await getSessionId()
    if (!sessionId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { title, description } = await request.json()

    if (!title) {
      return NextResponse.json({ error: 'El título es requerido' }, { status: 400 })
    }

    const lastTask = await prisma.task.findFirst({
      where: { userId: sessionId },
      orderBy: { order: 'desc' }
    })

    const task = await prisma.task.create({
      data: {
        userId: sessionId,
        title,
        description: description || null,
        order: lastTask ? lastTask.order + 1 : 0
      }
    })

    return NextResponse.json({ task })
  } catch (error) {
    console.error('Create task error:', error)
    return NextResponse.json({ error: 'Error al crear tarea' }, { status: 500 })
  }
}