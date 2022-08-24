
import { IUserDB, USER_ROLES } from "../../models/User"

export const users: IUserDB[] = [
    {
        id: "101",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
        role: USER_ROLES.ADMIN
    },
    {
        id: "102",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
        role: USER_ROLES.NORMAL
    },
    {
        id: "103",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
        role: USER_ROLES.NORMAL
    }
]
// export const tags: ITagDB[] = [
//     {
//         id: "201",
//         name: "neutro"
//     },
//     {
//         id: "202",
//         name: "balada"
//     },
//     {
//         id: "203",
//         name: "delicado"
//     }
// ]

// export const product: IProductDB[] = [
//     {
//         id: 8371,
//         name: "VESTIDO TRICOT CHEVRON",
//         tags: ["balada", "neutro", "delicado", "festa"]
//       },
//       {
//         id: 8367,
//         name: "VESTIDO MOLETOM COM CAPUZ MESCLA",
//         tags: ["casual", "metal", "metal"]
//       },
//       {
//         id: 8363,
//         name: "VESTIDO CURTO MANGA LONGA LUREX",
//         tags: ["colorido", "metal", "delicado", "estampas", "passeio"]
//       },
//       {
//         id: 8360,
//         name: "VESTIDO FEMININO CANELADO",
//         tags: ["workwear", "viagem", "descolado"]
//       },
//       {
//         id: 8358,
//         name: "VESTIDO REGATA FEMININO COM GOLA",
//         tags: ["moderno", "inverno", "liso", "basics"]
//       },
//       {
//         id: 8314,
//         name: "VESTIDO PLISSADO ACINTURADO",
//         tags: ["casual", "viagem", "delicado"]
//       },
//       {
//         id: 8311,
//         name: "VESTIDO SLIPDRESS CETIM",
//         tags: ["balada", "metal", "boho", "descolado", "passeio"]
//       },
//       {
//         id: 8310,
//         name: "VESTIDO CURTO PONTO ROMA MANGA",
//         tags: ["casual", "metal", "delicado", "descolado", "elastano", "estampas"]
//       },
//       {
//         id: 8309,
//         name: "VESTIDO MOLETOM COM CAPUZ",
//         tags: ["inverno", "liso", "casual", "descolado"]
//       },
//       {
//         id: 8301,
//         name: "VESTIDO LONGO CREPE MANGA COMPRIDA",
//         tags: ["casual", "metal", "delicado", "descolado"]
//       },
//       {
//         id: 8300,
//         name: "VESTIDO MALHA COM FENDA",
//         tags: ["balada", "metal", "estampas", "moderno"]
//       },
//       {
//         id: 8293,
//         name: "VESTIDO CURTO VELUDO RECORTE GOLA",
//         tags: ["colorido", "viagem", "delicado", "descolado", "inverno"]
//       },
//       {
//         id: 8291,
//         name: "VESTIDO MANGA COMPRIDA COSTAS",
//         tags: ["inverno", "estampas", "delicado", "descolado", "casual", "passeio", "basics"]
//       },
//       {
//         id: 8264,
//         name: "VESTIDO CURTO VELUDO CRISTAL",
//         tags: ["casual", "viagem", "boho", "neutro", "festa"]
//       },
//       {
//         id: 8119,
//         name: "VESTIDO BABADOS KNIT",
//         tags: ["moderno", "metal", "descolado", "elastano", "festa", "colorido"]
//       },
//       {
//         id: 8110,
//         name: "VESTIDO CUT OUT TRICOT",
//         tags: ["casual", "colorido", "delicado", "descolado", "viagem", "inverno"]
//       },
//       {
//         id: 8109,
//         name: "VESTIDO BABADOS HORIZONTAIS",
//         tags: ["moderno", "boho", "festa", "descolado", "colorido"]
//       },
//       {
//         id: 8104,
//         name: "VESTIDO BABADO TURTLENECK",
//         tags: ["casual", "metal", "delicado", "neutro", "basics", "inverno", "viagem"]
//       },
//       {
//         id: 8091,
//         name: "VESTIDO MIDI VELUDO DECOTADO",
//         tags: ["couro", "veludo", "passeio", "viagem"]
//       },
//       {
//         id: 8083,
//         name: "VESTIDO LONGO ESTAMPADO",
//         tags: ["couro", "estampado", "passeio", "viagem"]
//       },
//       {
//         id: 8080,
//         name: "VESTIDO CURTO RENDA VISCOSE",
//         tags: ["neutro", "workwear", "moderno", "descolado", "liso", "elastano"]
//       },
//       {
//         id: 7613,
//         name: "VESTIDO LONGO BABADO",
//         tags: ["casual", "liso", "passeio", "colorido", "boho"]
//       },
//       {
//         id: 7533,
//         name: "VESTIDO COTTON DOUBLE",
//         tags: ["balada", "liso", "moderno", "descolado"]
//       },
//       {
//         id: 7518,
//         name: "VESTIDO CAMISETA FANCY",
//         tags: ["casual", "liso"]
//       },
//       {
//         id: 7516,
//         name: "VESTIDO WRAP FLEUR",
//         tags: ["neutro", "liso", "basics", "viagem"]
//       }
    
// ]
