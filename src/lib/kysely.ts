import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

export function createKysely() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })

  return new Kysely({
    dialect: new PostgresDialect({
      pool,
    }),
  })
}
