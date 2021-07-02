const { ProductionHouse, Movie } = require('../models')

class Controller {
    static home(req, res) {
        res.render('home')
    }
}

module.exports = Controller