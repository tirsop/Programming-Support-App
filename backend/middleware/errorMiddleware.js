import 'dotenv/config'

const errorHandler = (err, req, res, next) => {
  let { statusCode } = res
  if (statusCode < 400) statusCode = 500
  if (!err.message) err.message = 'Oh no, Something went wrong!'

  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export default errorHandler