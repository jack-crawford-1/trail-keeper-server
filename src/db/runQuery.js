import dotenv from 'dotenv'
import { dropTables, createTables, insertIntoTables } from './queryFunctions.js'

dotenv.config()

;(async () => {
  try {
    await dropTables()
    await createTables()
    await insertIntoTables()
    console.log('Tables created and data inserted successfully.')
  } catch (error) {
    console.error('Error running queries:', error)
  }
})()
