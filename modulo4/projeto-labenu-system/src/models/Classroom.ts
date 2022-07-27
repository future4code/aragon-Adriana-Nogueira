export interface TClassroomDB {
    id: string,
    name: string,
    module: MODULE
}

export enum MODULE {
    ZERO = "0",
    UM = "1",
    DOIS = "2",
    TRÊS = "3",
    QUATRO = "4",
    CINCO = "5",
    SEIS = "6"
}

export class Classroom {


    constructor(
        private id: string,
        private name: string,
        private student: string[],
        private module: number
    ) {
        this.id = id
        this.name = name
        this.student = student
        this.module = module
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getModule() {
        return this.module
    }
    public getStudent() {
        return this.student
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }
    public setStudent(newStudent: string[]) {
        this.student = newStudent
    }

    public setModule(newmodule: number) {
        this.module = newmodule
    }
}