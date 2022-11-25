import mongoose from "mongoose"


const ticketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  product: {
    type: String,
    required: [true, 'Please select a topic'],
    enum: ['formula1', 'surf', 'javascript', 'japan']
  },
  description: {
    type: String,
    required: [true, 'Please describe your problem/question']
  },
  status: {
    type: String,
    required: true,
    enum: ['new', 'open', 'closed'],
    default: 'new'
  }
},
  {
    timestamps: true
  })

export default mongoose.model('Ticket', ticketSchema)