import express from "express"
import 'dotenv/config'
// routes
import userRoutes from './routes/userRoutes.js'

console.log(`\n*\n*\n*\n*\n*\n*\n*\n*\n*
******************************************************************`)

const app = express()
const PORT = process.env.PORT || 8000


app.use('/api/users', userRoutes)



app.listen(PORT, () => {
  console.log(`Listening at:\nhttp://localhost:${PORT}\n`)
})