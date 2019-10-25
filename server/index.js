import env from 'dotenv'
import express from 'express'

const result = env.config()
if (result.error) {
  throw result.error
}

const app = express()
app.disable('etag')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/api', require('./routes').router)

const { PORT } = process.env
app.listen(PORT, err => {
  if (err) {
    console.error(err)
    throw err
  }
  console.warn(`> Ready on port ${PORT}...`)
})
