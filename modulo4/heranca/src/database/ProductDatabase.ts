import { BaseDatabase } from "./BaseDatabase";
import { Product } from "../models/Product"

export class ProductDatabase extends BaseDatabase {
    
    public static TABLE_PRODUCTS = "Labe_Products"
    

    public async getAllProduct() {
        const result = await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .select()

        return result
    }

    public async createUser(product: Product) {
        await BaseDatabase
            .connection(ProductDatabase.TABLE_PRODUCTS)
            .insert({
                id: product.getId(),
                name: product.getName(),
                price: product.getPrice()
            })
    }

}