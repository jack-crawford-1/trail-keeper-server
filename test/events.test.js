import { expect } from 'chai'
import request from 'supertest'
import nock from 'nock'
import app from '../src/app.js'

const mockEvent = {
  id: 1,
  user_id: 1,
  title: 'Dummy Event',
  description: 'This is a dummy event',
  date: '2024-08-14T12:00:00.000Z',
  location: 'City',
}

const mockEvents = [
  {
    id: 1,
    user_id: 1,
    title: 'Dummy Event 1',
    description: 'Dummy event description 1',
    date: '2024-08-14T12:00:00.000Z',
    location: 'Park',
  },
  {
    id: 2,
    user_id: 1,
    title: 'Dummy Event 2',
    description: 'Dummy event description 2',
    date: '2024-08-14T12:00:00.000Z',
    location: 'Beach',
  },
]

describe('Event page test', () => {
  beforeEach(() => {
    nock('http://localhost:3000')
      .get('/v1/event/1')
      .reply(200, { events: [mockEvent] })
      .get('/v1/events')
      .reply(200, { events: [mockEvents] })
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
  it('gets a multiple events', (done) => {
    request(app)
      .get('/v1/events')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('events').that.is.an('array')
        expect(res.body.events[0]).to.include.keys(
          'title',
          'description',
          'date',
          'location'
        )
        expect(res.body.events[1]).to.include.keys(
          'title',
          'description',
          'date',
          'location'
        )
        done()
      })
  })
})
