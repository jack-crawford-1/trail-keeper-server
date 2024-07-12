import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
})

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

export { pool }
