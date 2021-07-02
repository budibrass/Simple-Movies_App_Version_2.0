const { ProductionHouse, Movie } = require('../models')

class PHController {
    static showPH(req, res) {
        ProductionHouse.findAll()
            .then(datas => {
                res.render('production-house',{datas})
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = PHController;