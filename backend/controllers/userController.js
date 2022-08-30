import asyncHandler from "../middleware/asyncHandler.js"

const users = {
  registerUser: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      res.status(400)   // Bad Request
      throw new Error("Please include all fields.")
    }
    res.send('register route')
  }),
  loginUser: asyncHandler(async (req, res) => {
    res.send('login route')
  })
}

export default users