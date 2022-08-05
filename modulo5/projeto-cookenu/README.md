PROJETO COOKENU - LABENU

Criação de projeto e suas funcionalidades:


Funcionalidades do Projeto
O sistema contará com recursos que envolvem o gerenciamento de cadastro de receitas e usuarios e também login, alteração e exclusão.

Cada usuário terá as seguintes informações:

- id: VARCHAR(255) e chave primária
- nickname: VARCHAR(255) e não-nulo
- email: VARCHAR(255), não-nulo e único
- password: VARCHAR(255) e não-nulo
- role: ENUM “NORMAL” ou “ADMIN” com padrão “NORMAL” não-nulo

Cada receita  terá as seguintes informações:

- id: VARCHAR(255) e chave primária
- title: VARCHAR(255) e não-nulo
- description: VARCHAR(255) e não-nulo
- created_at: DATE e não-nulo
- updated_at: DATE e não-nulo
- creator_id: VARCHAR(255) e chave estrangeira referenciando a id de Cookenu_Users



## Endpoint 1) Cadastro de usuário

Requisição de cadastro de novo usuário “NORMAL” que retorna ao final um token de acesso ao sistema.


## Endpoint 2) Login

Requisição de acesso de usuários já cadastrados ao sistema. Ao final, um token de acesso deve ser retornado.

## Endpoint 3) Cadastro de nova receita

Requisição que permite um usuário logado no sistema criar uma nova receita. A receita criada deve ser retornada ao final da operação

## Endpoint 4) Editar receita

Requisição que permite um usuário logado no sistema alterar o título e/ou a descrição de uma receita existente. Usuários do tipo “NORMAL” só poderão alterar as receitas que foram criados por eles mesmo, enquanto usuários do tipo “ADMIN” podem alterar qualquer receita do sistema. A receita alterada deve ser retornada ao final da operação com a updatedAt atualizada.

## Endpoint 5) Deletar receita

Requisição que permite um usuário logado no sistema remover uma receita pela sua id. Usuários do tipo “NORMAL” só poderão remover as receitas que foram criados por eles mesmo, enquanto usuários do tipo “ADMIN” podem remover qualquer receita do sistema.

## Endpoint 6) Busca de receita

Requisição que permite um usuário logado no sistema buscar a lista de receitas.

## Endpoint 7) Deletar usuário

Requisição que permite a deleção de um usuário existente no sistema pelo seu id. Somente usuários do tipo “ADMIN” poderão consumir este recurso.




O que funciona:

Criar usuario.
Login e token criado.
Lista de Receitas 
Deletar uma usuario.
Deletar receita.

Não estou conseguindo:

Editar receita.



Link criado Heroku: https://aragon-projeto-cookenu.herokuapp.com/





Agradeço aos meus professores por mais um desafio.