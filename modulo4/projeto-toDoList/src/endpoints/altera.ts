import { Request, Response } from "express"
import connection from "../database/connection"
import { User } from "../types"

export const alteraUsuario = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.params.userId
        const nickname = req.body.nickname

        if(!nickname){
            errorCode = 404 
            throw new Error("Parametro ausente");  
        }
        if(typeof nickname !== "string"){
            errorCode = 404 
            throw new Error("parametro deve ser uma string");  
        }
        if(nickname.length < 3){
            errorCode = 404 
            throw new Error("parametro deve conter ao menos 3 caracteres");  
        }


        const [verifcarUser] = await connection.raw(`
        SELECT * FROM Users
        WHERE id = ${userId};
        `)
        const encontrarId = verifcarUser[0]
        if(!encontrarId){
            errorCode = 404 
            throw new Error("Usuario Não encontrado"); 
        }
        await connection.raw(`
        UPDATE Users
        SET nickname = "${nickname}"
        WHERE id = "${userId}";
        `)
        
            res.status(201).send({ mensagem: "Nickname alterado  com sucesso!"})
        

    } catch (error) {
        res.status(errorCode).send({ message: error.message})
    }
} 