import React from 'react'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1a1a1a' }}>
            test_claude
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: 0, lineHeight: '1.6' }}>
            Proyecto Next.js completo con frontend y backend API integrado
          </p>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1a1a1a', textAlign: 'center' }}>
            Stack Tecnológico
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2196f3', marginBottom: '0.5rem' }}>Frontend</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.25rem 0' }}>✓ Next.js 15</li>
                <li style={{ padding: '0.25rem 0' }}>✓ React 19</li>
                <li style={{ padding: '0.25rem 0' }}>✓ TypeScript</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#ff9800', marginBottom: '0.5rem' }}>Backend</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.25rem 0' }}>✓ API Routes</li>
                <li style={{ padding: '0.25rem 0' }}>✓ Health Check</li>
                <li style={{ padding: '0.25rem 0' }}>✓ REST API</li>
              </ul>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4caf50', marginBottom: '0.5rem' }}>DevOps</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#555', fontSize: '0.95rem' }}>
                <li style={{ padding: '0.25rem 0' }}>✓ Node.js 18+</li>
                <li style={{ padding: '0.25rem 0' }}>✓ npm 9+</li>
                <li style={{ padding: '0.25rem 0' }}>✓ Git + GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1a1a1a', textAlign: 'center' }}>
            Características
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', borderLeft: '4px solid #2196f3', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>🚀 Rendimiento</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                Optimizado con Next.js para máximo rendimiento y velocidad de carga
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderLeft: '4px solid #ff9800', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>🔒 Type Safe</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                TypeScript con configuración strict para código más seguro y confiable
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderLeft: '4px solid #4caf50', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>🌐 API Moderna</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                Endpoints REST con manejo de errores y respuestas JSON estructuradas
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderLeft: '4px solid #9c27b0', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>📚 Documentado</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                CLAUDE.md con guía completa, flujo Git y solución de problemas
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderLeft: '4px solid #f44336', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>⚡ Desarrollo Rápido</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                Hot reload en desarrollo, build rápido y deploy simplificado
              </p>
            </div>
            <div style={{ padding: '1.5rem', borderLeft: '4px solid #00bcd4', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>🎯 Production Ready</h3>
              <p style={{ color: '#666', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                Configuración lista para producción con linting y type checking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoint */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1a1a1a', textAlign: 'center' }}>
            API Disponible
          </h2>
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Endpoint</p>
              <code style={{ display: 'block', backgroundColor: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', color: '#2196f3', fontFamily: 'monospace', fontWeight: 'bold', fontSize: '1rem' }}>
                GET /api/health
              </code>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Respuesta</p>
              <code style={{ display: 'block', backgroundColor: '#f5f5f5', padding: '0.75rem', borderRadius: '4px', color: '#333', fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: '1.5', overflow: 'auto' }}>
                {`{
  "status": "ok",
  "message": "API is healthy",
  "timestamp": "2026-05-18T...",
  "version": "1.0.0"
}`}
              </code>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/api/health" style={{ display: 'inline-block', padding: '0.75rem 2rem', backgroundColor: '#2196f3', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', transition: 'background-color 0.3s' }}>
                Probar API →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', backgroundColor: '#333', color: '#999', textAlign: 'center', fontSize: '0.875rem' }}>
        <p style={{ margin: 0, marginBottom: '0.5rem' }}>test_claude © 2026 | Proyecto Next.js con Claude Code</p>
        <p style={{ margin: 0 }}>
          <a href="https://github.com/sandovaldanny/test_claude" style={{ color: '#2196f3', textDecoration: 'none' }}>Ver en GitHub</a>
          {' • '}
          <a href="/api/health" style={{ color: '#2196f3', textDecoration: 'none' }}>API Health</a>
        </p>
      </footer>
    </main>
  )
}
