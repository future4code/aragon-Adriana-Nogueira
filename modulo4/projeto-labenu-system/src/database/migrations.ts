// import { BaseDatabase } from "./BaseDatabase"
// import { ClassroomDatabase } from "./ClassroomDatabase"
// import { classroom, student } from "./data"
// import { StudentDataBase } from "./StudentDatabase"

// class Migrations extends BaseDatabase {
//     protected TABLE_NAME = ""

//     public async execute() {
//         try {
//             await this.createTables()
//             console.log("Tables created successfully")
//             await this.insertData()
//             console.log("Tables populated successfully")
//         } catch (error) {
//             console.log(error.sql || error.message)
//         } finally {
//             console.log("Ending connection...")
//             BaseDatabase.connection.destroy()
//             console.log("Migrations completed.")
//         }
//     }

//     private async createTables() {
//         await BaseDatabase.connection.raw(`
//         DROP TABLE IF EXISTS 
//             ${ClassroomDatabase.TABLE_CLASSROOM},
//             ${StudentDataBase.TABLE_STUDENT},
        
        
//         CREATE TABLE IF NOT EXISTS ${ClassroomDatabase.TABLE_CLASSROOM}(
//             id VARCHAR(255) PRIMARY KEY,
//             email VARCHAR(255) NOT NULL UNIQUE,
//             module VARCHAR(255) NOT NULL
//         );
        
//         CREATE TABLE IF NOT EXISTS ${StudentDataBase.TABLE_STUDENT}(
//             id VARCHAR(255) PRIMARY KEY,
//             name VARCHAR(255) NOT NULL,
//             price DECIMAL(6,2) NOT NULL
//         );
        
//         CREATE TABLE IF NOT EXISTS ${PurchaseDatabase.TABLE_PURCHASES}(
//             id VARCHAR(255) PRIMARY KEY,
//             user_id VARCHAR(255) NOT NULL,
//             product_id VARCHAR(255) NOT NULL,
//             quantity INT NOT NULL,
//             total_price DECIMAL(6,2) NOT NULL,
//             FOREIGN KEY (user_id) REFERENCES ${UserDatabase.TABLE_USERS}(id),
//             FOREIGN KEY (product_id) REFERENCES ${ProductDatabase.TABLE_PRODUCTS}(id)
//         );
//         `)
//     }

//     private async insertData() {
//         await BaseDatabase
//             .connection(ClassroomDatabase.TABLE_CLASSROOM)
//             .insert(classroom)

//         await BaseDatabase
//             .connection(StudentDataBase.TABLE_STUDENT)
//             .insert(student)

      
//     }
// }

// const migrations = new Migrations()
// migrations.execute()