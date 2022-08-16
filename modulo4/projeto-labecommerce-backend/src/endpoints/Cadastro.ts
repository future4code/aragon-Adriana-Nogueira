import { Request, Response } from "express"
import connection from "../database/connection";
import { TABLE_USERS } from "../database/tableNames";
import { User } from "../models/User";

export const cadastraUsuario = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const email = req.body.email
       const password = req.body.password
       

        if (!email || !password )  {
            errorCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof email !== "string" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'name' deve ser do tipo string e 'price' do tipo number.");
        }
        if (typeof password !== "string" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'price' do tipo number.");
        }
       


        const novoUser:User = {
            id: Date.now().toString(),
            email: email,
            password:password,
           
        }

        // await connection.raw(`
        // INSERT INTO ${TABLE_PERFUMES} (id, name, price)
        // VALUES ("${novoPerfume.id}", "${novoPerfume.name}", ${novoPerfume.price});
        // `)
        await connection(TABLE_USERS)
        .insert({
            id: novoUser.id,
            email: novoUser.email,
            password: novoUser.password,
          
        })

        res.status(201).send({ product: novoUser, message: "Produto criado com sucesso!" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  