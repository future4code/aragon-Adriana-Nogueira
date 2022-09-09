import { ShowBusiness } from "../../src/business/ShowBusiness"
import { ShowDatabase } from "../../src/database/showDatabase"
import { BaseError } from "../../src/errors/BaseError"
import { IDeleteTicketInputDTO } from "../../src/models/Show"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { ShowDatabaseMock } from "../mocks/ShowDatabaseMock"

describe("Testing ShowBusiness", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock()as unknown as ShowDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    test("Delete ticket bem sucedido", async () => {

        const input: IDeleteTicketInputDTO = {
            token: "token-mock",
            ticketId: "304"
        }

        const response = await showBusiness.removeShow(input)

        expect(response.message).toEqual("Ingresso deletado com sucesso!")

    })

    test("retorna erro se token for inválido/ausente", async () => {
        expect.assertions(2)
        try {
            const input: IDeleteTicketInputDTO= {
                token: "",
                ticketId: "306"
            }

            await showBusiness.removeShow(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {

                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Token ausente/inválido.")
            }
        }
    })
    test("retorna erro se token for inválido/ausente", async () => {
        expect.assertions(2)
        try {
            const input: IDeleteTicketInputDTO = {
                token: "",
                ticketId: "306"
            }

            await showBusiness.removeShow(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {

                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Token ausente/inválido.")
            }
        }
    })

    test("retorna erro se id do ticket estiver ausente", async () => {
        expect.assertions(2)
        try {
            const input: IDeleteTicketInputDTO= {
                token: "token-mock",
                ticketId: ""
            }

            await showBusiness.removeShow(input)

        } catch (error: unknown) {
            if (error instanceof BaseError) {

                expect(error.statusCode).toEqual(400)
                expect(error.message).toEqual("Parâmetros ausentes.")
            }
        }
    })

})
