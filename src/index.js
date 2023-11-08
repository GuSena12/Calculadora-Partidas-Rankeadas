let saldoVitorias = carcularRankingJogador()

function carcularRankingJogador (vitorias, derrotas) {
    let saldoDeRankeadas = vitorias - derrotas
    return saldoDeRankeadas
}

if (saldoVitorias <= 10) {
    nivel = "Ferro"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
} else if(saldoVitorias <= 20) {
    nivel = "Bronze"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
} else if (saldoVitorias <= 50) {
    nivel = "Prata"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
} else if (saldoVitorias <= 80) {
    nivel = "Ouro"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
} else if (saldoVitorias <= 90) {
    nivel = "Diamante"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
} else if (saldoVitorias <= 100) {
    nivel = "Lendário"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
} else {
    nivel = "Imortal"
    console.log(`O herói tem saldo de ${saldoVitorias}, e está no nível de ${nivel}`)
}
