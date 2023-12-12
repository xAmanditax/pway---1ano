class Cupom{

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

    #codigo

    get codigo(){
        return this.#codigo
    }

    set codigo(value){
        this.#codigo = value
    }

    #validade

    get validade(){
        return this.#validade
    }

    set validade(value){
        this.#validade = value
    }

    #valor

    get valor(){
        return this.#valor
    }

    set valor(value){
        this.#valor = value
    }

    toJson(){
        return{
            'id': this.#id,
            'nome': this.#nome,
            'codigo': this.#codigo,
            'validade': this.#validade,
            'valor': this.#valor
                
        }
    }
}

module.exports = Cupom