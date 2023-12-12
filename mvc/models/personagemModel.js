class Personagem {
   
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

    #genero

    get genero(){
        return this.#genero
    }

    set genero(value){
        this.#genero = value
    }

    #tipo

    get tipo(){
        return this.#tipo 
    }

    set tipo(value){
        this.#tipo = value
    }

    #totalMoeda

    get totalMoeda(){
        return this.#totalMoeda
    }

    set totalMoeda(value){
        this.#totalMoeda = value
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

    toJson(){
        return {
            'id': this.#id,
            'nome': this.#nome,
            'genero': this.#genero,
            'tipo': this.#tipo,
            'totalMoeda': this.#totalMoeda,
            'latitude': this.#latitude,
            'longitude': this.#longitude 
        }
    }

    constructor(nome, genero, tipo, totalMoeda, latitude, longitude){
        this.#nome = nome
        this.#genero = genero
        this.#tipo = tipo
        this.#totalMoeda = totalMoeda
        this.#latitude = latitude
        this.#longitude = longitude
    }

}

module.exports = Personagem