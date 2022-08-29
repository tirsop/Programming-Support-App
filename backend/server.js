import express from "express"
import 'dotenv/config'

console.log(`\n*\n*\n*\n*\n*\n*\n*\n*\n*
******************************************************************`)

const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(PORT, () => {
  console.log(`Listening at:\nhttp://localhost:${PORT}\n`)
})