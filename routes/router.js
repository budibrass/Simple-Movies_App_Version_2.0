const express = require('express')
const route = express.Router()
const pHRoute = require('./production-house')
const mVRoute = require('./movies')
const castRoute = require('./cast')
const Controller = require('../controllers/controller')

route.get('/', Controller.home)
route.use('/productionhouse', pHRoute)
route.use('/movies', mVRoute)
route.use('/casts', castRoute)

module.exports = route;