import { setOriginalNode } from "typescript"

type Lista = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}


const listas: Lista[] =
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]

    function relacaoEmprestimo(listas: Lista[]): Lista[] {
    const clientesDevedores = listas.map((lista) => {
    let valorEmprestimo = lista.debitos.reduce((total, divida) => total + divida, 0)
 lista.saldoTotal = lista.saldoTotal - valorEmprestimo
 lista.debitos = []
 return lista
    }).filter((saldo) => {
        return saldo.saldoTotal < 0
    })
    return clientesDevedores
}
console.log(relacaoEmprestimo(listas))
    