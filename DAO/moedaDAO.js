const Moeda = require('../mvc/models/moedaModel');
const Db = require('../repository/Database')

class MoedaDAO{

    #db

    constructor(){
        this.#db = new Db()
    }

    async consultarMoedas(){
        let list_moedas= []

        const query = await this.#db.selectMoedas()

        for(let i = 0; i < query.length; i++){
            const moeda = new Moeda()

            moeda.id = query[i].id_coin
            moeda.nome = query[i].nome_coin
            moeda.valor = query[i].value_coin
            moeda.imagem = query[i].image_coin

            list_moedas.push(moeda.toJson())

        }

        return list_moedas
    }

    async consultarTodos(){
        let list_moedas = []
            const query = await this.#db.selectMoedas()

            for(let i = 0; i < query.length; i++){
                const moeda = new Moeda()

                moeda.id = query[i].id_coin
                moeda.nome = query[i].nome_coin
                moeda.valor = query[i].value_coin
                moeda.imagem = query[i].image_coin

                list_moedas.push(moeda.toJson())
            }
            return list_moedas
        }

        async consultarUm(id){

            const query = await this.#db.selectMoedas(id)
            const moeda = new Moeda()

            if(query){
                moeda.id = query[0].id_coin
                moeda.nome = query[0].nome_coin
                moeda.valor = query[0].value_coin
                moeda.imagem = query[0].image_coin
            }
    
            return moeda.toJson()

        }

        async cadastrar(nome, valor, imagem){
            const moeda = new Moeda()
            
            moeda.nome = nome
            moeda;valor = valor
            moeda.imagem = imagem
           
            const sql = await this.#db.insertMoedas(moeda.toJson())
    
            return sql.insertId;
        }

        async apagar(id){
            const linhasAfetadas = await this.#db.deleteMoedas(id)
            return linhasAfetadas.affectedRows
        }

        async atualizar(nome, valor, imagem, id){
            const moeda = new Moeda()
            moeda.nome = nome
            moeda.valor = valor
            moeda.imagem = imagem
            moeda.id = id
    
            const r = await this.#db.updateMoedas(
                moeda.nome,
                moeda.valor,
                moeda.imagem,
                moeda.id
            )
            return r.affectedRows
        }
    }

module.exports = MoedaDAO