enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type Conta = {
    nome: string,
    ano: number,
    pontos?: number,
    genero: GENERO
}



function escolherCatalog(nome: string, ano: number, genero: GENERO, pontos?: number): Conta {
    if (pontos) {
        return {
            nome: nome,
            genero: genero,
            ano: ano,
            pontos: pontos
        }
    } else {
        return {
            nome: nome,
            genero: genero,
            ano: ano,
        }
    }
}

console.log(escolherCatalog("Duna", 2021, GENERO.ACAO, 74))
console.log(escolherCatalog("Duna", 2021, GENERO.ACAO))
