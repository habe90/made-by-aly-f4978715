import pg from 'pg'
const { Pool } = pg
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required')
const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.NODE_ENV==='production' ? { rejectUnauthorized:false } : false })
await pool.query(`CREATE TABLE IF NOT EXISTS newsletter_subscribers (
 id BIGSERIAL PRIMARY KEY,
 email TEXT UNIQUE NOT NULL,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`)
await pool.end()
console.log('Database migration complete')
