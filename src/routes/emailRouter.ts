import express from 'express'
import EmailController from '../controllers/EmailController'

const emailRouter = express.Router()
const emailController = new EmailController()

emailRouter.post('/save', emailController.save)
emailRouter.post('/send', emailController.send)

export default emailRouter