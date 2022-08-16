import { BaseDatabase } from "./BaseDatabase"
import { Classroom, IClassroomDB } from "../models/Classroom"
export class ClassroomDatabase extends BaseDatabase {
    public static TABLE_CLASSROOMS = "Labe_Classrooms"

    public async getAllClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()

        return result
    }
    public async createClassroom(classroom: Classroom) {
        await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .insert({
                id: classroom.getId(),
                name: classroom.getName(),
                module: classroom.getModule()
            })
    }

    public async mudarClassroom(id: string, module: string) {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .where({ id: id })
            .update({ module: module })
        return result
    }


    public async verificationClass(id: string) {
        const findClass = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
            .where({ id: id })

        return findClass

    }

}
