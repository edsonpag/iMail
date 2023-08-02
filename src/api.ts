import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/routes.js'

const app: Application = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(router)

app.listen(3000)