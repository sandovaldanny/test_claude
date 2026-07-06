'use client'

import React, { useState } from 'react'

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
  errorRed: '#E74C3C',
  successGreen: '#27AE60',
}

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrorMessage(data.message || 'Error al enviar el formulario')
      } else {
        setSuccessMessage('¡Mensaje enviado exitosamente! Nos contactaremos pronto.')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setErrorMessage('Error al conectar con el servidor')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: keralty.bgSoft }} id="contact">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', color: keralty.bluePrimary, textAlign: 'center' }}>
          Contáctanos
        </h2>
        <p style={{ textAlign: 'center', color: keralty.textMuted, marginBottom: '3rem', fontSize: '1rem', lineHeight: '1.6' }}>
          Completa el formulario y nos contactaremos en breve
        </p>

        <form onSubmit={handleSubmit} style={{ backgroundColor: keralty.white, padding: '2.5rem', borderRadius: '12px', boxShadow: keralty.shadowMd }}>
          {/* Nombre */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: keralty.bluePrimary, fontWeight: '600', fontSize: '0.95rem' }}>
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                borderRadius: '8px',
                border: `1px solid ${errors.name ? keralty.errorRed : keralty.border}`,
                fontSize: '1rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s',
              }}
            />
            {errors.name && (
              <p style={{ color: keralty.errorRed, fontSize: '0.85rem', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: keralty.bluePrimary, fontWeight: '600', fontSize: '0.95rem' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                borderRadius: '8px',
                border: `1px solid ${errors.email ? keralty.errorRed : keralty.border}`,
                fontSize: '1rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s',
              }}
            />
            {errors.email && (
              <p style={{ color: keralty.errorRed, fontSize: '0.85rem', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                {errors.email}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: keralty.bluePrimary, fontWeight: '600', fontSize: '0.95rem' }}>
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos tu pregunta o comentario..."
              rows={5}
              style={{
                width: '100%',
                padding: '0.875rem 1rem',
                borderRadius: '8px',
                border: `1px solid ${errors.message ? keralty.errorRed : keralty.border}`,
                fontSize: '1rem',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                resize: 'none',
                transition: 'border-color 0.3s',
              }}
            />
            {errors.message && (
              <p style={{ color: keralty.errorRed, fontSize: '0.85rem', marginTop: '0.5rem', margin: '0.5rem 0 0 0' }}>
                {errors.message}
              </p>
            )}
          </div>

          {/* Mensajes de estado */}
          {successMessage && (
            <div style={{ backgroundColor: '#D4EDDA', color: keralty.successGreen, padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: `1px solid #C3E6CB` }}>
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div style={{ backgroundColor: '#F8D7DA', color: keralty.errorRed, padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: `1px solid #F5C6CB` }}>
              {errorMessage}
            </div>
          )}

          {/* Botón */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.875rem 2rem',
              backgroundColor: isLoading ? keralty.textMuted : keralty.bluePrimary,
              color: keralty.white,
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s',
              opacity: isLoading ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#001F5C'
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = keralty.bluePrimary
              }
            }}
          >
            {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </section>
  )
}
