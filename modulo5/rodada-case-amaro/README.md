Desafio back-end AMARO

<p >
  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Amaro_logo.png" width="320" alt="Amaro Fashion Logo" />
</p>


Criação de API para cadastro e consulta de produtos


###  Criação de um  arquivo `.env` acesso ao Banco de Dados:

PORT: 3003
DB_HOST = host
DB_USER = usuario
DB_PASSWORD = senha
DB_NAME = nome-do-banco-de-dados


### Utilização Template Labenu

Instalando dependencias 

`npm install`

   `npm run dev`:
    Estabelece a conexão com o banco de dados e reinicia automaticamente o servidor `localhost` toda a vez que o projeto for alterado e salvo.

 Populando Tabelas

 `npm run migrations`



### Endpoints utilizados na rodada Case  AMARO

#### SIGNUP

-   Method: `POST`
-   Path: `/users/signup`
Cadastrar um usuario, email e senha 

#### LOGIN

-   Method: `POST`
-   Path: `/users/login`
Acesso de email com senha


#### GET ALL PRODUCTS

-   Method: `GET`
-   Path:`/products/?search=`
Busca de produtos 

#### SEARCH PRODUCT

-   Method: `GET`
-   Path:`/products/?search=8371`
Busca de produtos por id



#### CREATE PRODUCT

-   Method: `POST`
-   Path:`/products`
Adiciona novo produto 


## Documentação:
[POSTMAN] https://documenter.getpostman.com/view/20782636/VUxLw8ip
[Heroku]https://rodada-case-amaro.herokuapp.com/





