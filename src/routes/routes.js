const express = require('express')
const { send, save } = require('../controller/EmailController')

const router = express.Router()

router.post('/email/save', save)
router.post('/email/send', send)

module.exports = router