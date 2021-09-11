require('dotenv').config()
const express = require('express')
const apiRouter = require('./APIrouter')
//const history = require('connect-history-api-fallback');

const app = express()

app.use('/api', apiRouter)

// app.use(history())
app.use(express.static('dist'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on http://localhost:${port} !`))
