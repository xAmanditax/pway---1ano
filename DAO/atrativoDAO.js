const Atrativo = require('../mvc/models/atrativoModel')
const Db = require('../repository/Database')


class AtrativoDAO{
    #db

    constructor(){
        this.#db = new Db()
    }

    async consultarAtrativos(){
        let list_atrativos= []

        const query = await this.#db.selectAtrativos()

        for(let i = 0; i < query.length; i++){
            const atrativo = new Atrativo()

            atrativo.id = query[i].id_atrativo
            atrativo.nome = query[i].nome_atrativo
            atrativo.latitude = query[i].lat_atrativo
            atrativo.longitude = query[i].long_atrativo
            atrativo.descricao = query[i].desc_atrativo
            atrativo.imagem = query[i].image_atrativo

            list_atrativos.push(atrativo.toJson())

        }

        return list_atrativos
    }

    async consultarUm(id){
        const query = await this.#db.selectAtrativos(id)
        const atrativo = new Atrativo();

        if(query){
            atrativo.id = query[0].id_atrativo
            atrativo.nome = query[0].nome_atrativo
            atrativo.latitude = query[0].lat_atrativo
            atrativo.longitude = query[0].long_atrativo
            atrativo.descricao = query[0].desc_atrativo
            atrativo.imagem = query[0].image_atrativo
        }

        return atrativo.toJson()
    }

    async cadastrar(nome, imagem, latitude, longitude, descricao){
        const atrativo = new Atrativo()
        
        atrativo.nome = nome
        atrativo.imagem = imagem
        atrativo.latitude = latitude
        atrativo.longitude = longitude
        atrativo.descricao = descricao
       
        const sql = await this.#db.insertAtrativos(atrativo.toJson())

        return sql.insertId;
    }

    async apagar(id){
        const linhasAfetadas = await this.#db.deleteAtrativos(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, lat, long, descricao, imagem, id){
        const atrativo = new Atrativo()
        atrativo.nome = nome
        atrativo.latitude = lat
        atrativo.longitude = long
        atrativo.descricao = descricao 
        atrativo.imagem = imagem
        atrativo.id = id

        const r = await this.#db.updateAtrativos(
            atrativo.nome,
            atrativo.latitude,
            atrativo.longitude,
            atrativo.descricao,
            atrativo.imagem,
            atrativo.id
        )
        return r.affectedRows
    }
}

module.exports = AtrativoDAO