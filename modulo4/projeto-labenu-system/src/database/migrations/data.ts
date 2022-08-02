import { IClassroomDB } from "../../models/Classroom"
import { IHobbiesDB, IStudentDB, IStudentsHobbiesDB } from "../../models/Student"

export const classrooms: IClassroomDB[] = [
    {
        id: "101",
        name: "Adriana",
        module: "5"
    },
    {
        id: "102",
        name: "Patricia",
        module: "6"
    },
    {
        id: "103",
        name: "Aniara",
        module: "0"
    }
]

export const students: IStudentDB[] = [
    {
        id: "201",
        name: "Adriana",
        email: "adriana@gmail.com",
        birthdate: new Date("1990/10/20"),
        classroom_id: "101"
    },
    {
        id: "202",
        name: "Patricia",
        email: "patricia@gmail.com",
        birthdate: new Date("1999/02/17"),
        classroom_id: "101"
    },
    {
        id: "203",
        name: "Andrea",
        email: "andrea@gmail.com",
        birthdate: new Date("2000/01/15"),
        classroom_id: "101"
    },
    {
        id: "204",
        name: "Aniara Nogueira",
        email: "aniara@gmail.com",
        birthdate: new Date("2002/05/27"),
        classroom_id: "102"
    },
    {
        id: "205",
        name: "Muriele",
        email: "muriele@gmail.com",
        birthdate: new Date("1985/03/01"),
        classroom_id: "102"
    },
    {
        id: "206",
        name: "Antonia",
        email: "antonia@gmail.com",
        birthdate: new Date("1995/09/12"),
        classroom_id: "102"
    },
    {
        id: "207",
        name: "Bob",
        email: "bob@gmail.com",
        birthdate: new Date("2001/12/25"),
        classroom_id: "103"
    },
    {
        id: "208",
        name: "João",
        email: "joao@gmail.com",
        birthdate: new Date("1992/02/11"),
        classroom_id: "103"
    },
    {
        id: "209",
        name: "Maria",
        email: "maria@gmail.com",
        birthdate: new Date("1994/06/15"),
        classroom_id: "103"
    },
    {
        id: "210",
        name: "Geralda",
        email: "geralda@gmail.com",
        birthdate: new Date("1980/01/01"),
        classroom_id: null
    }
]

export const hobbies: IHobbiesDB[] = [
    {
        id: "301",
        title: "Jogar Volêi"
    },
    {
        id: "302",
        title: "Assistir filmes e séries"
    },
    {
        id: "303",
        title: "Tomar sol"
    },
    {
        id: "304",
        title: "Academia"
    },
    {
        id: "305",
        title: "Ler"
    },
    {
        id: "306",
        title: "Cinema"
    },
    {
        id: "307",
        title: "Caminhar"
    },
    {
        id: "308",
        title: "Cantar"
    },
    {
        id: "309",
        title: "Esportes"
    },
    {
        id: "310",
        title: "Praia"
    }
]

export const studentsHobbies: IStudentsHobbiesDB[] = [
    {
        student_id: "201",
        hobby_id: "301"
    },
    {
        student_id: "202",
        hobby_id: "302"
    },
    {
        student_id: "203",
        hobby_id: "303"
    },
    {
        student_id: "204",
        hobby_id: "304"
    },
    {
        student_id: "205",
        hobby_id: "305"
    },
    {
        student_id: "206",
        hobby_id: "306"
    },
    {
        student_id: "207",
        hobby_id: "307"
    },
    {
        student_id: "208",
        hobby_id: "308"
    },
    {
        student_id: "209",
        hobby_id: "309"
    },
    {
        student_id: "210",
        hobby_id: "310"
    }
]