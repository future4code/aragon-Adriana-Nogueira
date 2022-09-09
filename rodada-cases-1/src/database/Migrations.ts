import { BaseDatabase } from "./BaseDatabase"

import { UserDatabase } from "./UserDatabase"
import { users } from "./migrations/data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
       
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(255) NOT NULL
        
        );

        // CREATE TABLE IF NOT EXISTS
        //     id VARCHAR(255) PRIMARY KEY,
        //     band VARCHAR(255) NOT NULL,
        //     starts_at DATE NOT NULL
        // );

        // CREATE TABLE IF NOT EXISTS}(
        //     id VARCHAR(255) PRIMARY KEY NOT NULL,
        //     productId VARCHAR(255) NOT NULL,
        //     name VARCHAR(255) NOT NULL,
        //     FOREIGN KEY(productId) REFERENCES Product_Catalog(id) (id)
        // );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

      

    }
}

const migrations = new Migrations()
migrations.execute()


       
    