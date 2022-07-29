import { BaseDatabase } from "./BaseDatabase"
import { Student } from "../models/Student"


export class StudentDatabase extends BaseDatabase {
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

public async getAllStudents() {
    const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()

    return result
}

public async getStudentsName(search: string){
    const buscarName = await BaseDatabase
    .connection(StudentDatabase.TABLE_STUDENTS)
    .select()
    .where( "name", "LIKE", `%${search}%` )

return buscarName

}public async criarStudents(students: Student) {
    await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .insert({
            id: students.getId(),
                name: students.getName(),
                email: students.getEmail(),
                birthdate: students.getBirthdate(),
                classroom_id: students.getClassroomId()
        })
}

}