import { UserDatabase } from "../database/UserDatabase"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { User, } from "../models/User";

export class UserController {
    public signup = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const nickname = req.body.nickname
            const email = req.body.email
            const password = req.body.password

            if (!nickname || !email || !password) {
                throw new Error("Parâmetros faltando")
            }
            if (!email.includes("@")) {
                throw new Error("Erro. email inválido.")
            }
        
            if (password.length < 6) {
                throw new Error("Erro. password deve possuir no mínimo 6 caracteres.")
            }
            if (nickname.length < 6) {
                throw new Error("Erro. password deve possuir no mínimo 6 caracteres.")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const user = new User(
                id,
                nickname,
                email,
                password
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({
                message: "Cadastro realizado com sucesso",
                token
            })
        } catch (error) {
            if (
                typeof error.message === "string"
                && error.message.includes("Duplicate entry")
            ) {
                return res.status(400).send("Email already taken")
            }
            res.status(errorCode).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const email = req.body.email
            const password = req.body.password

            if (!email || !password) {
                errorCode = 401
                throw new Error("Email ou senha faltando")
            }
            if (password.length < 6) {
                throw new Error("Erro. password deve possuir no mínimo 6 caracteres.")
            }if (!email.includes("@")) {
                throw new Error("Erro. email inválido.")
            }
            

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if (!userDB) {
                errorCode = 401
                throw new Error("Email não foi cadastrado")
            }

            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password
            )
            
            if (user.getPassword() !== password) {
                errorCode = 401
                throw new Error("Senha inválida")
            }


            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(200).send({
                message: "Login realizado com sucesso",
                token
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }


    public getAllUsers = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)
            const search = req.query.search as string

           
            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            const userDatabase = new UserDatabase()
            const usersDB = await userDatabase.getAllUsers()

            const users = usersDB.map((user) => {
                return new User(
                    user.id,
                    user.nickname,
                    user.email,
                    user.password
                )
            })
         
           
            res.status(200).send({ users })
            
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
    public async updateUser(req: Request, res: Response) {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const{ email, nickname, password} = req.body
          
            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)
           
        const id = payload.id
           
            if (!payload) {
                errorCode = 404
                throw new Error("Token  invalido");
            }
            const userDatabase = new UserDatabase()
            const searchUser = await userDatabase.findById(id)

            if  (!searchUser)  {
            errorCode =  404
                throw  new  Error ( "Usuário não encontrado" ) ;
            }

            if  ( ! email  &&  ! nickname  &&  ! password )  {
                errorCode =  400
                throw  new  Error ( "Missing params" ) 
            }
            
            const result = await userDatabase.updateUser(id, email, nickname, password)
         
            res.status(200).send({
          message:"Sucesso"      
            })
            res.status(200).send({messagem: "Efetuado"})
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}

