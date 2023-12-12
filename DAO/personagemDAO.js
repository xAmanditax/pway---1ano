const Personagem = require('../mvc/models/personagemModel')
const Db = require('../repository/Database')


class PersonagemDAO{

    #db

    constructor(){
        this.#db = new Db()
    }

    async consultarPersons(){
        let list_personagens= []

        const query = await this.#db.selectPersons()

        for(let i = 0; i < query.length; i++){
            const personagem = new Personagem()

            personagem.id = query[i].id_personagem
            personagem.nome = query[i].nome_personagem
            personagem.latitude = query[i].genero_personagem
            personagem.totalMoeda = query[i].totalcoin_personagem
            personagem.longitude = query[i].tipo_personagem
            personagem.descricao = query[i].start_latitude
            personagem.imagem = query[i].start_longitude

            list_personagens.push(personagem.toJson())

        }

        return list_personagens
    }

    async consultarUm(id){
        const query = await this.#db.selectPersons(id)
        const personagem = new Personagem();

        if(query){
            personagem.id = query[0].id_personagem
            personagem.nome = query[0].nome_personagem
            personagem.genero = query[0].genero_personagem
            personagem.totalMoeda = query[0].totalcoin_personagem
            personagem.tipo = query[0].tipo_personagem
            personagem.latitude = query[0].start_latitude
            personagem.longitude = query[0].start_longitude
        }

        return personagem.toJson()
    }

    async cadastrar(nome, genero, tipo, totalMoeda, latitude, longitude){
        const personagem = new Personagem()
        
           personagem.nome = nome
           personagem.genero = genero
           personagem.tipo = tipo
           personagem.totalMoeda = totalMoeda
           personagem.latitude = latitude
           personagem.longitude = longitude
       
        const sql = await this.#db.insertPersons(personagem.toJson())

        return sql.insertId;
    }

    async apagar(id){
        const linhasAfetadas = await this.#db.deletePersons(id)
        return linhasAfetadas.affectedRows
    }

    async atualizar(nome,  genero, tipo, totalMoeda, latitude, longitude, id){
        const personagem = new Personagem()
     
          personagem.nome = nome
          personagem.genero = genero
          personagem.tipo = tipo
          personagem.totalMoeda = totalMoeda
          personagem.latitude = latitude
          personagem.longitude = longitude
          personagem.id = id

        const r = await this.#db.updatePersons(
         
         personagem.nome,
         personagem.genero,
         personagem.tipo, 
         personagem.totalMoeda,
         personagem.latitude, 
         personagem.longitude,
         personagem.id
       )
        return r.affectedRows
    }
}

module.exports = PersonagemDAO