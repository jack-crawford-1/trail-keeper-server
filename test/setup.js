import supertest from 'supertest'
import app from '../src/app.js'

export const server = supertest.agent(app)
export const BASE_URL = '/v1'
