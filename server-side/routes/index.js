const express = require('express')
const router = express()
const Controller = require('../controllers/index')

router.post("/register", Controller.register)

module.exports = router