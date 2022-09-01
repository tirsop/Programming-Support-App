import express from 'express'
import users from '../controllers/userController.js'
import protectRoute from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
  .post(users.registerUser)

router.route('/login')
  .post(users.loginUser)

router.route('/me')
  .get(protectRoute, users.getMe)

export default router

