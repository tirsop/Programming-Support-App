import express from "express"
import 'dotenv/config'



console.log(`\n*\n*\n*\n*\n*\n*\n*\n*\n*
******************************************************************`)

const app = express()
const PORT = 5001

app.listen(PORT, () => {
  console.log(`Listening at:\nhttp://localhost:${PORT}\n`)
})