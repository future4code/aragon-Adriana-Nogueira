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

        if (typeof nickname !== "string") {
            throw new Error("Parâmetro 'nickname' deve ser uma string")
        }

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new Error("Parâmetro 'password' deve ser uma string")
        }

        if (nickname.length < 3) {
            throw new Error("O parâmetro 'nickname' deve possuir ao menos 3 caracteres")
        }

        if (password.length < 6) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
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

        if (typeof email !== "string") {
            throw new Error("Parâmetro 'email' deve ser uma string")
        }

        if (typeof password !== "string") {
            throw new Error("Parâmetro 'password' deve ser uma string")
        }

        if (password.length < 6) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        if (!email.includes("@") || !email.includes(".com")) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
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
        const search = req.query.search
        
        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
        }

        if (typeof search !== "string") {
            throw new Error("Parâmetro 'search' deve ser uma string")
        }

        const userDatabase = new UserDatabase()
        const isUserExists = await userDatabase.checkIfExistsById(payload.id)

        if (!isUserExists) {
            errorCode = 401
            throw new Error("Token inválido")
        }

        const usersDB = await userDatabase.getAllUsers(search)

        const users = usersDB.map((user) => {
            return new User(
                user.id,
                user.nickname,
                user.email,
                user.password
            )
        })

        const result = users.map((user) => {
            return {
                id: user.getId(),
                nickname: user.getNickname(),
                email: user.getEmail()
            }
        })

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}

public editUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const token = req.headers.authorization
        const nickname = req.body.nickname
        const email = req.body.email
        const password = req.body.password
        
        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
        }

        if (!nickname && !email && !password) {
            throw new Error("Parâmetro faltando")
        }

        if (nickname && typeof nickname !== "string") {
            throw new Error("Parâmetro 'nickname' deve ser uma string")
        }

        if (email && typeof email !== "string") {
            throw new Error("Parâmetro 'email' deve ser uma string")
        }

        if (password && typeof password !== "string") {
            throw new Error("Parâmetro 'password' deve ser uma string")
        }

        if (nickname && nickname.length < 3) {
            throw new Error("O parâmetro 'nickname' deve possuir ao menos 3 caracteres")
        }

        if (password && password.length < 6) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        if (email && (!email.includes("@") || !email.includes(".com"))) {
            throw new Error("O parâmetro 'password' deve possuir ao menos 6 caracteres")
        }

        const userDatabase = new UserDatabase()
        const isUserExists = await userDatabase.checkIfExistsById(payload.id)

        if (!isUserExists) {
            errorCode = 401
            throw new Error("Token inválido")
        }

        const userDB = await userDatabase.findById(payload.id)
        const user = new User(
            userDB.id,
            userDB.nickname,
            userDB.email,
            userDB.password
        )

        nickname && user.setNickname(nickname)
        email && user.setEmail(email)
        password && user.setPassword(password)

        await userDatabase.editUser(user)

        res.status(201).send({
            message: "Edição realizada com sucesso",
            user
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


    public deleteUser = async (req: Request, res: Response) => {
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

        if (typeof id !== "string") {
            throw new Error("Parâmetro 'id' deve ser uma string")
        }

        const userDatabase = new UserDatabase()
        const isUserExists = await userDatabase.checkIfExistsById(payload.id)

        if (!isUserExists) {
            errorCode = 401
            throw new Error("Token inválido")
        }

        if (id === payload.id) {
            throw new Error("Não é possível deletar a própria conta")
        }

       await userDatabase.deleteUser(id)

        res.status(200).send({
            message: "User deletado com sucesso"
        })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
}