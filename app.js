const express = require('express');
const consign = require('consign');

const app = express();


app.set('view engine', 'ejs')
app.set('views', './mvc/views/ctrldev')

app.use(express.static('mvc/views/public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

consign().include('mvc/controllers').into(app)


app.listen(3000, () => console.log('Servidor Online na porta 3000')) 

module.exports = app

