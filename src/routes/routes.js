import express from 'express'
import EmailController from '../controller/EmailController.js'

const router = express.Router()
const emailController = new EmailController()

router.post('/email/save', emailController.save)
router.post('/email/send', emailController.send)

export default router