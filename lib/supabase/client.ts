import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (supabaseClient) return supabaseClient

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
  }

  supabaseClient = createClient(supabaseUrl, supabaseKey)
  return supabaseClient
}

// Export a getter that initializes on first access
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase: SupabaseClient = new Proxy({} as any, {
  get: (target, prop) => {
    const client = getSupabase()
    return Reflect.get(client, prop)
  },
}) as SupabaseClient