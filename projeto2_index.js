// Função que calcula e retorna o saldo de vitórias.
//
function calcSaldo(vitorias, derrotas){
    let result = vitorias - derrotas

    if (isNaN(result)){
        return "Entrada inválida"
    }

    else
        return result
    }

// Função que ranqueia e retorna o nível com base no saldo de vitórias.
//
function setRanque(saldo){
    let ranque = "ranque"

    if (saldo <= 10){ 
        ranque = "Ferro"    
    }   

    else if (11 <= saldo && saldo <= 20){
        ranque = "Bronze"
    }

    else if (21 <= saldo && saldo <= 50){
        ranque = "Prata"
    }

    else if (51 <= saldo && saldo <= 80){
        ranque = "Ouro"
    }

    else if (81 <= saldo && saldo <= 90){
        ranque = "Diamante"
    }

    else if (91 <= saldo && saldo <= 100){
        ranque = "Lendário"
    }

    else {
        ranque = "Imortal"
    }

    return ranque
}

//Declaração das variáveis e valores de vitórias e derrotas.
//
let saldoVitorias = calcSaldo(90, 20)

let nomeRanque = setRanque(saldoVitorias)

if (saldoVitorias == "Entrada inválida"){
    console.log("Não foi possivel calcular o saldo de vitórias e o ranque. Por favor verifique se os dados para vitórias e derrotas foram inseridos corretamente e são números.")
}

else{
console.log(`O Herói tem um saldo de vitórias igual à ${saldoVitorias} e está no nível de ${nomeRanque}.`)
}
