import { Request, Response } from "express";
import connection from "../database/connection";
import { TABLE_PERFUMES } from "../database/tableNames";

export const editarPerfumes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const price = req.body.price

        if (typeof price !== "number") {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number.")
        }

        if (price <= 0) {
            errorCode = 422
            throw new Error("Parâmetro 'price' deve ser number maior que 0.")
        }

        // const [ productExists ] = await connection
        // .raw(`SELECT * FROM ${TABLE_PRODUCTS}
        // WHERE id = "${id}";`)

        const productExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if (productExists.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }

        // await connection.raw(`
        // UPDATE ${TABLE_PRODUCTS}
        // SET price = ${price}
        // WHERE id = "${id}";`)

        await connection(TABLE_PERFUMES)
            .update({
                price: price
            })
            .where({
                id: id
            })
      
        res.status(200).send({ message: "Preço do produto editado com sucesso." })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}
