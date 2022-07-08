export type DadosBancarios = {
    id: number,
    nome: string,
    birthday: string,
    cpf:string,
    saldo: number,
    listaExtrato:Extrato[] 
}

export type Extrato = {
    valor: number,
    descricao: string,
    data: string
}

export const dadosBancarios: DadosBancarios[] = [
    {
        id: 1,
        nome: "Adriana Borges Nogueira",
        cpf:"04418952632",
        birthday: "12/05/1979",
        saldo: 1002,
        listaExtrato: [
            {
                valor: 50,
                descricao: "compra supermercado pague menos",
                data: "08/07/2022"
            },
            {
                valor: 680,
                descricao: "conserto carro",
                data: "01/07/2022"
            },

        ]
    },
    {
        id: 2,
        nome: "Andrea Borges Nogueira",
        cpf:"12536578412",
        birthday: "12/05/1979",
        saldo: 2535,
        listaExtrato: []
    },
    {
        id: 4,
        nome: "Antonio Jovino Nogueira",
        cpf:"01325469852",
        birthday: "16/05/1950",
        saldo: 3050,
        listaExtrato: []
    },
    {
        id: 5,
        nome: "Geralda Borges Nogueira",
        cpf:'01303274680',
        birthday: "07/09/1952",
        saldo: 5000,
        listaExtrato: []
    },

]