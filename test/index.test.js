import { expect } from 'chai'
import nock from 'nock'
import app from '../src/app.js'
import request from 'supertest'

describe('Index page test', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/v1')
      .reply(200, { message: 'Server connected' })
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('gets base url', (done) => {
    request(app)
      .get('/v1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal({ message: 'API up and running' })
        done()
      })
  })
})
