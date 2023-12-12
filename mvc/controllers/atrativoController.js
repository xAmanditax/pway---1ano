const AtrativoDAO = require('../../DAO/atrativoDAO');
const path = require('path');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs').promises;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', 'views', 'public', 'images', 'upload'))
    },
    filename: function (req, file, cb) {
        const extensao = path.extname(file.originalname);
        const nomeArquivo = crypto.createHash('md5').update(file.originalname + Date.now().toString()).digest('hex') + extensao;
        cb(null, nomeArquivo)
    },
});
const atrativoDAO = new AtrativoDAO();
const upload = multer({ storage: storage })

module.exports = (app) => {
    app.post('/atrativos', upload.single('imagem'), async (req, res) => {
        console.log(req);
        try {
            const extensao = path.extname(req.file.originalname);
            const nomeArquivo = crypto.createHash('md5').update(req.file.originalname + Date.now().toString()).digest('hex') + extensao;
            const caminhoDestino = path.join(_dirname, '..', 'views', 'public', 'images', 'upload', nomeArquivo);
            await fs.rename(req.file.path, caminhoDestino)
            console.log('Upload bem-sucedido')

            const {
                txtid: id,
                txtnomeatrat: nome,
                txtlatatrat: latitude,
                txtlongatrat: longitude,
                txtdescatrat: descricao,
                imagematrat: imagem
            } = req.body;

            let status;

            if (!id) {
                status = await atrativoDAO.cadastrar(nome, latitude, longitude, descricao)
            }
            else {
                status = await atrativoDAO.atualizar(id, nome, latitude, longitude, descricao)
            }
            res.json({ status });
        } catch (error) {
            console.error(error);
            res.status(500).send("Erro ao realizar o upload")
        }
    });

    app.get('/atrativo', async (req, res) => {
        const atrativoDAO = new AtrativoDAO();
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.json((await atrativoDAO.consultarAtrativos()))
    })


    app.get('/atrat', async (req, res) => {
        const atrativos = new AtrativoDAO()

        let list_atrativos = []

        list_atrativos =  await atrativos.consultarAtrativos()
 
        res.render('atrativos/listatrativos', { lista_atrativos: list_atrativos })
    })

    app.get('/pagina/addatrativo', (req, res) => {
        res.render('atrativos/addatrativos', {})
    })

    app.post('/pagina/cadatrativos', async (req, res) => {
        const atrativo = new AtrativoDAO()

        const { 
            fileatrat: imagem, 
            txtdescatrat: descricao, 
            txtlatatrat: lat, 
            txtlongatrat: long, 
            txtnomeatrat: nome } = req.body;

        const idRetornado = await atrativo.cadastrar(nome, imagem, lat, long, descricao)

        res.status(201).json({ msg: "ok", id: idRetornado })
    })

    app.delete("/atrativo/:id", async (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const atrativoDAO = new AtrativoDAO()

        const status = await atrativoDAO.apagar(req.params.id)

        res.json({
            status
        })
    })

    app.put("/atrativo/:id", async (req, res) => {
        const atrativoDAO = new AtrativoDAO()

        const { 
            id,
            imagem, 
            descricao, 
            lat, 
            long, 
            nome } = req.body;

        if (id == req.params.id) {
            const r = await atrativoDAO.atualizar(nome, lat, long, descricao, imagem, id)
            res.json({ msg: "O total de linhas alteradas: " + r })
        }
        else {
            res.json({ msg: "Problema." })
        }

    })

    app.get("/pag/listatrat", (req, res) => {
        res.sendFile(path.resolve('atrativos/listatrativos'))
    })

    app.get("/pag/alteratrat/:id", async (req, res) => {
        const atrativo = new AtrativoDAO()
        const r = await atrativo.consultarUm(req.params.id)
        console.log(r)
        res.render('atrativos/atrativoView.ejs', { r })
    })

    app.get("/pag/addatrat", (req, res) => {
        res.sendFile(path.resolve('atrativos/addatrativos'))

    })
}











