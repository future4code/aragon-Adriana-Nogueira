import connection from "../database/connection";
import { TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames";
import { Request, Response } from "express";

export const buscarCompra = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const user_id = req.params.user_id

        if (!user_id) {
            errorCode = 422
            throw new Error("Parâmetros ausentes.");
        }
        const usuarioExistente = await connection(TABLE_USERS)
            .select("*")
            .where("id", "=", `${user_id}`)

        if (usuarioExistente.length === 0) {
            errorCode = 422
            throw new Error("usuario não cadastrado.");
        }
        const verCompra = await connection(TABLE_PURCHASES)
            .select("*")
            .where("user_id", "=", `${user_id}`)

        if (verCompra.length === 0) {
            errorCode = 409
            throw new Error("Usuário(a) não possui compras.");
        } res.status(200).send({ compras: verCompra })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
