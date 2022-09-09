
import { ProductDatabase } from "../database/ProductDatabase"
import { NotFoundError } from "../errors/NotFoundError"

import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { IDeleteInputDTO, IDeleteOutputDTO, IGetProductsByTagOutputDTO, IGetProductsInputDTO, IGetProductsOutputDTO, IProductInputDTO, IProductOutputDTO, ITagsProductsDB, Product } from "../models/Product"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ProductBusiness {
    constructor(
        private productDataBase: ProductDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public getProducts = async (input: IGetProductsInputDTO) => {
        const search = input.search

        if (search) {
            const productsDB = await this.productDataBase.getProductsBySearch(search)

            if (productsDB.length === 0) {
                throw new RequestError("Não ha produtos nessa busca.")
            }

            const products = productsDB.map(productDB => {
                return new Product(
                    productDB.id,
                    productDB.name
                )
            })

            for (let product of products) {

                const tagsDB: any = await this.productDataBase.getTags(product.getId())

                const tags = tagsDB?.map((tag: any) => tag.tag)


                product.setTags(tags)
            }

            const response: IGetProductsOutputDTO = {
                products
            }

            return response
        }

        const productsDB = await this.productDataBase.getProducts()

        const products = productsDB.map(productDB => {
            return new Product(
                productDB.id,
                productDB.name
            )
        })

        for (let product of products) {

            const tagsDB: any = await this.productDataBase.getTags(product.getId())

            const tags = tagsDB?.map((tag: any) => tag.tag)

            product.setTags(tags)
        }

        const response: IGetProductsOutputDTO = {
            products
        }

        return response
    }
    public getProductsTags = async (input: IGetProductsInputDTO) => {
        const search = input.search

        const tag = await this.productDataBase.getIdTag(search)

        if(!tag){
            throw new RequestError("Produto não localizado.")
        }

        const tagId = tag?.map(item => item.id)

        const products = await this.productDataBase.getSearchProductsByTag(tagId[0])

        if (products.length === 0 || undefined) {
            throw new RequestError("Produto nao localizado")
        }

        const response: IGetProductsByTagOutputDTO = {
            products
        }

        return response
    }
    public createProduct = async (input: IProductInputDTO) => {
        const name = input.name
        const token = input.token
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Parametros invalidosd ou faltando token.")
        }

        if (!name) {
            throw new RequestError("Parametros faltando.")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parametro Invalido.")
        }

        if (name.length < 4) {
            throw new RequestError("Parametro Invalido.")
        }
       
        const id = this.idGenerator.generate()

        const newProduct = new Product(
            id,
            name.toUpperCase()
        )

        await this.productDataBase.createProduct(newProduct)

        const response: IProductOutputDTO = {
            message: "Produto Adicionado com sucesso!"
        }

        return response
    }
   
}