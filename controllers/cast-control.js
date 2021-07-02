const { Cast, Movie, MovieCast } = require('../models')
const Helper = require('./helpers/helper')

class CastController {

    static showCast (req, res) {
        Cast.findAll()
        .then(datas => {
            res.render('cast', {datas})
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }

    static addCasGet (req, res) {
        res.render('add-cast')
    }

    static addCasPost (req, res) {
        let {first_name, last_name, phone_number, birth_year, gender} = req.body
        let obj = { first_name, last_name, phone_number, birth_year: Number(birth_year), gender} 
        Cast.create(obj)
            .then(data => {
                res.redirect('/casts')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
            
    }

    static delete (req, res) {
        let id = req.params.id
        Cast.destroy({where:{id}})
            .then(data => {
                res.redirect('/casts')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static editGet (req, res) {
        let id = req.params.id
        Cast.findByPk(id)
            .then(data => {
                res.render('edit-cast', {data})
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static editPost(req, res) {
        let id = req.params.id
        let {first_name, last_name, phone_number, birth_year, gender} = req.body
        let obj = { first_name, last_name, phone_number, birth_year: Number(birth_year), gender}
        Cast.update(obj, {where: {id}})
            .then(datas => {
                res.redirect('/casts')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }

    static showMovieByCast(req, res) {
        let id = req.params.id
        Cast.findByPk(id, {
            include: {
                model: Movie
            }
        })
        .then(data => {
            res.render('see-movies', {data})
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }
}

module.exports = CastController