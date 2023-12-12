const Cupom = require('../mvc/models/cupomModel')
const Db = require('../repository/Database')

class CupomDAO{

    #db

    constructor(){
        this.#db = new Db()
    }

    async consultarCupons(){
        let list_cupons= []

        const query = await this.#db.selectCupons()

        for(let i = 0; i < query.length; i++){
            const cupom = new Cupom()

            cupom.id = query[i].id_cupom
            cupom.nome = query[i].nome_cupom
            cupom.codigo = query[i].codigo_cupom
            cupom.validade = query[i].validade_cupom
            cupom.valor = query[i].valor_cupom
        
            list_cupons.push(cupom.toJson())

        }

        return list_cupons
    }

    async consultarUm(id){
        const query = await this.#db.selectCupons(id)
        const cupom = new Cupom();

        if(query){
            cupom.id = query[0].id_cupom
            cupom.nome = query[0].nome_cupom
            cupom.codigo = query[0].codigo_cupom
            cupom.validade = query[0].validade_cupom
            cupom.valor = query[0].valor_cupom
        }

        return cupom.toJson()
    }

    async cadastrar(nome, codigo, validade, valor){
        const cupom = new Cupom()
        
        cupom.nome = nome
        cupom.codigo = codigo
        cupom.validade = validade
        cupom.valor = valor
       
        const sql = await this.#db.insertCupons(cupom.toJson())

        return sql.insertId;
    }

    async apagar(id){
        const linhasAfetadas = await this.#db.deleteCupons(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome, codigo, validade, valor, id){
        const cupom = new Cupom()
        cupom.nome = nome
        cupom.codigo = codigo
        cupom.validade = validade
        cupom.valor = valor 
        cupom.id = id

        const r = await this.#db.updateCupons(
            cupom.nome,
            cupom.codigo,
            cupom.validade,
            cupom.valor,
            cupom.id
        )
        return r.affectedRows
    }
}

module.exports = CupomDAO
