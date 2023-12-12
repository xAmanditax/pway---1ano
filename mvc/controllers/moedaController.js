const MoedaDAO = require('../../DAO/moedaDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/coin', async (req, res) => {
        const moedas = new MoedaDAO()
        let list_moedas = []
        list_moedas =  await moedas.consultarMoedas()
        res.render('moedas/listmoedas', { lista_moedas: list_moedas })

    })


    app.get('/pagina/addcoin', (req, res) => {
        res.render('moedas/addmoedas', {})
    })

    app.post('/pagina/cadcoins', async (req, res) => {
        const moeda = new MoedaDAO()

        const { 
            txtnomecoin: nome, 
            txtvaluecoin: valor, 
            filecoin: imagem, } = req.body;

        const idRetornado = await moeda.cadastrar(nome, valor, imagem)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })

    app.delete("/moeda/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const moedaDAO = new MoedaDAO()

        const status = await moedaDAO.apagar(req.params.id)

        res.json({
            status
        })
    })

    app.put("/moeda/:id", async (req, res) => {
        const moedaDAO = new MoedaDAO()

        const { 
            id,
            nome, 
            valor, 
            imagem } = req.body;

        if (id == req.params.id) {
            const r = await moedaDAO.atualizar(nome, valor, imagem, id)
            res.json({ msg: "O total de linhas alteradas: " + r })
        }
        else {
            res.json({ msg: "Problema." })
        }

    })

    app.get("/pag/listcoin", (req, res) => {
        res.sendFile(path.resolve('/moedas/listmoedas'))
    })

    app.get("/pag/alteracoin/:id", async (req, res) => {
        const moeda = new MoedaDAO()
        const r = await moeda.consultarUm(req.params.id)
        console.log(r)
        res.render('moedas/moedaView.ejs', { r })
    })

    app.get("/pag/addcoin", (req, res) => {
        res.sendFile(path.resolve('moedas/addcoins'))

    })

}