import axios from 'axios'


axios.get('http://localhost:3003/users').then((res) => {
    console.log(res.data)
})



// axios.post("http://localhost:3003/users", {
//     nome: "Fulano3",
//     cpf: "123456",
//     birthday: "01/01/2020"
// }).then((res) => {
//     console.log(res.data)
// }).catch((error) => {
        
// })
