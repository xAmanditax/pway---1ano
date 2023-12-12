const PersonagemDAO = require('../../DAO/personagemDAO');
const path = require('path');

module.exports = (app) => {

    app.get('/personagem', async (req, res) => {

        const personagemDAO = new PersonagemDAO();
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json((await personagemDAO.consultarPersons()))
    })

    app.get('/person', async (req, res) => {

        const personagens = new PersonagemDAO()
        let list_personagens = []
        list_personagens =  await personagens.consultarPersons()
        res.render('personagens/listpersonagens', { lista_personagens: list_personagens })
    })

    app.get('/pagina/addperson', (req, res) => {
        res.render('personagens/addpersonagens', {})
    })

    app.post('/pagina/cadpersons', async (req, res) => {
        const personagem = new PersonagemDAO()

        const { 
            txtnomeperson: nome, 
            txtgenperson: genero, 
            txttipoperson: tipo, 
            txttotmoedaperson: totalMoeda, 
            txtlatperson: latitude,
            txtlongperson: longitude } = req.body;

        const idRetornado = await personagem.cadastrar(nome, genero, tipo, totalMoeda, latitude, longitude)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })

}