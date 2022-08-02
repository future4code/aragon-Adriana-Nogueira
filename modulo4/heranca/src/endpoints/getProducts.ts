import { Request, Response } from "express"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { ProductDatabase } from "../database/ProductDatabase"
import { Product } from "../models/Product"


// export const getProducts = async (req: Request, res: Response) => {
//     let errorCode = 400
//     try {
//         const name = req.body.name
//         const price = req.body.price

//         if (!name || !price) {
//             throw new Error("Body inválido.")
//         }

//         const product = new Product(
//             Date.now().toString(),
//             name,
//             price
//         )

//         await connection(TABLE_PRODUCTS).insert({
//             id: product.getId(),
//             name: product.getName(),
//             price: product.getPrice()
//         })
        
        
//         res.status(200).send({ products: product })
//     } catch (error) {
//         res.status(errorCode).send({ message: error.message })
//     }
// }
export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        // const result = await connection(TABLE_USERS).select()
        const userDatabase = new ProductDatabase()
        const result = await userDatabase.getAllProduct()

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}