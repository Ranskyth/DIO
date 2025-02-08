class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar() {
        if(this.tipo === "mago"){
            this.ataque = "magia"
        }else if(this.tipo === "guerreiro"){
            this.ataque = "espada"
        }else if(this.tipo === "monge"){
            this.ataque = "Artes Marcias"
        }else if(this.tipo === "ninja"){
            this.ataque = "Shuriken"
        }
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let Heroi1 = new Heroi("maid", 32, "mago")

Heroi1.atacar()

