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
    res.send('register route')
  }),

  loginUser: asyncHandler(async (req, res) => {
    res.send('login route')
  })
}

export default users