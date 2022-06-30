


function DataNome(name:string,data:string):string {
    const dataNascimento = data.split("/")
    const separaData = dataNascimento[0]
    const separaMes = dataNascimento[1]
    const separaAno = dataNascimento[2]
    return `Olá, me chamo ${name}, nasci no dia ${separaData}, no mês de ${separaMes} e ano de ${separaAno}.`
  }
console.log(DataNome("Adriana","12/05/1979"))