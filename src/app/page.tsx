import React from 'react'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', backgroundColor: '#f8f9fa' }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
          test_claude
        </h1>

        <p style={{ fontSize: '1.125rem', color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
          Proyecto Next.js completo con frontend y backend API
        </p>

        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'left' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#333' }}>
            Stack Tecnológico
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '0.5rem 0', color: '#555' }}>✓ Next.js 15</li>
            <li style={{ padding: '0.5rem 0', color: '#555' }}>✓ React 19</li>
            <li style={{ padding: '0.5rem 0', color: '#555' }}>✓ TypeScript</li>
            <li style={{ padding: '0.5rem 0', color: '#555' }}>✓ Node.js 18+</li>
          </ul>
        </div>

        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e3f2fd', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
          <p style={{ color: '#1976d2', margin: 0, fontSize: '0.875rem' }}>
            <strong>API Endpoint:</strong> GET /api/health
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <a href="/api/health" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', backgroundColor: '#2196f3', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold', transition: 'background-color 0.3s' }}>
            Probar API
          </a>
        </div>
      </div>
    </main>
  )
}
