import mongoose from "mongoose"
import bcrypt from 'bcryptjs'



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
},
  {
    timestamps: true
  })


// cannot pass arrow func as callback; only regular func. 'this' here refers to the instance
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)
  next()
})


export default mongoose.model('User', userSchema) 