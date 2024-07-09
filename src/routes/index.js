import express from 'express'
import { indexPage } from '../controllers/index.js'
import { getUsers, addUser } from '../controllers/users.js'
import { getEvents, addEvent } from '../controllers/events.js'
import { getMessages, addMessage } from '../controllers/messages.js'
import { getVolunteers, addVolunteer } from '../controllers/volunteers.js'
import { getTrailReports, addTrailReport } from '../controllers/trailReports.js'
import {
  getTrainingModules,
  addTrainingModule,
} from '../controllers/trainingModules.js'

import { getForumPosts, addForumPost } from '../controllers/forumPosts.js'

const router = express.Router()

router.get('/', indexPage)
router.get('/users', getUsers)
router.get('/events', getEvents)
router.get('/messages', getMessages)
router.get('/volunteers', getVolunteers)
router.get('/trail-reports', getTrailReports)
router.get('/training-modules', getTrainingModules)
router.get('/forum-posts', getForumPosts)

router.post('/user', addUser)
router.post('/event', addEvent)
router.post('/message', addMessage)
router.post('/volunteer', addVolunteer)
router.post('/trail-report', addTrailReport)
router.post('/training-module', addTrainingModule)
router.post('/forum-post', addForumPost)

// router.patch('/messages/:id', updateMessage)
// router.patch('/volunteers/:id', updateVolunteer)
// router.patch('/events/:id', updateEvent)
// router.patch('/trail_reports/:id', updateTrailReport)
// router.patch('/training_modules/:id', updateTrainingModule)
// router.patch('/forum_posts/:id', updateForumPost)

export default router
