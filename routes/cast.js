const express = require('express')
const castRoute = express.Router()
const CastController = require('../controllers/cast-control')


castRoute.get('/', CastController.showCast)
castRoute.get('/add', CastController.addCasGet)
castRoute.post('/add', CastController.addCasPost)
castRoute.get('/:id/delete', CastController.delete)
castRoute.get('/:id/edit', CastController.editGet)
castRoute.post('/:id/edit', CastController.editPost)
castRoute.get('/:id/seemovies', CastController.showMovieByCast)

module.exports = castRoute;