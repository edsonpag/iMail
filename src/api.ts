import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import router from './routes/routes.js'
import EmailJob from './jobs/EmailJob.js';

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(router)
new EmailJob().init() // provisorio

app.listen(3000)