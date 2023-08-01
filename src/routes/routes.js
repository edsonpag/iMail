const express = require('express')
const EmailController = require('../controller/EmailController')

const router = express.Router()
const emailController = new EmailController()

router.post('/email/save', emailController.save)
router.post('/email/send', emailController.send)

module.exports = router