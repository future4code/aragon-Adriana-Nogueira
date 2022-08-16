

type Pessoa1 = {
    data: string,
    dataEmissão: string,
    
}

const pessoas1: Pessoa1[] = [
    {
        data: "12/05/1979",
    dataEmissão: "10/08/2020",
    },
    {
        data: "08/079/1972",
        dataEmissão: "10/12/2021",
    },
    
    
]

function filtraLista1(lista: Pessoa1[]): Pessoa1[] {
    const resultado: Pessoa1[] = lista.filter((item: Pessoa1) => {
        const primeiraCondicao = item.data === 
        const segundaCondicao = item.dataEmissão >= "01/01/2020"
        return primeiraCondicao && segundaCondicao
    })

    return resultado
}

console.log(filtraLista1(pessoas1))