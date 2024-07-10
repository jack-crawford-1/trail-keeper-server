import { expect } from 'chai'
import { server, BASE_URL } from './setup.js'

const mockData = {
  messages: [
    { name: 'Alice', email: 'aaa@gmail.com' },
    { name: 'Bob', email: 'bbb@gmail.com' },
  ],
}

const mockUser = {
  users: [
    {
      id: 1,
      name: 'Alice',
      email: 'aaa@gmail.com',
    },
  ],
}

describe('Users page test', () => {
  it('gets users', (done) => {
    server
      .get(`${BASE_URL}/users`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal(mockData)
        done()
      })
  })
})

describe('User page test', () => {
  it('gets user', (done) => {
    server
      .get(`${BASE_URL}/user/1`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal(mockUser)
        done()
      })
  })
})
