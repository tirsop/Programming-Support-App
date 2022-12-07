import express from 'express'
import tickets from '../controllers/ticketController.js'
import protectRoute from '../middleware/authMiddleware.js'
import noteRouter from './noteRoutes'

const router = express.Router()

router.route('/')
  .get(protectRoute, tickets.index)
  .post(protectRoute, tickets.createTickets)

router.route('/:id')
  .get(protectRoute, tickets.showTicket)
  .delete(protectRoute, tickets.destroyTicket)
  .put(protectRoute, tickets.updateTicket)

router.use('/:id/notes', noteRouter)


export default router