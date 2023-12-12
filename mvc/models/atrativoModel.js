class Atrativo {
    
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
    
    
    #latitude

    get latitude(){
        return this.#latitude
    }

    set latitude(value){
        this.#latitude = value
    }
   
   
    #longitude

    get longitude(){
        return this.#longitude
    }

    set longitude(value){
        this.#longitude = value
    }
    
    
    #descricao

    get descricao(){
        return this.#descricao
    }

    set descricao(value){
        this.#descricao = value
    }

    #imagem

    get imagem(){
        return this.#imagem
    }

    set imagem(value){
        this.#imagem = value
    }

    toJson(){
        return{
            'id': this.#id,
            'nome': this.#nome,
            'latitude': this.#latitude,
            'longitude': this.#longitude,
            'descricao': this.#descricao,
            'imagem': this.#imagem
        }
    }


    constructor(nome, descricao, imagem){
        this.#nome = nome
        this.#descricao = descricao
        this.#imagem = imagem
    }

}

module.exports = Atrativo