import express from 'express'
import { indexPage } from '../controllers/index.js'
import { usersPage, addUser } from '../controllers/users.js'

const router = express.Router()

router.get('/', indexPage)
router.get('/users', usersPage)
router.post('/users', addUser)

export default router
