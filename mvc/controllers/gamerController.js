const GamerDAO = require('../../DAO/gamerDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/gam', (req, res) => {
        res.render('gamers/listgamers' , {})
    })

}