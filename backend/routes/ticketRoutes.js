import express from 'express'
import tickets from '../controllers/ticketController.js'
import protectRoute from '../middleware/authMiddleware.js'


const router = express.Router()

router.route('/')
  .get(protectRoute, tickets.index)
  .post(protectRoute, tickets.createTickets)

router.route('/:id')
  .get(protectRoute, tickets.showTicket)


export default router