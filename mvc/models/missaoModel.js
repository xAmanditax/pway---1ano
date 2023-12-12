class Missao{

    #id

    get id(){
        return this.#id
    }

    set id(value){
        this.#id = value
    }

    #nome

    get nome(){
        return this.#nome
    }

    set nome(value){
        this.#nome = value
    }

    #descricao

    get descricao(){
        return this.#descricao
    }

    set descricao(value){
        this.#descricao = value
    }

    #recompensa

    get recompensa(){
        return this.#recompensa
    }

    set recompensa(value){
        this.#recompensa = value
    }

    toJson(){
        return {
            'id': this.#id,
            'nome': this.#nome,
            'descricao': this.#descricao,
            'recompensa': this.#recompensa
        }
    }

    constructor(nome, descricao, recompensa){
        this.#nome = nome
        this.#descricao = descricao
        this.#recompensa = recompensa
    }

}

module.exports = Missao