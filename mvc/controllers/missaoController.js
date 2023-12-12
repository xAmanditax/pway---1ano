const MissaoDAO = require('../../DAO/missaoDAO');
const path = require('path');

module.exports = (app) => {
    app.get('/missoes', async (req, res) => {
        const missaoDAO = new MissaoDAO()
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json(await missaoDAO.consultarTodos())
    })

    app.get('/missao', async (req, res) => {
        const missoes = new MissaoDAO()
        let list_missoes = []
        list_missoes =  await missoes.consultarMissoes()
        res.render('missoes/listmissoes', { lista_missoes: list_missoes })

    })

    app.get('/pagina/addmissao', (req, res) => {
        res.render('missoes/addmissoes', {})
    })

    app.post('/pagina/cadmissoes', async (req, res) => {
        const missao = new MissaoDAO()

        const { 
            txtnomemissao: nome, 
            txtrecompmissao: recompensa, 
            txtdescmissao: descricao } = req.body;

        const idRetornado = await missao.cadastrar(nome, recompensa, descricao)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })

    app.delete("/missao/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const missaoDAO = new MissaoDAO()

        const status = await missaoDAO.apagar(req.params.id)

        res.json({
            status
        })
    })

    app.put("/missao/:id", async (req, res) => {
        const missaoDAO = new MissaoDAO()

        const { 
            id,
            nome,
            recompensa, 
            descricao } = req.body;

        if (id == req.params.id) {
            const r = await missaoDAO.atualizar(nome, recompensa, descricao, id)
            res.json({ msg: "O total de linhas alteradas: " + r })
        }
        else {
            res.json({ msg: "Problema." })
        }

    })

    app.get("/pag/listmissao", (req, res) => {
        res.sendFile(path.resolve('missoes/listmissoes'))
    })

    app.get("/pag/alteramissao/:id", async (req, res) => {
        const missao = new MissaoDAO()
        const r = await missao.consultarUm(req.params.id)
        console.log(r)
        res.render('missoes/missaoView.ejs', { r })
    })

    app.get("/pag/addmissao", (req, res) => {
        res.sendFile(path.resolve('missoes/addmissoes'))

    })

}