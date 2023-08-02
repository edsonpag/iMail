import express from 'express'
import emailRouter from './EmailRouter'

const router = express.Router()
router.use(emailRouter)

export default router