import express from 'express'
import EmailController from '../controllers/EmailController.js'

const emailRouter = express.Router()
const emailController = new EmailController()

emailRouter.post('/email/save', emailController.save)
emailRouter.post('/email/send', emailController.send)

export default emailRouter