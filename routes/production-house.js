const express = require('express')
const pHRoute = express.Router()
const PHController = require('../controllers/prod-house-control')

pHRoute.get('/', PHController.showPH)

module.exports = pHRoute;

