import { ProductBusiness } from "../../src/business/ProductBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"

import { IGetProductsInputDTO } from "../../src/models/Product"
import {ProductDatabaseMock} from "../mocks/ProductDatabaseMock.ts" 

describe("Testing ProductsBusiness", () => {
    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock() as any,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("", async () => {

        const input: IGetProductsInputDTO = {
            search: ""
        }

        const response = await productBusiness.getProducts(input)

        expect(response.products.length).toEqual(10)
        expect(response.products[0].getId()).toEqual("8371")
        expect(response.products[0].getName()).toEqual("VESTIDO TRICOT CHEVRON")
    })

})  