import express, {Request, Response} from 'express'
import cors from 'cors'

//função que inicia um servidor
const app = express()

//midlewares
app.use(cors())
app.use(express.json())




//pegar body
app.post('/users', (req: Request, res: Response) => {
    const body = req.body
    console.log(body)
    res.status(200).send("Body recebido!")
})



//função que abre uma porta do nosso pc para a aplicação rodar
app.listen(3003, () => console.log("O servidor está rodando na porta 3003."))

