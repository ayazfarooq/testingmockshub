'use client'

import { FormEvent, useState } from 'react'
import { getSupabase } from '@/lib/supabase/client'

export function LoginForm() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const data = new FormData(event.currentTarget)

    try {
      const supabase = getSupabase()
      const { error } = await supabase.auth.signInWithPassword({
        email: String(data.get('email')),
        password: String(data.get('password')),
      })
      setMessage(error ? error.message : 'You are signed in.')
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Unable to sign in.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="authCard">
      <p className="eyebrow">Welcome back</p><h1>Login</h1>
      <p>Continue your ISTQB practice and track your progress.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="password">Password</label><input id="password" name="password" type="password" autoComplete="current-password" required />
        <button className="primaryButton" disabled={loading} type="submit">{loading ? 'Signing in…' : 'Sign in'}</button>
      </form>
      {message && <p className="formMessage" role="status">{message}</p>}
    </section>
  )
}
