import { expect } from 'chai'
import { server, BASE_URL } from './setup.js'

const mockData = {
  messages: [
    {
      title: 'Trail Cleanup',
      description: 'Cleaning the main trail',
      date: '2024-08-14T12:00:00.000Z',
      location: 'Main Trail',
    },
    {
      title: 'Volunteer Meetup',
      description: 'Meeting for volunteers',
      date: '2024-08-31T12:00:00.000Z',
      location: 'Community Center',
    },
  ],
}

const mockEvent = {
  events: [
    {
      id: 1,
      title: 'Trail Cleanup',
      description: 'Cleaning the main trail',
      date: '2024-08-14T12:00:00.000Z',
      location: 'Main Trail',
      user_id: 1,
    },
  ],
}

describe('events page test', () => {
  it('gets events', (done) => {
    server
      .get(`${BASE_URL}/events`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal(mockData)
        done()
      })
  })
  it('gets single event', (done) => {
    server
      .get(`${BASE_URL}/event/1`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.status).to.equal(200)
        expect(res.body).to.deep.equal(mockEvent)
        done()
      })
  })
})
