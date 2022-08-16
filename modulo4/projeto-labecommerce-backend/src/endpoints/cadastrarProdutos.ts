import { Request, Response } from "express"
import connection from "../database/connection";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";


export const cadastraProdutos = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
       const name = req.body.name
       const price = req.body.price
       

        if (!name || !price )  {
            errorCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof name !== "string" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'name' deve ser do tipo string e 'price' do tipo number.");
        }
        if (typeof price !== "number" ) {
            errorCode = 422
            throw new Error("Erro: parâmetro 'price' do tipo number.");
        }
       


        const novoProduto:Product = {
           id:Date.now().toString(),
            name:name,
            price:price,
           
        }

        // await connection.raw(`
        // INSERT INTO ${TABLE_PERFUMES} (id, name, price)
        // VALUES ("${novoPerfume.id}", "${novoPerfume.name}", ${novoPerfume.price});
        // `)
        await connection(TABLE_PRODUCTS)
        .insert({
            id: novoProduto.id,
            name: novoProduto.name,
            price: novoProduto.price,
          
        })

        res.status(201).send({ product: novoProduto, message: "Produto criado com sucesso!" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}  