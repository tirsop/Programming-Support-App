import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"
import Ticket from "../models/ticketModel.js"


const tickets = {
  index: asyncHandler(async (req, res) => {
    // since it's a protectedRoute, we set the req.user in the authModdleware.js.
    // thanks to that, we can now access the user
    const user = await User.findById(req.user.id)
    if (!user) {
      res.status(401)   // Un-authorized
      throw new Error('User not found')
    }
    const tickets = await Ticket.find({ user: req.user.id })
    res.status(200).json(tickets)
  }),





  createTickets: asyncHandler(async (req, res) => {
    // validate all the fields
    const { product, description } = req.body
    if (!product || !description) {
      res.status(400)   // Bad Request
      throw new Error("Please include all fields.")
    }
    const user = await User.findById(req.user.id)   // lines 8, 9
    if (!user) {
      res.status(401)   // Un-authorized
      throw new Error('User not found')
    }
    // create the ticket. The status is set by default to 'new' in the model
    const ticket = new Ticket({
      product,
      description,
      user: user._id
    })
    await ticket.save()
    res.status(201).json(ticket)
  }),




  // @desc get 1 user's ticket details - @route GET api/tickets/:id - @access private
  showTicket: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)   // lines 8, 9
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
      res.status(404)
      throw new Error('Ticket not found')
    }
    // if there's no user or|| the ticket doesn't belong to the user, we throw 401
    if (!user || ticket.user.toString() !== user.id) {
      res.status(401)   // Un-authorized
      throw new Error('User not found')
    }
    res.status(202).json(ticket)
  }),



  // @desc delete 1 user ticket - @route DELETE api/tickets/:id - @access private
  destroyTicket: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)   // lines 8, 9
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
      res.status(404)
      throw new Error('Ticket not found')
    }
    // if there's no user or|| the ticket doesn't belong to the user, we throw 401
    if (!user || ticket.user.toString() !== user.id) {
      res.status(401)   // Un-authorized
      throw new Error('User not found')
    }
    await ticket.remove()
    res.status(200).json({ success: true })
  }),




  // @desc update 1 user ticket - @route PUT api/tickets/:id - @access private
  updateTicket: asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)   // lines 8, 9
    const ticket = await Ticket.findById(req.params.id)
    if (!ticket) {
      res.status(404)
      throw new Error('Ticket not found')
    }
    // if there's no user or|| the ticket doesn't belong to the user, we throw 401
    if (!user || ticket.user.toString() !== user.id) {
      res.status(401)   // Un-authorized
      throw new Error('User not found')
    }
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTicket)
  }),
}

export default tickets