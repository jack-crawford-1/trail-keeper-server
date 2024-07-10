import { expect } from 'chai'
import { server, BASE_URL } from './setup.js'

describe('Index page test', () => {
  it('gets base url', (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('API up and running')
        done()
      })
  })
})
