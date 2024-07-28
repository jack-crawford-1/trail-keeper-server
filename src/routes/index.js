import express from 'express'

import { indexPage } from '../controllers/db/index.js'

import {
  getUsers,
  getUser,
  addUser,
  updateUser,
} from '../controllers/db/userController.js'

import {
  getTrails,
  getTrail,
  addTrail,
  updateTrail,
} from '../controllers/db/trailController.js'

import {
  getEvents,
  getEvent,
  addEvent,
  updateEvent,
} from '../controllers/db/eventController.js'

import {
  getMessages,
  getMessage,
  addMessage,
  updateMessage,
} from '../controllers/db/messageController.js'

import {
  getVolunteers,
  getVolunteer,
  addVolunteer,
  updateVolunteer,
} from '../controllers/db/volunteerController.js'

import {
  getTrailReports,
  getTrailReport,
  addTrailReport,
  updateTrailReport,
} from '../controllers/db/trailReportsController.js'

import {
  getTrainingModules,
  getTrainingModule,
  addTrainingModule,
  updateTrainingModule,
} from '../controllers/db/trainingModuleController.js'

import {
  getForumPosts,
  getForumPost,
  addForumPost,
  updateForumPost,
} from '../controllers/db/forumPostController.js'

import { signup, login } from '../controllers/db/authController.js'

import authMiddleware from '../middleware/authMiddleware.js'

import {
  getComment,
  addComment,
  updateComment,
  getComments,
} from '../controllers/db/commentController.js'

import getCurrentWeather from '../controllers/getCurrentWeather.js'
import getSevenDayWeather from '../controllers/getSevenDayWeather.js'
import getGeoJson from '../controllers/getGeoJson.js'
import getDocTrack from '../controllers/getDocTrack.js'
import getAllTracks from '../controllers/getAllTracks.js'
import getTopo from '../controllers/getTopo.js'
import getTracksByRegion from '../controllers/getTracksByRegion.js'

const router = express.Router()

router.get('/', indexPage)

router.get('/getTopo/:zoom/:x/:y', getTopo)
router.get('/geojson', getGeoJson)
router.get('/comments', getComments)
router.post('/comments', addComment)
router.get('/comments/:id', getComment)
router.patch('/comments/:id', updateComment)

router.get('/users', authMiddleware, getUsers)
router.get('/trails', getTrails)
router.get('/events', getEvents)
router.get('/messages', getMessages)
router.get('/volunteers', getVolunteers)
router.get('/trail-reports', getTrailReports)
router.get('/training-modules', getTrainingModules)
router.get('/forum-posts', getForumPosts)
router.get('/weather', getCurrentWeather)
router.get('/weatherseven', getSevenDayWeather)
router.get('/all-doc-tracks', getAllTracks)
router.get('/tracks-by-region/:regionId', getTracksByRegion)

router.get('/user/:id', authMiddleware, getUser)
router.get('/trail/:id', getTrail)
router.get('/event/:id', getEvent)
router.get('/message/:id', getMessage)
router.get('/volunteer/:id', getVolunteer)
router.get('/trail-report/:id', getTrailReport)
router.get('/training-module/:id', getTrainingModule)
router.get('/forum-post/:id', getForumPost)
router.get('/doc-track/:id', getDocTrack)

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
