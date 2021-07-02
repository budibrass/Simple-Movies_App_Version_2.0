const { ProductionHouse, Movie, Cast, MovieCast } = require('../models')

class MovieController {
    static showMovie(req, res) {
        Movie.findAll({
            include : [{model: ProductionHouse}]
        , order: [['released_year', 'DESC']]})
            .then(datas => {
                res.render('movies', {datas})
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static addMovieGet(req, res) {
        let error = req.query.err
        ProductionHouse.findAll()
            .then(datas => {
                if(error) {
                    res.render('add-movie', {datas, error: error})
                } else {
                    res.render('add-movie', {datas, error: null})
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static addMoviePost(req, res) {
        let { name, released_year, genre, ProductionHouseId } = req.body
        let obj = { name, released_year: Number(released_year), genre, ProductionHouseId: Number(ProductionHouseId)}
        Movie.create(obj)
            .then(data => {
                res.redirect('/movies')
            })
            .catch(err => {
                let arr = []
                for(let error of err.errors) {
                    arr.push(error.message)
                }
                res.redirect(`/movies/add?err=${arr.join(', ')}`)
            })
    }

    static editMovieGet(req, res) {
        let id = req.params.id
        let movies;
        let error = req.query.err
        Movie.findByPk(id)
            .then(data => {
                movies = data
                return ProductionHouse.findAll()
            })
            .then(datas => {
                if(error) {
                    res.render('edit-movie', {movies, datas, error})
                } else {
                    res.render('edit-movie', {movies, datas, error: null})
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            }) 
    }

    static editMoviePost(req, res) {
        let id = req.params.id
        let { name, released_year, genre, ProductionHouseId } = req.body
        let obj = { name, released_year: Number(released_year), genre, ProductionHouseId: Number(ProductionHouseId) }
        Movie.update(obj, {where : {id}})
            .then(data => {
                res.redirect('/movies')
            })
            .catch(err => {
                let arr = []
                for(let error of err.errors) {
                    arr.push(error.message)
                }
                res.redirect(`/movies/${id}/edit?err=${arr.join(', ')}`)
            })
    }
    
    static deleteMovie(req, res) {
        let id = req.params.id
        Movie.destroy({where: {id}})
            .then(data => {
                res.redirect('/movies')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static addMovieCastGet (req, res) {
        let id = req.params.id
        let movie;
        let errors = req.query.err
        Movie.findByPk(id, {
            include: [{model: Cast}]
        })
            .then(data => {
                movie = data
                return Cast.findAll()
            })
            .then(datas => {
                if(errors) {
                    res.render('add-cast-on-movie', {movie, datas, arr: errors})
                } else {
                    res.render('add-cast-on-movie', {movie, datas, arr: null})
                }
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
        
    }

    static addMovieCastPost(req, res) {
        let id = req.params.id
        let { cast, role } = req.body
        let obj = { MovieId: Number(id), CastId: Number(cast), role}
        MovieCast.create(obj)
            .then(data => {
                res.redirect(`/movies/${id}/casts/add`)
            })
            .catch(err => {
                let arr = []
                for(let error of err.errors) {
                    arr.push(error.message)
                }
                res.redirect(`/movies/${id}/casts/add?err=${arr.join(', ')}`)
            })
    }
}

module.exports = MovieController;