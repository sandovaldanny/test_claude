import { NextResponse } from 'next/server'

export async function GET() {
  const timestamp = new Date().toISOString()

  return NextResponse.json({
    status: 'ok',
    message: 'API is healthy',
    timestamp,
    version: '1.0.0',
    service: 'test_claude',
  })
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
