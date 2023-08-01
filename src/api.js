const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./routes/routes')

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/.netlify/functions/api', router)

module.exports=app
module.exports.handler = serverless(app)