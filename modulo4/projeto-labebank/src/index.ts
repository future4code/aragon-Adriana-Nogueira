import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})


app.get("/users", (req: Request, res: Response) => {
    try {
        res.status(200).send({ mensagem: "pong!" })
    } catch (error) {
        res.status(400).send({ mensagem: error.message })
    }
})


type DadosBancarios = {
    id: number,
    nome: string,
    birthday: string,
    cpf: string,
    saldo: number,
    listaExtrato: Extrato[]
}

type Extrato = {
    valor: number,
    descricao: string,
    data: string
}

const dadosBancarios: DadosBancarios[] = [
    {
        id: 1,
        nome: "Adriana Borges Nogueira",
        cpf: "04418952632",
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
        cpf: "12536578412",
        birthday: "12/05/1979",
        saldo: 2535,
        listaExtrato: []
    },
    {
        id: 4,
        nome: "Antonio Jovino Nogueira",
        cpf: "01325469852",
        birthday: "16/05/1950",
        saldo: 3050,
        listaExtrato: []
    },
    {
        id: 5,
        nome: "Geralda Borges Nogueira",
        cpf: '01303274680',
        birthday: "07/09/1952",
        saldo: 5000,
        listaExtrato: []
    },

]

//pegar body
app.post('/users', (req: Request, res: Response) => {
    let errorCodigo = 400
    try {
        const { nome, cpf, birthday } = req.body
        if (!nome || !cpf || !birthday) {
            errorCodigo = 400
            throw new Error("Parâmetros faltando.");

        } if (
            typeof nome !== "string" ||
            typeof cpf !== "string" ||
            typeof birthday !== "string"
        ) {
            errorCodigo = 422
            throw new Error("Tipo de parâmetro inválido!")
        }
        const indexCpf = dadosBancarios.findIndex((dadosBancario) => {
            return dadosBancario.cpf === cpf
        })
        if (indexCpf !== -1) {
            errorCodigo = 409
            throw new Error("Cpf ja esta cadastrado!");
        }
        const dataArray = birthday.split("/")
        const anoNascimento = dataArray[dataArray.length - 1]
        const idade = new Date().getFullYear() - Number(anoNascimento)
        if (idade < 18) {
            errorCodigo = 400
            throw new Error("Idade deve ser maior ou igual a 18");
        }
        if (nome.length < 3) {
            errorCodigo = 400
            throw new Error("Nome deve conter mais de 3 caracteres ");
        }
        const novaConta: DadosBancarios = {
            id: Date.now(),
            nome: nome,
            cpf: cpf,
            birthday: birthday,
            saldo: 0,
            listaExtrato: []

        }
        dadosBancarios.push(novaConta)
        res.status(201).send({
            message: "conta criada com sucesso",
            dadosBancarios: dadosBancarios
        })


    } catch (error) {
        res.status(errorCodigo).send({ messagem: error.message })
    }
})

app.get("/users/:id", (req: Request, res: Response) => {
    let codigoErro = 400
    try {
        const id = Number(req.params.id)

        const conta = dadosBancarios.find((dadosBancario) => {
            return dadosBancario.id === id
        })

        if (!conta) {
            codigoErro = 404
            throw new Error("Conta não encontrada.")
        }

        res.status(200).send({ conta: conta, saldo: conta.saldo })

    } catch (error) {
        res.status(codigoErro).send({ mensagem: error.message })
    }
})
app.put("/contas/:id", (req: Request, res: Response) => {
    let codigoErro = 400
    try {
        const id = Number(req.params.id)
        const saldoAdicional = req.body.saldoAdicional

        if (typeof saldoAdicional !== "number") {
            codigoErro = 422
            throw new Error("Tipo inválido de parâmetro.")
        }

        if (saldoAdicional <= 0) {
            codigoErro = 400
            throw new Error("Saldo adicional deve ser positivo.")
        }

        const conta = dadosBancarios.find((dadosBancario) => {
            return dadosBancario.id === id
        })

        if (!conta) {
            codigoErro = 404
            throw new Error("Conta não encontrada.")
        }

        conta.saldo += saldoAdicional

        res.status(200).send({
            mensagem: "Saldo adicionado com sucesso",
            dadosBancarios: dadosBancarios
        })

    } catch (error) {
        res.status(codigoErro).send({ mensagem: error.message })
    }
})
app.put("contas/:id/pagamento", (req: Request, res: Response) => {
    let errorCodigo = 400
    try {
        const id = Number(req.params.id)
        const descricao = req.body.descricao
        const valor = req.body.valor
        if (!valor || !descricao) {
            errorCodigo = 400
            throw new Error("Parametros faltando")
        }
        if (typeof valor !== "number" || typeof descricao !== "string") {
            errorCodigo = 400
            throw new Error("Tipor de parametro invalido");
        }
        if (valor <= 0) {
            errorCodigo = 400
            throw new Error("valor do pagamento deve ser maior que 0");
        }
        if (descricao.length < 6) {
            errorCodigo = 400
            throw new Error("Descrição deve conter pelo menos seis caracteres");
        }
        const conta = dadosBancarios.find((dadosBancario) => {
            return dadosBancario.id === id
        })
        if (!conta) {
            errorCodigo = 400
            throw new Error("Conta não encontrada");
        }
        if (conta.saldo < valor) {
            errorCodigo = 400
            throw new Error("saldo insuficente");
        }
        conta.saldo -= valor
        const dataAtual = new Date().toLocaleString().split(" ")[0]

        const novoRecibo: Extrato = {
            descricao: descricao,
            valor: valor,
            data:dataAtual
        }
        conta.listaExtrato.push(novoRecibo)
        res.status(200).send ({
            mensagem: "Pagamento realizado com sucesso",
            dadosBancarios:dadosBancarios
        })
    }
    catch(error) {
        res.status(errorCodigo).send({mensagem: error.message})
    }
})