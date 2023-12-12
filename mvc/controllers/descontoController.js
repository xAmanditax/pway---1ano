const DescontoDAO = require('../../DAO/descontoDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/desco', (req, res) => {
        res.render('descontos/listdescontos' , {})
    })

}