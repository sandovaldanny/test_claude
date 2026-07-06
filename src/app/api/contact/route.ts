import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { message: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    if (body.name.trim().length < 3) {
      return NextResponse.json(
        { message: 'El nombre debe tener al menos 3 caracteres' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { message: 'El email no es válido' },
        { status: 400 }
      )
    }

    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { message: 'El mensaje debe tener al menos 10 caracteres' },
        { status: 400 }
      )
    }

    // Aquí iría lógica para guardar/procesar el formulario
    // Por ejemplo: guardar en base de datos, enviar email, etc.

    return NextResponse.json(
      {
        status: 'success',
        message: 'Formulario recibido correctamente',
        data: {
          name: body.name,
          email: body.email,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Error al procesar el formulario' },
      { status: 500 }
    )
  }
}
