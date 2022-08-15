import { IGetPostsInputDTO } from "../../src/models/Post"
import {PostBusiness} from "../../src/business/PostBusiness"
import { PostDatabase } from "../../src/database/PostDatabase"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { PostDatabaseMock } from "../mocks/PostDatabaseMock"



describe("Testando UserBusiness",() => {
    const userBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    test("Get Post Bem sucedido", async () => {
        const input: IGetPostsInputDTO = {
           token:"token-mock",
          

        }

        const response = await userBusiness.getPosts(input)

        expect(response.posts.length).toEqual(3)
    })
}) 
