
import { ProductDatabase } from "../database/ProductDatabase"
import { ConflictError } from "../errors/ConflictError"
import { NotFoundError } from "../errors/NotFoundError"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateTagInputDTO, IGetProductsInputDTO, IGetProductsOutputDTO, IProductInputDTO, IProductOutputDTO, ITagsProductsDB, Product } from "../models/Product"
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

            const products = productsDB.map(productDB => {
                return new Product(
                    productDB.id,
                    productDB.name
                )
            })

            for (let product of products) {
                const tags: string[] = []
                const tagsDB: any = await this.productDataBase.getTags(product.getId())

                for (let tag of tagsDB) {
                    tags.push(tag.tag)
                }

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
            const tags: string[] = []
            const tagsDB: any = await this.productDataBase.getTags(product.getId())

            for (let tag of tagsDB) {
                tags.push(tag.tag)
            }

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

        const tagId = tag.map(item => item.id)

        const products = await this.productDataBase.getSearchProductsByTag(tagId[0])

        const response = {
            products: products
        }

        return response
    }


    public createProduct = async (input: IProductInputDTO) => {
        const name = input.name
        const token = input.token
        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Token Invalido ou ausente.")
        }

        if (!name) {
            throw new RequestError("Parametros ausentes.")
        }

        if (typeof name !== "string") {
            throw new RequestError("Parametro name invalido.")
        }

        if (name.length < 1) {
            throw new RequestError("Parametro name invalido.")
        }

        const id = this.idGenerator.generate()

        const newProduct = new Product(
            id,
            name.toUpperCase()
        )

        await this.productDataBase.createProduct(newProduct)

        const response: IProductOutputDTO = {
            message: "Produto Adicionado!"
        }

        return response
    }
    public createTag = async (input: ICreateTagInputDTO) => {
        const productId = input.id
        const tagName = input.tagName
        const token = input.token

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Missing or invalid token.")
        }

        if (!productId || typeof productId !== "string") {
            throw new RequestError('Missing params: insert a valid product id.');
        }

        const searchProduct = await this.productDataBase.verifyProduct(productId);

        if (!searchProduct) {
            throw new NotFoundError('Product not found.');
        }

        const findTag = await this.productDataBase.getIdTag(tagName)

        if(findTag.length === 0){
            throw new NotFoundError('Tag not found.');
        }

        const getTag = await this.productDataBase.getIdTag(tagName);
        const tagId = getTag.map(item => item.id);

        const findTagProduct = await this.productDataBase.verifyProductTag(productId, tagId[0])

        if(findTagProduct.length !== 0){
            throw new ConflictError("Tag already related to product.")   
        }

        const id = this.idGenerator.generate();

        const tag: ITagsProductsDB = {
            id: id,
            product_id: productId,
            tag_id: tagId[0],
        };

        await this.productDataBase.createTag(tag);

        const response = {
            message: 'Tag added successfully!',
            yourTag: tag,
        };

        return response
    };
}