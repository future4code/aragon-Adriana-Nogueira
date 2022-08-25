import { ShowDatabase } from "../database/showDatabase";
import { ConflictError } from "../errors/ConflictError";
import { NotFoundError } from "../errors/NotFoundError";
import { RequestError } from "../errors/RequestError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { IBuyTicketInputDTO, IBuyTicketOutputDTO, ICreateShowInputDTO, ICreateShowOutputDTO, IDeleteTickeOutputDTO, IDeleteTicketInputDTO, IGetShowOutputDTO, ITicketDB, Show } from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    public createShow = async (input: ICreateShowInputDTO) => {
        const { token, band, startsAt } = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new UnauthorizedError("Somente admins podem criar um show")
        }

        if (typeof band !== "string") {
            throw new RequestError("Nome da banda deve ser uma string")
        }

        if (band.length < 1) {
            throw new RequestError("Nome da banda deve ter mais de 1 caractere")
        }

        const id = this.idGenerator.generate()

        const show = new Show(id, band, new Date(startsAt))

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO = {
            message: "Novo show criado",
            show,
        }

        return response
    }
    public getShows = async () => {
        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map((showDB) => {
            return new Show(showDB.id, showDB.band, showDB.starts_at)
        })

        for (let show of shows) {
            const showId = show.getId()
            const tickets: any = await this.showDatabase.getTickets(showId)
            show.setTickets(tickets)
        }

        const response: IGetShowOutputDTO = {
            shows,
        }

        return response
    }

    public buyTicket = async (input: IBuyTicketInputDTO) => {
        const {token, showId} = input

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new UnauthorizedError("Token ausente/inválido.")
        }

        if(!showId ){
            throw new RequestError("Parâmetros ausentes.")
        }

        if(typeof showId !== "string"){
            throw new RequestError("Parâmetro 'showId' inválido: deve ser uma string.")
        }

        const findShow = await this.showDatabase.verifyShow(showId)

        if(!findShow){
            throw new NotFoundError("Show não encontrado.")
        }

        const findTicket = await this.showDatabase.verifyTicketShow(showId, payload.id)

        if(findTicket){
            throw new ConflictError("Você já comprou ingresso para esse show.")
        }

        const shows = await this.getShows()

        const [ticketsShow] = shows.shows.filter((show: any) => {
            return show.id === showId
        })

        if(ticketsShow.getTickets() < 1){
            throw new RequestError("Ingressos esgotados.")
        }

        const id = this.idGenerator.generate()

        const ticket: ITicketDB = {
            id: id,
            show_id: showId,
            user_id: payload.id
        }

        await this.showDatabase.newTicket(ticket)

        const response = {
            message: "Ingresso comprado com sucesso!"
        }

        return response
    }


    public removeShow = async (input: IDeleteTicketInputDTO) => {
        const { token, ticketId} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Token ausente/inválido.")
        }

        if (!ticketId) {
            throw new RequestError("Parâmetros ausentes.")
        }

        const findTicket = await this.showDatabase.verifyTicketShow(ticketId, payload.id)

        if (!findTicket) {
            throw new NotFoundError("Você não comprou ingresso para esse show.")
        }

        if (payload.role === USER_ROLES.NORMAL) {
            if (payload.id !== findTicket.user_id) {
                throw new Error("Somente admins podem deletar ingressos de outros usuários.");
            }
        }

        await this.showDatabase.deleteTicket(ticketId)

        const response: IBuyTicketOutputDTO = {
            message: "Ingresso deletado com sucesso!"
        }

        return response
    }
} 