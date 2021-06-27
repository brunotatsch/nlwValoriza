### Projeto

<p align="center">nlwValoriza</p>

### Descrição do Projeto
<p align="center">nlwValoriza - Next Level Week 6 (Together)</p>

### Como usar 

<p align="center">Fazer o git clone do projeto, abra a pasta do projeto, dentro da pasta rode o comando yarn para instalar os pacotes, após esta execução rodar o yarn dev.</p>


### Testando as API

## login

URL : http://localhost:3000/login
METODO: POST
RETORNO: (TOKEN)

# EXEMPLO JSON

{
	"email": "nlwvaloriza@outlook.com",
	"password": "123456"
}
 
# EXEMPLO DO RETORNO

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5sd3ZhbG9yaXphQG91dGxvb2suY29tIiwiaWF0IjoxNjI0NzUzODM5LCJleHAiOjE2MjQ4NDAyMzksInN1YiI6IjNhNjU5YzU5LTcwYjktNDNmZi1iODhjLTlmOWJlZTkwMzRhMSJ9.gbuJ66f3UOsqal3BL-hK9XnAN6DgnXlOJXnkNW19p7w"

## List Users

URL : http://localhost:3000/users
METODO: GET
RETORNO: JSON
AUTH: Bearer
TOKEN: Retorno da API LOGIN

# EXEMPLO DO RETORNO

[
  {
    "id": "3a659c59-70b9-43ff-b88c-9f9bee9034a1",
    "name": "nlwValoriza",
    "email": "nlwvaloriza@outlook.com",
    "admin": true,
    "created_at": "2021-06-27T00:26:01.000Z",
    "updated_at": "2021-06-27T00:26:01.000Z"
  },
  {
    "id": "d8679258-a9d3-46f8-929a-191d83dd0170",
    "name": "nlwValoriza no Admin",
    "email": "nlwvaloriza2@outlook.com",
    "admin": false,
    "created_at": "2021-06-27T00:29:53.000Z",
    "updated_at": "2021-06-27T00:29:53.000Z"
  }
]


### Features

  [X] Cadastro de Usuário

  [X] Cadastro de Elogios

  [X] Envio de elogios

### Regras

- Cadastro de usuários

  [X] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [X] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [X] Não é permitido cadastrar mais de uma tag com o mesmo nome
  
  [X] Não é permitido cadastrar tag sem nome

  [X] Não é permitido cadastrar por usuários não sejam administradores

- Cadastro de elogios

  [X] Não é permitido um usuário cadastrar um elogio para si mesmo
  
  [X] Não é permitido cadastrar elogios para usuários 
  inválidos

  [X] O usuário precisa estar autenticado na aplicação


<h1 align="center">Bruno Tatsch</h1>

<p align="center">Software Developer</p>

<p align="center">
<a href="https://www.linkedin.com/in/bruno-tatsch-b22a7385/" rel="nofollow"> <img src="https://img.shields.io/static/v1?label=LinkedIn&message=brunotastch&color=blue&style=for-the-badge&logo=0A66C2"/> </a>
<a href="mailto:brunotatsch@gmail.com"> <img src="https://img.shields.io/static/v1?label=Gmail&message=brunotatsch@gmail.com&color=lightgrey&style=for-the-badge&logo=mail"/>
</p>