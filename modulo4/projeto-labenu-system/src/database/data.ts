import { MODULE, TClassroomDB,  } from "../models/Classroom";
// import { PurchaseDB } from "../models/Purchase";
import { TStudent } from "../models/Student";

export const student: TStudent[] = [
    {
        id: "101",
        name: "Adriana Nogueira",
        email: "adriana@gmail.com",
        birthdate: new Date("01/02/2020"),
        classroom_id: "2"
    },
    {
        id: "101",
        name: "Andrea Nogueira",
        email: "andrea@gmail.com",
        birthdate: new Date("01/02/2020"),
        classroom_id: "3"
    },
    {
        id: "101",
        name: "Aniara Nerissa",
        email: "aniara@gmail.com",
        birthdate: new Date("01/02/2020"),
        classroom_id: "4"
    }
]

export const classroom: TClassroomDB[] = [
    {
        id: "201",
        name: "Adriana Nogueira",
        module: MODULE.UM


    },
    {
        id: "301",
        name: "Andrea Nogueira",
        module: MODULE.TRÊS
    },
    {
        id: "401",
        name: "Patricia Cancian",
        module: MODULE.CINCO
    },
    {
        id: "501",
        name: "Aniara Nerissa",
        module: MODULE.SEIS
    },
    {
        id: "261",
        name: "Geralda Nogueira",
        module: MODULE.DOIS    }
]

// export const purchases: PurchaseDB[] = [
//     {
//         id: "301",
//         user_id: "101",
//         product_id: "201",
//         quantity: 1,
//         total_price: 99.00
//     },
//     {
//         id: "302",
//         user_id: "101",
//         product_id: "203",
//         quantity: 1,
//         total_price: 459.99
//     },
//     {
//         id: "303",
//         user_id: "101",
//         product_id: "202",
//         quantity: 2,
//         total_price: 500.00
//     }
// ]