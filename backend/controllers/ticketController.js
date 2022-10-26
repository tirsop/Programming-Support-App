import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"
import Ticket from "../models/ticketModel.js"


const tickets = {
  index: asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'gettickets' })
  }),

  createTickets: asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'createtickets' })
  })
}

export default tickets