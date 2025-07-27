let rankeadas 
let nivel
let vitorias = 100
let derrotas = 146

function partidas(vitoria, derrota){
    rankeadas = vitoria - derrota
}

partidas(vitorias, derrotas)

if(rankeadas <= 10){
    nivel = "Ferro"
}else if((rankeadas >= 11)&&(rankeadas <= 20)){
    nivel = "Bronze"
}else if((rankeadas >= 21)&&(rankeadas <= 50)){
    nivel = "Prata"
}else if((rankeadas >= 51)&&(rankeadas <= 80)){
    nivel = "Ouro"
}else if((rankeadas >= 81)&&(rankeadas <= 90)){
    nivel = "Diamante"
}else if((rankeadas >= 91)&&(rankeadas < 100)){
    nivel = "Lendário"
}else if(rankeadas >= 100){
    nivel = "Imortal"
}

console.log(`O Herói tem de saldo de **${vitorias}** Vitorias e está no nível **${nivel}**`)