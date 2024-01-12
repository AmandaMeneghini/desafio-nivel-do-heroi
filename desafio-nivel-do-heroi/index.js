//nome e quatidade de XP do herói
let nomeDoHeroi = "Cripton"
let xpDoHeroi = 8200
let nivelDoHeroi = ""

//comparação da pontuação de XP do Herói
for (i = 0; i < 1; i++){
    if (xpDoHeroi < 1000){
        nivelDoHeroi = "Ferro"
    }else if ((xpDoHeroi >= 1001) && (xpDoHeroi <= 2000)) {
        nivelDoHeroi = "Bronze"
    }else if ((xpDoHeroi >= 2001) && (xpDoHeroi <= 5000)) {
        nivelDoHeroi = "Prata"
    }else if ((xpDoHeroi >= 5001) && (xpDoHeroi <= 7000)) {
        nivelDoHeroi = "Ouro"
    }else if ((xpDoHeroi >= 7001) && (xpDoHeroi <= 8000)) {
        nivelDoHeroi = "Platina"
    }else if ((xpDoHeroi >= 8001) && (xpDoHeroi <= 9000)) {
        nivelDoHeroi = "Ascendente"
    }else if ((xpDoHeroi >= 9001) && (xpDoHeroi <= 10000)) {
        nivelDoHeroi = "Imortal"
    }else if (xpDoHeroi > 10001) {
        nivelDoHeroi = "Radiante"
    }
}

const mensagemNomeDoHeroi = "O Herói de nome "
const mensagemNivelDoHeroi = " está no nível de "

//mensagem de informação
switch (nivelDoHeroi){

    case "Ferro": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Bronze": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Prata": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Ouro": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Platina": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Ascendente": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Imortal": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    case "Radiante": 
        console.log(mensagemNomeDoHeroi + nomeDoHeroi + mensagemNivelDoHeroi + nivelDoHeroi)
    break

    default:
        console.log("Operação inválida")
}
