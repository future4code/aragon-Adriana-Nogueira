import { ShowDatabase } from "../database/ShowDatabase"
import { RequestError } from "../errors/RequestError"
import { UnauthorizedError } from "../errors/UnauthorizedError"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IGetShowInputDTO, IGetShowOutputDTO, Show } from "../models/Show"
import { USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}
    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, band, startAt } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (typeof band !== "string") {
            throw new RequestError("Parâmetro 'content' inválido")
        }

        if (startAt !== "string") {
            throw new RequestError("Parâmetro 'start' inválido: formato deve ser uma string")
        }

        if (payload.role === USER_ROLES.NORMAL){
            throw new UnauthorizedError("Somente os Admins podem acessar");
            
        }
        if(band.length <1){
            throw new RequestError("Nome da banda deve ter mais que um caracter");
            
        }


        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            band,
           new Date(startAt)
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Show criado com sucesso",
            show
        }

        return response
    }
    public getShow = async (input: IGetShowInputDTO) => {
        const { token } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Não autenticado")
        }

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })
        for(let show of shows){
      const showId = show.getId()
      const tickets: any = await this.showDatabase.getTickets(showId)
            show.setTickets(tickets)
        }
        const response = {
            shows
        }
    
      

        return response
    }

}