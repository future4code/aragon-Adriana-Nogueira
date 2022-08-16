import { Request, Response } from "express";
import { networkInterfaces } from "os";
import connection from "../database/connection";
import { products } from "../database/data";
import { TABLE_PRODUCTS } from "../database/tableNames";
import { Product } from "../models/Product";

export const criarProdutos = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, price } = req.body

        if (!name || !price) {
            errorCode = 422
            throw new Error("Erro: parâmetros ausentes.");
        }

        if (typeof name !== "string" || typeof price !== "number") {
            errorCode = 422
            throw new Error("Erro: parâmetro 'name' deve ser do tipo string e 'price' do tipo number.");
        }

        const novoProduct = {
            id: Date.now(),
            name: name,
            price: price
        }

        await connection.raw(`
        INSERT INTO ${TABLE_PRODUCTS} (id, name, price)
        VALUES ("${novoProduct.id}", "${novoProduct.name}", ${novoProduct.price});
        `)

        res.status(201).send({ message: "Produto criado com sucesso!" })

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
} 