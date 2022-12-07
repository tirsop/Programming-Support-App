import express from 'express'
import protectRoute from '../middleware/authMiddleware.js'
import notes from '../controllers/noteController.js'

const router = express.Router({ mergeParams: true })

router.route('/')
  .get(protectRoute, notes.index)


export default router
