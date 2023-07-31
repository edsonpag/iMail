const express = require('express');
const { send } = require('../controller/EmailController');

const router = express.Router();

router.post('/email/send', send);

module.exports = router;