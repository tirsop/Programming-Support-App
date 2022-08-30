import mongoose from "mongoose"

const dbUrl = process.env.MONGO_URI

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log("Database Connected\n")
  } catch (err) {
    console.log("MONGO CONNECTION ERROR")
    console.log(err.message)
    process.exit(1)
  }
}

export default connectDB