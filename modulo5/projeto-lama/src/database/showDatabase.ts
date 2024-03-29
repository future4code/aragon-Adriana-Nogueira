import { IShowDB, ITicketDB, Show } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"


export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
        }

        return showDB
    }

    public createShow = async (show: Show) => {
        const showDB = this.toShowDBModel(show)

        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).insert(
            showDB
        )
    }

    public getShows = async () => {
        const showsDB: IShowDB[] = await BaseDatabase.connection(
            ShowDatabase.TABLE_SHOWS
        ).select()

        return showsDB
    }

public getTickets = async (showId: string) => {
    const result = await BaseDatabase.connection(
        ShowDatabase.TABLE_TICKETS
    )
        .select()
        .count("id AS tickets")
        .where({ show_id: showId })

    return result[0]
}
public verifyShow = async (id:string) :Promise<IShowDB | undefined>=> {
    const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({ id })

    return result[0]
}

public verifyTicketShow = async (id:string, idUser: string): Promise<ITicketDB | undefined> => {
    const result: ITicketDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .select()
        .where( "show_id", "=",  `${id}`)
        .andWhere("user_id", "=" , `${idUser}`)

    return result[0]
}

public newTicket = async (ticket: ITicketDB) => {

    await BaseDatabase
        .connection(ShowDatabase.TABLE_TICKETS)
        .insert(ticket)
}
public deleteTicket = async (id: string) => {
    await BaseDatabase
    .connection(ShowDatabase.TABLE_TICKETS)
    .delete()
    .where({id})
}
} 
