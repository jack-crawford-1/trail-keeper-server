import { expect } from 'chai'
import request from 'supertest'
import nock from 'nock'
import app from '../src/app.js'

const mockEvent = {
  id: 1,
  user_id: 1,
  title: 'Trail Cleanup',
  description: 'Cleaning the main trail',
  date: '2024-08-14T12:00:00.000Z',
  location: 'Main Trail',
}

describe('Event page test', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/v1/event/1')
      .reply(200, { events: [mockEvent] })
  })

  afterEach(() => {
    nock.cleanAll()
  })

  it('gets a single event', (done) => {
    request(app)
      .get('/v1/event/1')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('events').that.is.an('array')
        expect(res.body.events[0]).to.include.keys(
          'id',
          'user_id',
          'title',
          'description',
          'date',
          'location'
        )
        done()
      })
  })
})
