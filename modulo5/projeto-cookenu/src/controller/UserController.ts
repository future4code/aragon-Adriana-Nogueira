import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { User, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

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

            if (typeof nickname !== "string") {
                throw new Error("'nickname' deve ser uma string")
            }

            if (typeof email !== "string") {
                throw new Error("'email' deve ser uma string")
            }

            if (typeof password !== "string") {
                throw new Error("'password' deve ser uma string")
            }

            if (nickname.length < 3) {
                throw new Error("'nickname' deve possuir ao menos 3 caracteres")
            }

            if (password.length < 6) {
                throw new Error("'password' deve possuir ao menos 6 caracteres")
            }

            if (!email.includes("@") || !email.includes(".com")) {
                throw new Error("'password' deve possuir ao menos 6 caracteres")
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(password)

            const user = new User(
                id,
                nickname,
                email,
                hashPassword,
                USER_ROLES.NORMAL
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId(),
                role: user.getRole()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({
                message: "Cadastro realizado com sucesso",
                token
            })
        } catch (error) {
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
                throw new Error("Erro, faltando email ou senha!")
            }

            if (typeof email !== "string") {
                throw new Error("'email' deve ser uma string")
            }

            if (typeof password !== "string") {
                throw new Error("'password' deve ser uma string")
            }

            if (password.length < 6) {
                throw new Error("'password' deve possuir ao menos 6 caracteres")
            }

            if (!email.includes("@") || !email.includes(".com")) {
                throw new Error("'password' deve possuir ao menos 6 caracteres")
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if (!userDB) {
                errorCode = 401
                throw new Error("Email não cadastrado")
            }

            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password,
                userDB.role
            )

            const hashManager = new HashManager()
            const isPasswordCorrect = await hashManager.compare(
                password,
                user.getPassword()
            )

            if (!isPasswordCorrect) {
                errorCode = 401
                throw new Error("Senha inválida")
            }

            const payload: ITokenPayload = {
                id: user.getId(),
                role: user.getRole()
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
    public deletarUsuario = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const id = req.params.id

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if (!payload) {
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            if (payload.role !== USER_ROLES.ADMIN) {
                errorCode = 403
                throw new Error("Somente admins podem acessar esse endpoint")
            }

            const userDatabase = new UserDatabase()
            const isUserExists = await userDatabase.checkIfExistsById(id)

            if (!isUserExists) {
                errorCode = 401
                throw new Error("Token inválido")
            }

            if (id === payload.id) {
                throw new Error("Não é possível deletar a própria conta")
            }


            await userDatabase.deletarUsuario(id)

            res.status(200).send({
                message: "User deletado com sucesso"
            })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}