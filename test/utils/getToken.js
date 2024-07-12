import request from 'supertest'
import app from '../../src/app.js'

// using User credentials from a "real" user stored on the database to test user routes
export const getToken = async () => {
  const testPassword = process.env.TEST_PASSWORD
  const testEmail = process.env.TEST_EMAIL
  const response = await request(app)
    .post('/v1/login')
    .send({ email: `${testEmail}`, password: `${testPassword}` })

  if (response.status !== 200) {
    throw new Error('Failed to obtain token')
  }

  return response.body.token
}
