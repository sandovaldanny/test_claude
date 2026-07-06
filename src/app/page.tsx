'use client'

import React from 'react'
import Image from 'next/image'
import ContactForm from './components/ContactForm'

const keralty = {
  bluePrimary: '#002F87',
  blueDeep: '#002E58',
  blueMid: '#0071CE',
  blueLight: '#3E8EDE',
  cyan: '#00B4E3',
  greenTeal: '#00B288',
  white: '#FFFFFF',
  sand: '#DCD5CB',
  bgSoft: '#F5F7FB',
  textMuted: '#5A6B85',
  border: '#E2E6EF',
  shadowMd: '0 2px 8px rgba(0, 47, 135, 0.08)',
  shadowLg: '0 4px 16px rgba(0, 47, 135, 0.12)',
}

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: keralty.white, fontFamily: "'Open Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ padding: '2rem', backgroundColor: keralty.bluePrimary, color: keralty.white, boxShadow: keralty.shadowMd }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Image
              src="/images/keralty-logo.png"
              alt="Keralty"
              width={40}
              height={40}
              style={{ height: '40px', width: 'auto' }}
            />
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: '700', margin: 0, color: keralty.white }}>
                test_claude
              </h1>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', fontSize: '0.95rem' }}>
            <a href="#features" style={{ color: keralty.white, textDecoration: 'none', fontWeight: '500' }}>Características</a>
            <a href="#api" style={{ color: keralty.white, textDecoration: 'none', fontWeight: '500' }}>API</a>
            <a href="#contact" style={{ color: keralty.white, textDecoration: 'none', fontWeight: '500' }}>Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', backgroundColor: keralty.bgSoft }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: keralty.bluePrimary }}>
            Plataforma Next.js con Branding Keralty
          </h2>
          <p style={{ fontSize: '1.125rem', color: keralty.textMuted, marginBottom: '2rem', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Proyecto completo demostrando integración de frontend, backend API y branding corporativo profesional para aplicaciones de salud.
          </p>
          <a href="#api" style={{ display: 'inline-block', padding: '0.875rem 2rem', backgroundColor: keralty.bluePrimary, color: keralty.white, textDecoration: 'none', borderRadius: '8px', fontWeight: '600', transition: 'background-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#001F5C')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = keralty.bluePrimary)}>
            Probar API →
          </a>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section style={{ padding: '4rem 2rem', backgroundColor: keralty.white }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: keralty.bluePrimary, textAlign: 'center' }}>
            Stack Tecnológico
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: keralty.bgSoft, padding: '2rem', borderRadius: '12px', boxShadow: keralty.shadowMd, textAlign: 'center', borderTop: `4px solid ${keralty.bluePrimary}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: keralty.bluePrimary, marginBottom: '1rem' }}>Frontend</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: keralty.textMuted, fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0' }}>✓ Next.js 15</li>
                <li style={{ padding: '0.5rem 0' }}>✓ React 19</li>
                <li style={{ padding: '0.5rem 0' }}>✓ TypeScript</li>
              </ul>
            </div>
            <div style={{ backgroundColor: keralty.bgSoft, padding: '2rem', borderRadius: '12px', boxShadow: keralty.shadowMd, textAlign: 'center', borderTop: `4px solid ${keralty.greenTeal}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: keralty.greenTeal, marginBottom: '1rem' }}>Backend</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: keralty.textMuted, fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0' }}>✓ API Routes</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Health Check</li>
                <li style={{ padding: '0.5rem 0' }}>✓ REST API</li>
              </ul>
            </div>
            <div style={{ backgroundColor: keralty.bgSoft, padding: '2rem', borderRadius: '12px', boxShadow: keralty.shadowMd, textAlign: 'center', borderTop: `4px solid ${keralty.cyan}` }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: keralty.cyan, marginBottom: '1rem' }}>DevOps</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: keralty.textMuted, fontSize: '0.95rem' }}>
                <li style={{ padding: '0.5rem 0' }}>✓ Node.js 18+</li>
                <li style={{ padding: '0.5rem 0' }}>✓ npm 9+</li>
                <li style={{ padding: '0.5rem 0' }}>✓ Git + GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section style={{ padding: '4rem 2rem', backgroundColor: keralty.bgSoft }} id="features">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: keralty.bluePrimary, textAlign: 'center' }}>
            Características
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: keralty.white, borderRadius: '12px', boxShadow: keralty.shadowMd, borderLeft: `4px solid ${keralty.bluePrimary}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: keralty.bluePrimary, marginBottom: '0.75rem' }}>🚀 Rendimiento</h3>
              <p style={{ color: keralty.textMuted, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Optimizado con Next.js para máximo rendimiento y velocidad de carga
              </p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: keralty.white, borderRadius: '12px', boxShadow: keralty.shadowMd, borderLeft: `4px solid ${keralty.greenTeal}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: keralty.greenTeal, marginBottom: '0.75rem' }}>🔒 Type Safe</h3>
              <p style={{ color: keralty.textMuted, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                TypeScript con configuración strict para código más seguro y confiable
              </p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: keralty.white, borderRadius: '12px', boxShadow: keralty.shadowMd, borderLeft: `4px solid ${keralty.cyan}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: keralty.cyan, marginBottom: '0.75rem' }}>🌐 API Moderna</h3>
              <p style={{ color: keralty.textMuted, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Endpoints REST con manejo de errores y respuestas JSON estructuradas
              </p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: keralty.white, borderRadius: '12px', boxShadow: keralty.shadowMd, borderLeft: `4px solid ${keralty.blueMid}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: keralty.blueMid, marginBottom: '0.75rem' }}>📚 Documentado</h3>
              <p style={{ color: keralty.textMuted, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                CLAUDE.md con guía completa, flujo Git y solución de problemas
              </p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: keralty.white, borderRadius: '12px', boxShadow: keralty.shadowMd, borderLeft: `4px solid ${keralty.blueLight}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: keralty.blueLight, marginBottom: '0.75rem' }}>⚡ Desarrollo Rápido</h3>
              <p style={{ color: keralty.textMuted, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Hot reload en desarrollo, build rápido y deploy simplificado
              </p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: keralty.white, borderRadius: '12px', boxShadow: keralty.shadowMd, borderLeft: `4px solid ${keralty.greenTeal}` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: keralty.greenTeal, marginBottom: '0.75rem' }}>🎯 Production Ready</h3>
              <p style={{ color: keralty.textMuted, margin: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                Configuración lista para producción con linting y type checking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoint */}
      <section style={{ padding: '4rem 2rem', backgroundColor: keralty.white }} id="api">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '3rem', color: keralty.bluePrimary, textAlign: 'center' }}>
            Endpoint API
          </h2>
          <div style={{ backgroundColor: keralty.bgSoft, padding: '2.5rem', borderRadius: '12px', boxShadow: keralty.shadowMd }}>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ margin: '0 0 0.75rem 0', color: keralty.textMuted, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Endpoint</p>
              <code style={{ display: 'block', backgroundColor: keralty.white, padding: '1rem', borderRadius: '8px', color: keralty.bluePrimary, fontFamily: 'monospace', fontWeight: '600', fontSize: '1rem', border: `1px solid ${keralty.border}` }}>
                GET /api/health
              </code>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ margin: '0 0 0.75rem 0', color: keralty.textMuted, fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Respuesta de Éxito (200)</p>
              <code style={{ display: 'block', backgroundColor: keralty.white, padding: '1rem', borderRadius: '8px', color: keralty.blueDeep, fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6', overflow: 'auto', border: `1px solid ${keralty.border}` }}>
                {`{
  "status": "ok",
  "message": "API is healthy",
  "timestamp": "2026-05-18T14:30:00.000Z",
  "version": "1.0.0",
  "service": "test_claude"
}`}
              </code>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="/api/health" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', backgroundColor: keralty.greenTeal, color: keralty.white, textDecoration: 'none', borderRadius: '8px', fontWeight: '600', transition: 'background-color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#009270')} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = keralty.greenTeal)}>
                Probar API →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer style={{ padding: '3rem 2rem', backgroundColor: keralty.bluePrimary, color: keralty.white, textAlign: 'center', fontSize: '0.875rem', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.7 }}>Proyecto</h4>
            <p style={{ margin: 0, lineHeight: '1.6', fontSize: '0.9rem' }}>test_claude es un proyecto Next.js completo con branding corporativo de Keralty</p>
          </div>
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.7 }}>Enlaces</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="https://github.com/sandovaldanny/test_claude" style={{ color: keralty.cyan, textDecoration: 'none', fontSize: '0.9rem' }}>GitHub</a></li>
              <li><a href="/api/health" style={{ color: keralty.cyan, textDecoration: 'none', fontSize: '0.9rem' }}>API Health</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.7 }}>Tecnología</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>Next.js 15 • React 19 • TypeScript</p>
          </div>
        </div>
        <div style={{ borderTop: `1px solid rgba(255, 255, 255, 0.2)`, paddingTop: '2rem' }}>
          <p style={{ margin: 0, opacity: 0.8 }}>© 2026 test_claude | Desarrollado con Keralty Branding</p>
        </div>
      </footer>
    </main>
  )
}
