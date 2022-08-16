
//exercicio 2




 enum Cores {
    AZUL = "Azul",
    AMARELO = "Amarelo",
    VERDE ="Verde",
    VERMELHO = "Vermelho",
    BRANCO = "Branco",
    PRETO = "Preto",
}

type Usuario = {
    nome: string,
    idade:number,
    cor: Cores
}

const Adriana = {
    nome:"Adriana",
    idade: 43,
    cor:Cores.AMARELO
}



function imprimeUsuario (usuario: Usuario) {
    console.log(usuario)
}

imprimeUsuario(Adriana)