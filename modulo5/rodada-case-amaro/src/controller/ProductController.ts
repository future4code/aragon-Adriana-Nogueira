import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";
import { IGetProductsInputDTO, IProductInputDTO } from "../models/Product";


export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public getProducts = async( req: Request, res: Response) => {
        try {
            const input: IGetProductsInputDTO = {
                search: req.query.search as string
            }
            const response = await this.productBusiness.getProducts(input)
            res.status(200).send(response)

        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao buscar produtos." })

        }
    }
    public createProduct = async (req: Request, res: Response) => {
        
            try {
                const input: IProductInputDTO = {
                    token: req.headers.authorization,
                    name: req.body.name
                }
    
                const response = await this.productBusiness.createProduct(input)
                res.status(201).send(response)
    
            } catch (error: unknown) {
                if (error instanceof BaseError) {
                    return res.status(error.statusCode).send({ message: error.message })
                }
    
                res.status(500).send({ message: "Erro inexperado ao criar." })
            }
        }   
}
