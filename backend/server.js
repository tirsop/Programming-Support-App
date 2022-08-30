import express from "express"
import 'dotenv/config'
import errorHandler from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
// routes
import userRoutes from './routes/userRoutes.js'

console.log(`\n*\n*\n*\n*\n*\n*\n*\n*\n*
******************************************************************`)

const app = express()
const PORT = process.env.PORT || 8000

connectDB()

app.use(express.json())                                                   // need these two lines to use req.body
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Listening at:\nhttp://localhost:${PORT}\n`)
})