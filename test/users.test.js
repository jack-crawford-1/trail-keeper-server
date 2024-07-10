import { expect } from 'chai'
import request from 'supertest'
import nock from 'nock'
import app from '../src/app.js'

const mockUser = {
  id: 1,
  name: 'James',
  email: 'jimmy@yahoo.com',
}

describe('User page test', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/v1/user/1')
      .reply(200, { users: [mockUser] })
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('gets a single user', (done) => {
    request(app)
      .get('/v1/user/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('users').that.is.an('array')
        expect(res.body.users[0]).to.include.keys('id', 'name', 'email')
        done()
      })
  })
})
