import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"

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
  })
}

export default users