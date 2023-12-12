const CupomDAO = require('../../DAO/cupomDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/cup', async (req, res) => {
        const cupons = new CupomDAO()
        let list_cupons = []
        list_cupons =  await cupons.consultarCupons()
        res.render('cupons/listcupons', { lista_cupons: list_cupons })
    })

    app.post('/pagina/cadcupons', async (req, res) => {
        const cupom = new CupomDAO()

        const { 
            txtnomecupom: nome, 
            txtcodcupom: codigo, 
            txtvalicupom: validade, 
            txtvalocupom: valor, } = req.body;

        const idRetornado = await cupom.cadastrar(nome, codigo, validade, valor)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })

    app.get('/pagina/addcupom', (req, res) => {
        res.render('cupons/addcupons' , {})
    })

    app.post('/pagina/cadcupons', async (req, res) => {
        const cupom = new CupomDAO()

        const { 
            txtnomecupom: nome, 
            txtcodcupom: codigo, 
            txtvalicupom: validade, 
            txtvalorcupom: valor } = req.body;

        const idRetornado = await cupom.cadastrar(nome, codigo, validade, valor)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })


    app.delete("/cupom/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const cupomDAO = new CupomDAO()

        const status = await cupomDAO.apagar(req.params.id)

        res.json({
            status
        })
    })

    app.get("/pag/listcupom", (req, res) => {
        res.sendFile(path.resolve('cupons/listcupons'))
    })

    app.get("/pag/alteracupom/:id", async (req, res) => {
        const cupom = new CupomDAO()
        const r = await cupom.consultarUm(req.params.id)
        console.log(r)
        res.render('cupons/cupomView.ejs', { r })
    })

    app.get("/pag/addcupom", (req, res) => {
        res.sendFile(path.resolve('cupons/addcupons'))

    })

    

}