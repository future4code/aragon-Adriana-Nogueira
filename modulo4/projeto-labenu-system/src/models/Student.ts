export type TStudent = {
    id: string,
    name: string,
    email: string,
    birthdate: Date
    classroom_id: null | string
}

export class Student {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date,
        private classroomId: string,
        private hobbies: string[]


    ) {
        this.id = id
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.classroomId = classroomId
        this.hobbies = hobbies
    }

    public getId() {
        return this.id
    }

    public getName() {
        return this.name
    }

    public getbirthdate() {
        return this.birthdate
    }

    public getEmail() {
        return this.email
    }
    public getClassroomid() {
        return this.classroomId
    }
    public getHobbies() {
        return this.hobbies
    }



    public setId(newId: string) {
        this.id = newId
    }

    public setName(newName: string) {
        this.name = newName
    }
    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setBbirthdate(newBirthdate: Date) {
        this.birthdate = newBirthdate
    }
    public setClassroomId(newClassroomId: string) {
        this.classroomId = newClassroomId
    }
}