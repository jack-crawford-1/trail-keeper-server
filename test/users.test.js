import { expect } from 'chai'
import request from 'supertest'
import nock from 'nock'
import app from '../src/app.js'
import { getToken } from './utils/getToken.js'

const mockUser = {
  id: 1,
  name: 'James',
  email: 'jimmy@yahoo.com',
}

const mockUsers = [
  {
    id: 1,
    name: 'James',
    email: 'jimmy@yahoo.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'john123@xtra.com',
  },
]

describe('Users page test', () => {
  let token

  before(async () => {
    token = await getToken()
  })

  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/v1/user/1')
      .reply(200, { users: mockUser })
      .get('/v1/users')
      .reply(200, { users: mockUsers })
      .post('/v1/users')
      .reply(200, { users: mockUser })
      .patch('/v1/user/1')
      .reply(200, { users: mockUser })
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('gets a single user', (done) => {
    request(app)
      .get('/v1/user/1')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('users').that.is.an('array')
        expect(res.body.users[0]).to.include.keys('id', 'name', 'email')
        done()
      })
  })
  it('gets multiple users', (done) => {
    request(app)
      .get('/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('users').that.is.an('array')
        expect(res.body.users[0]).to.include.keys('name', 'email')
        expect(res.body.users[1]).to.include.keys('name', 'email')
        done()
      })
  })
  it('adds a new user', (done) => {
    request(app)
      .post('/v1/user')
      .send({ name: 'James', email: 'jimmy@yahoo.com' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('users').that.is.an('array')
        expect(res.body.users[0]).to.include.keys('id', 'name', 'email')
        done()
      })
  })
  it('updates a user', (done) => {
    request(app)
      .patch('/v1/user/1')
      .send({ name: 'James', email: 'jimmy@yahoo.com' })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('users').that.is.an('array')
        expect(res.body.users[0]).to.include.keys('id', 'name', 'email')
        done()
      })
  })
  it('shows a 401 error when not logged in', (done) => {
    request(app)
      .get('/v1/user/1')
      .expect(401)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(401)
        expect(res.body).to.have.property('error').that.is.a('string')
        done()
      })
  })
})
