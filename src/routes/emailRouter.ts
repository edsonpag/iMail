import express from 'express'
import EmailController from '../controllers/EmailController'

const emailRouter = express.Router()
const emailController = new EmailController()

emailRouter.post('/store', emailController.store)

export default emailRouter