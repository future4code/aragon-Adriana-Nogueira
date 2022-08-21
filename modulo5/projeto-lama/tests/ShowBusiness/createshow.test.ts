import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ICreateShowInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"
import {ShowDatabase} from "../../src/database/showDatabase"



describe("Testando ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("criação de show bem sucedida", async () => {
        const input: ICreateShowInputDTO = {
            token: "token-astrodev",
            band: "Metalica",
            startsAt: "2022/12/08",
        }

        const response = await showBusiness.createShow(input)

        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("Metalica")
        expect(response.message).toEqual("Novo show criado")
    })
})