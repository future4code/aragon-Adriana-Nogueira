

import { ICreateTagInputDTO, IProductDB, ITagDB, ITagsProductsDB, Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Amaro_Products"
    public static TABLE_TAGS = "Amaro_Tags"
    public static TABLE_TAGS_PRODUCTS = "Amaro_Tags_Products"

    public getProducts = async (): Promise<IProductDB[] | undefined> => {
        const result: IProductDB[] = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return result

}
public getProductsBySearch = async (search: string): Promise<IProductDB[] | undefined> => {
    const result: IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where("id", "LIKE", `%${search}%`)
        .orWhere("name", "LIKE", `%${search}%`)

    return result
}
public getTags = async (id: string): Promise<ITagDB[] | undefined> => {

    const result = await BaseDatabase.connection.raw(`
    SELECT Amaro_Tags.id, Amaro_Tags.tag 
    FROM Amaro_Tags_Products
    JOIN Amaro_Tags
    ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
    WHERE Amaro_Tags_Products.product_id = "${id}";`)

    return result[0]
}
public getIdTag = async (tag: string): Promise<ITagDB[] | undefined> => {
    const result: ITagDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS)
        .select()
        .where({ tag })

    return result
}
public getSearchProductsByTag = async (search: string): Promise<IProductDB[]| undefined> => {
    const [result] = await BaseDatabase.connection.raw(`
    SELECT Amaro_Products.id,Amaro_Products.name
    FROM Amaro_Tags_Products
    JOIN Amaro_Tags
    ON Amaro_Tags_Products.tag_id = Amaro_Tags.id
    JOIN Amaro_Products
    ON Amaro_Tags_Products.product_id = Amaro_Products.id
    WHERE Amaro_Tags_Products.tag_id = "${search}";`)

    return result
}
public getProductsById = async (id: string): Promise <IProductDB | undefined> => {

    const [result] = await BaseDatabase
    .connection(ProductDatabase.TABLE_PRODUCTS)
    .select()
    .where("id", "=", `${id}`)

    return result
} 

public toProductDBModel = async (product: Product) => {
    const productDB: IProductDB = {
        id: product.getId(),
        name: product.getName()
    }
    return productDB

}
public createProduct = async (product: Product):Promise<void> => {
    const productDB = await this.toProductDBModel(product)

    await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert(productDB)
}


public createTagsProduct = async (input: ICreateTagInputDTO) => {
    const {
        id,
        tagName,
    } = input
 console.log(input)
    await BaseDatabase
    .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
    .insert({
        id,
        tagName,
    })
}


}
