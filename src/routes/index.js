import express from 'express'
import { indexPage } from '../controllers/index.js'
import { getUsers, getUser, addUser, updateUser } from '../controllers/users.js'
import {
  getTrails,
  getTrail,
  addTrail,
  updateTrail,
} from '../controllers/trails.js'
import { getEvents, getEvent, addEvent } from '../controllers/events.js'
import { getMessages, addMessage } from '../controllers/messages.js'
import {
  getVolunteers,
  getVolunteer,
  addVolunteer,
} from '../controllers/volunteers.js'
import {
  getTrailReports,
  getTrailReport,
  addTrailReport,
} from '../controllers/trailReports.js'
import {
  getTrainingModules,
  addTrainingModule,
} from '../controllers/trainingModules.js'

import { getForumPosts, addForumPost } from '../controllers/forumPosts.js'

const router = express.Router()

router.get('/', indexPage)
router.get('/users', getUsers)
router.get('/trails', getTrails)
router.get('/events', getEvents)
router.get('/messages', getMessages)
router.get('/volunteers', getVolunteers)
router.get('/trail-reports', getTrailReports)
router.get('/training-modules', getTrainingModules)
router.get('/forum-posts', getForumPosts)

router.get('/user/:id', getUser)
router.get('/trail/:id', getTrail)
router.get('/event/:id', getEvent)
router.get('/trail-report/:id', getTrailReport)
router.get('/volunteer/:id', getVolunteer)

router.post('/user', addUser)
router.post('/trail', addTrail)
router.post('/event', addEvent)
router.post('/message', addMessage)
router.post('/volunteer', addVolunteer)
router.post('/trail-report', addTrailReport)
router.post('/training-module', addTrainingModule)
router.post('/forum-post', addForumPost)

router.patch('/user/:id', updateUser)
router.patch('/trail/:id', updateTrail)
// router.patch('/messages/:id', updateMessage)
// router.patch('/volunteers/:id', updateVolunteer)
// router.patch('/events/:id', updateEvent)
// router.patch('/trail_reports/:id', updateTrailReport)
// router.patch('/training_modules/:id', updateTrainingModule)
// router.patch('/forum_posts/:id', updateForumPost)

export default router
