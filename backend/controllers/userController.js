import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'


const users = {


  registerUser: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      res.status(400)   // Bad Request
      throw new Error("Please include all fields.")
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
      res.status(400)
      throw new Error("User already exists.")
    }
    const user = new User({ name, email, password })
    await user.save()   // before saving, the password is hashed (see userModel.js)

    res.status(201)   // Created
    res.json({
      _id: user._id,
      name,
      email
    })
  }),



  loginUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const isValid = user ? await bcrypt.compare(password, user.password) : false

    if (isValid) {
      res.status(200)   // OK
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email
      })
    } else {
      res.status(401)
      throw new Error("Invalid email or credentials")
    }
  })
}


export default users