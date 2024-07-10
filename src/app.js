import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import router from '../src/routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/v1', router)

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack })
})

export default app
