import { createKysely } from '../lib/kysely'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export const kysely = createKysely()

export const db = drizzle(pool)
