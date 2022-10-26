import express from 'express'
import protectRoute from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/tickets')
  .get(protectRoute, tickets.index)
  .post(protectRoute, tickets.createTickets)


export default router