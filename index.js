const express = require('express')
const apiRouter = require('./APIrouter')
const handleWebSocket = require('./handleWebSocket')

const port = process.env.PORT || 5000

const app = express()
    .use('/api', apiRouter)
    .use(express.static('dist'))
    .listen(port, () => console.log(`listening on http://localhost:${port} !`))

const { Server } = require('ws');
const wss = new Server({ server: app })
    .on('listening', () => console.log('wss is listening'))
wss.on('connection', handleWebSocket(wss));
