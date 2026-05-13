import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'

async function getSessionId() {
  const cookieStore = await cookies()
  return cookieStore.get('session')?.value
}

export async function PATCH(request: Request) {
  try {
    const sessionId = await getSessionId()
    if (!sessionId) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }

    const { taskIds } = await request.json()

    if (!Array.isArray(taskIds)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }

    await Promise.all(
      taskIds.map((taskId, index) =>
        prisma.task.update({
          where: { id: taskId, userId: sessionId },
          data: { order: index }
        })
      )
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Reorder tasks error:', error)
    return NextResponse.json({ error: 'Error al reordenar tareas' }, { status: 500 })
  }
}