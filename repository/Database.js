const mysql = require('mysql2')

class DatabaseMySql{

    #connection

    constructor(){
        this.#connection = mysql.createPool({
            database:'bdgp',
            user:'root',
            password:'',
            host:'localhost'
        }).promise()
    }


    async selectAtrativos(){
        const query = await this.#connection.query('select * from atrativos')
        return query[0]
    }
    
    async selectAtrativosId(){
        const query = await this.#connection.query('select * from atrativos where id_atrativo' +id)
        return query[0]
    }

    async insertAtrativos(param){
        const sql = `insert into atrativos (nome_atrativo, lat_atrativo, long_atrativo, desc_atrativo, image_atrativo)
        values ('${param.nome}','${param.latitude}','${param.longitude}','${param.descricao}','${param.imagem}')`

        const query = await this.#connection.execute(sql)
        return query[0]
    }


    async deleteAtrativos(id){
        const sql = 'delete from atrativos where id_atrativo = ' +id
0
        const res = await this.#connection.execute(sql)
        return res[0]
    }

    async updateAtrativos(nome, lat, long, desc, image, id){
        const sql = `update atrativos 
          set nome_atrativo = "${nome}",
              lat_atrativo = "${lat}",
              long_atrativo = "${long}",
              desc_atrativo = "${desc}",
              image_atrativo = "${image}"
              where id_atrativo = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }
    
      async selectMissoes(){
        const query = await this.#connection.query('select * from missoes')
        return query[0]
    }

    async selectMissoesId(){
        const query = await this.#connection.query('select * from missoes where id_missao' +id)
        return query[0]
    }

    async insertMissoes(param){
        const sql = `insert into missoes (nome_missao, desc_missao, recompensa_missao)
        values ('${param.nome}','${param.descricao}','${param.recompensa}')`

        const query = await this.#connection.execute(sql)
        return query[0]
    }

    async deleteMissoes(id){
        const sql = 'delete from missoes where id_missao = ' +id
0

        const res = await this.#connection.execute(sql)
        console.log(res)
        return res[0]
    }

    async updateMissoes(nome, descricao, recompensa, id){
        const sql = `update missoes 
          set nome_missao = "${nome}",
              desc_missao = "${descricao}",
              recompensa_missao= "${recompensa}",
              where id_missao = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }

      async selectMoedas(){
        const query = await this.#connection.query('select * from coins')
        return query[0]
    }
    
    async selectMoedasId(){
        const query = await this.#connection.query('select * from coins where id_coin' +id)
        return query[0]
    }

    async insertMoedas(param){
        const sql = `insert into coins (nome_coin, value_coin, image_coin)
        values ('${param.nome}','${param.valor}','${param.imagem}')`

        const query = await this.#connection.execute(sql)
        return query[0]
    }


    async deleteMoedas(id){
        const sql = 'delete from coins where id_coin = ' +id
0
        const res = await this.#connection.execute(sql)
        return res[0]
    }

    async updateMoedas(nome, valor, imagem, id){
        const sql = `update moedas 
          set nome_coin = "${nome}",
              value_coin = "${valor}",
              image_coin = "${imagem}",
              where id_coin = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }

      async selectPersons(){
        const query = await this.#connection.query('select * from personagens')
        return query[0]
    }
    
    async selectPersonsId(){
        const query = await this.#connection.query('select * from personagens where id_personagem' +id)
        return query[0]
    }

    async insertPersons(param){
        const sql = `insert into personagens (nome_personagem, genero_personagem, tipo_personagem, totalcoin_personagem, start_latitude_personagem, start_longitude_personagem)
        values ('${param.nome}','${param.genero}','${param.tipo}','${param.totalMoeda}','${param.latitude}','${param.longitude}')`

        const query = await this.#connection.execute(sql)
        return query[0]
    }


    async deletePersons(id){
        const sql = 'delete from personagens where id_personagem = ' +id
0

        const res = await this.#connection.execute(sql)
        return res[0]
    }

    async updatePersons(nome, genero, tipo, totalMoeda, latitude, longitude, id){
        const sql = `update personagens 
          set nome_personagem = "${nome}",
              genero_personagem = "${genero}",
              tipo_personagem = "${tipo}",
              totalcoin_personagem = "${totalMoeda}",
              start_latitude = "${latitude}",
              start_longitude = "${longitude}",
              where id_personagem = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }


      async selectCupons(){
        const query = await this.#connection.query('select * from cupons')
        return query[0]
    }
    
    async selectCuponsId(){
        const query = await this.#connection.query('select * from cupons where id_cupom' +id)
        return query[0]
    }

    async insertCupons(param){
        const sql = `insert into cupons (nome_cupom, codigo_cupom, validade_cupom, valor_cupom)
        values ('${param.nome}','${param.codigo}','${param.validade}','${param.valor}')`

        const query = await this.#connection.execute(sql)
        return query[0]
    }


    async deleteCupons(id){
        const sql = 'delete from cupons where id_cupom = ' +id
0
        const res = await this.#connection.execute(sql)
        return res[0]
    }

    async updateCupons(nome, codigo, validade, valor, id){
        const sql = `update cupons 
          set nome_cupom = "${nome}",
              codigo_cupom = "${codigo}",
              validade_cupom = "${validade}",
              valor_cupom = "${valor}",
              where id_cupom = ${id}
        `
  
        const r = await this.#connection.execute(sql)
        return r[0]
      }


}

module.exports = DatabaseMySql