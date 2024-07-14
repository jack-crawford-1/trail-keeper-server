import express from 'express'
import { indexPage } from '../controllers/index.js'
import { getUsers, getUser, addUser, updateUser } from '../controllers/users.js'
import {
  getTrails,
  getTrail,
  addTrail,
  updateTrail,
} from '../controllers/trails.js'
import {
  getEvents,
  getEvent,
  addEvent,
  updateEvent,
} from '../controllers/events.js'
import {
  getMessages,
  getMessage,
  addMessage,
  updateMessage,
} from '../controllers/messages.js'
import {
  getVolunteers,
  getVolunteer,
  addVolunteer,
  updateVolunteer,
} from '../controllers/volunteers.js'
import {
  getTrailReports,
  getTrailReport,
  addTrailReport,
  updateTrailReport,
} from '../controllers/trailReports.js'
import {
  getTrainingModules,
  getTrainingModule,
  addTrainingModule,
  updateTrainingModule,
} from '../controllers/trainingModules.js'
import {
  getForumPosts,
  getForumPost,
  addForumPost,
  updateForumPost,
} from '../controllers/forumPosts.js'
import { signup, login } from '../controllers/auth.js'
import authMiddleware from '../middleware/authMiddleware.js'

import getWeather from '../controllers/getWeather.js'

const router = express.Router()

router.get('/', indexPage)

router.get('/users', authMiddleware, getUsers)
router.get('/trails', getTrails)
router.get('/events', getEvents)
router.get('/messages', getMessages)
router.get('/volunteers', getVolunteers)
router.get('/trail-reports', getTrailReports)
router.get('/training-modules', getTrainingModules)
router.get('/forum-posts', getForumPosts)
router.get('/weather', getWeather)

router.get('/user/:id', authMiddleware, getUser)
router.get('/trail/:id', getTrail)
router.get('/event/:id', getEvent)
router.get('/message/:id', getMessage)
router.get('/volunteer/:id', getVolunteer)
router.get('/trail-report/:id', getTrailReport)
router.get('/training-module/:id', getTrainingModule)
router.get('/forum-post/:id', getForumPost)

router.post('/user', addUser)
router.post('/trail', addTrail)
router.post('/event', addEvent)
router.post('/message', addMessage)
router.post('/volunteer', addVolunteer)
router.post('/trail-report', addTrailReport)
router.post('/training-module', addTrainingModule)
router.post('/forum-post', addForumPost)
router.post('/signup', signup)
router.post('/login', login)

router.patch('/user/:id', updateUser)
router.patch('/trail/:id', updateTrail)
router.patch('/event/:id', updateEvent)
router.patch('/message/:id', updateMessage)
router.patch('/trail-report/:id', updateTrailReport)
router.patch('/training-module/:id', updateTrainingModule)
router.patch('/volunteer/:id', updateVolunteer)
router.patch('/forum-post/:id', updateForumPost)

export default router
