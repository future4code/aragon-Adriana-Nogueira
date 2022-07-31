LISTA DE PROJETO LABENU SYSEM- LABENU

Criação de projeto e suas funcionalidades:

Desenvolver um sistema representa o básico da nossa organização educacional: o LabenuSystem.

Funcionalidades do Projeto
Este sistema permitirá o registro, acesso e manipulação de participantes ativos de um ambiente educacional (estudantes e turmas).

Cada Classroom (turma) terá as seguintes informações:

- id em string gerado pela própria aplicação
- name em string
- students em lista de ids de students que estão matriculados na turma
- module: número do módulo atual da turma, que pode valer entre 0 e 6, sendo que 0 significa que a turma ainda não começou

Cada Classroom (turma) terá as seguintes informações:

- id em string gerado pela própria aplicação
- name em string
- email em string
- birthdate em Date no formato AAAA/MM/DD (data de nascimento)
- classroomId em null ou id em string da turma matriculada, null significa que a pessoa ainda não está em nenhuma turma
- hobbies em lista de ids de hobbies da pessoa

## Endpoint 1) Cria turma

Requisição de criação de nova turma no sistema, com as características da entidade Classroom.

## Endpoint 2) Buscar turmas ativas

Requisição que pega todas as turmas ativas (turmas inativas estão no módulo 0).
## Endpoint 3) Mudar turma de módulo

Requisição que edita o módulo de uma turma do sistema.

## Endpoint 4) Criar estudante

Requisição de criação de novo estudante no sistema.

## Endpoint 5) Buscar estudantes a partir do seu nome

Requisição que retorna uma lista de estudantes filtrados por nome. Caso o filtro não seja enviado deve ser retornada a lista inteira de estudantes.

## Endpoint 6) Editar estudante de turma

Requisição que edita a turma que o estudante está matriculado.

## Endpoint 7) Exibir todas as pessoas pertencentes a uma turma

Requisição que busca todos estudantes que estão associados a uma turma. Exiba nessa lista apenas a id, name e email de cada participante.

O que funciona

 * Cria turma  - OK
 * Buscar turmas ativas - OK
 * Mudar turma de módulo  - OK
 * Criar estudante - OK 
 * Buscar estudantes a partir do seu nome - OK 
 * Editar estudante de turma - OK 
 * Exibir todas as pessoas pertencentes a uma turma - NÃO FUNCIONA





Link criado HEROKI: https://git.heroku.com/aragon--projeto-labenu-system.git - NÃO CONSEGUI 

Utilize neste projeto:

Texto datilografado; SQL; Express e SQL

Agradeço aos meus professores por mais um desafio. Quero me esforçar mais para ter um bom desempenho.