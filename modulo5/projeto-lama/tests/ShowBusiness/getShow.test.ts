
import { ShowBusiness } from "../../src/business/showBusiness"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import {ShowDatabase} from "../../src/database/showDatabase"

describe("Testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
    
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Get shows bem sucedido", async () => {

        const response = await showBusiness.getShows()

        expect(response.shows.length).toEqual(3)
        expect(response.shows[0].getId()).toEqual("201")
        expect(response.shows[0].getBand()).toEqual("Metalica")
        expect(response.shows[0].getStartsAt()).toEqual(new Date("2022/12/05"))
    })

}) 
