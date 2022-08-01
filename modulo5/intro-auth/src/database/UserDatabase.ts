import { IUserDB, User,EDITABLE  } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Auth_Users"


public createUser = async (user: User) => {
    const userDB: IUserDB = {
        id: user.getId(),
        nickname: user.getNickname(),
        email: user.getEmail(),
        password: user.getPassword()
    }

    await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
}
public findByEmail = async (email: string) => {
    const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email })
    
    return result[0]
}

public getAllUsers = async () => {
    const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
    
    return result
}
public searchUser = async (search:string) => {
    const result = await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .select()
    .where("nickname", "LIKE", `%${search} %`)    
    return result
}

public  updateUser= async (id: string, nickname: string, password:string,email:string) =>{
    const result =  await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .update({
        email, nickname,password
    })
    .where({id})
       
}
public findById = async (id: string) => {
    const result: IUserDB[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ id })
    
    return result[0]
}
}