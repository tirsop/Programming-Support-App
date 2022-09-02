import asyncHandler from "./asyncHandler.js"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"



const protectRoute = asyncHandler(async (req, res, next) => {

  if (req.headers.authorization?.startsWith('Bearer')) {
    try {
      // Get token from header. req.headers is an object with constains an authorization key.
      // The value of this key is a string with this format 'Beared eyJhbGciOiJIUzI1NiI...'
      // We want the 2nd part of the string (eyJhbGciOiJIUzI1NiI...) which is the token.
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)        // Decode token, so we can get user id
      req.user = await User.findById(decoded.id).select('-password')   // Get user from id
      next()
    }
    catch (err) {
      console.log(err)
      res.status(401)
      throw new Error('Not authorized')
    }
  } else {
    res.status(401)
    throw new Error('Not authorized')
  }
})

export default protectRoute
