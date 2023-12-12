const path = require('path');

module.exports = (app) => {
    app.get('/home', (req, res) => {
        res.render('home/listhome' , {})
    })

}