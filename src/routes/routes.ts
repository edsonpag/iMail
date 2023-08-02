import express from 'express'
import emailRouter from './emailRouter'

const router = express.Router()
router.use('/email', emailRouter)

export default router