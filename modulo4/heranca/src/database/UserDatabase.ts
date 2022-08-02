import { BaseDatabase } from "./BaseDatabase";
import { User } from "../models/User"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labe_Users"
    public static TABLE_PRODUCTS = "Labe_Products"
    public static TABLE_PURCHASES = "Labe_Purchases"

    public async getAllUsers() {
        const result = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()

        return result
    }

    public async createUser(user: User) {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert({
                id: user.getId(),
                email: user.getEmail(),
                password: user.getPassword()
            })
    }

    public async getUserById(id: string) {
        const result = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ id: id })

        return result
    }
}
