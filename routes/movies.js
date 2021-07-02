const express = require('express')
const mVRoute = express.Router()
const MovieController = require('../controllers/movie-control')

mVRoute.get('/', MovieController.showMovie)
mVRoute.get('/add', MovieController.addMovieGet)
mVRoute.post('/add', MovieController.addMoviePost)
mVRoute.get('/:id/edit', MovieController.editMovieGet)
mVRoute.post('/:id/edit', MovieController.editMoviePost)
mVRoute.get('/:id/delete', MovieController.deleteMovie)
mVRoute.get('/:id/casts/add', MovieController.addMovieCastGet)
mVRoute.post('/:id/casts/add', MovieController.addMovieCastPost)

module.exports = mVRoute;