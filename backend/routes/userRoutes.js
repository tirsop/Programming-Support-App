import express from 'express'
import users from '../controllers/userController.js'

const router = express.Router()

router.route('/')
  .post(users.registerUser)

router.route('/login')
  .post(users.loginUser)

export default router

