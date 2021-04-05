<h1 align="center">Anjos da Eduacação</h1>

<p align="center">A iniciativa desse projeto se deu a partir de um desafio do Hackaton proposto pelo Grupo <a target="_blank" href="https://digital.fcamara.com.br/programadeformacao">FCamara</a>.</p> 
<p align="center">A solução proposta é viabilizar doações de materiais escolares para crianças de escolas públicas. As doações iram acontecer em qualquer lugar de modo que o doador possa ajudar de forma online. Além do mais, as papelarias parceiras, que disponibilizam os materiais, terão maior visibilidade financeira e social. </p>

<hr>

<h2 align="center">Como Instalar</h2>

> **Clone o Repósitorio em sua máquina:**

```bash
git clone  https://github.com/wend3ll-souza/anjosDaEducacao.git
```

> **Navegue para o diretório do projeto:**

```bash
cd anjosDaEducacao
```

> **Instale as Dependências:**

```bash
yarn
```

<h2 align="center">Credenciais utilizadas nos bancos de dados:</h2>

> **Postgres:**
"username": "postgres",
"password": "SomePass",
"database": "anjosdaeducacao",

**Você precisa ter um database com o nome anjosdaeducacao**
**Você pode alterar essas configurações em ormconfig.json**

> **MongoDB:**
"username": "mongoadmin",
"password": "secret"

**Você pode alterar essas configurações em src/database/index.ts**

> **Faça as migrations do banco de dados:**
```
yarn typeorm migration:run
```

> **Inicie a aplicação:**

```bash
yarn dev
```
**A aplicação estará funcionando em:**

http://localhost:3333/

<hr>


> **Importando arquivo do insomnia existente na raiz do projeto**
Abra o insomnia
Clique em configurações (ou aperte control + ,)
Vá para a aba data
Import Data
From file
Selecione o arquivo insomnia.json na raiz do projeto

<h2 align="center">Navegando pela plataforma</h2>

**user**
Nessas rotas você poderá:
criar: post na rota /user
logar: post na rota /user/authentication
atualizar: put na rota /user (você precisa do token desse usuário)
mostrar dados: get na rota /user (você precisa do token desse usuário)

**guardian**
Nessas rotas você poderá:
criar: post na rota /guardian
logar: post na rota /guardian/authentication
atualizar: put na rota /guardian (você precisa do token desse guardião)
mostrar dados: get na rota /guardian (você precisa do token desse guardião)

**store**
Nessas rotas você poderá:
criar: post na rota /store
logar: post na rota /store/authentication
atualizar: put na rota /store (você precisa do token dessa loja)
mostrar dados: get na rota /store (você precisa do token dessa loja)

**list**
Aqui você pode buscar pelas listas de materiais
get na rota /list contendo "list": "SiglaDaLista" para encontrar a lista desejada
Listas existentes:
  EI: ensino infantil
  F1: fundamental 1
  F2: fundamental 2
  EM: ensino médio

**ProductList**
Aqui você pode criar um catalogo de preços para as listas de materiais, estando logado como loja
Basta informar a lista e os materiais com seus preços e quantidade

**Wish**
Aqui você pode criar pedidos de materiais, estando logado como usuário
criar: post na rota /wish
atualizar: put na rota /wish
monstrar pedidos e seus dados: get na rota /wish
upload de foto: patch na rota /wish (o pedido precisa estar finalizado)

**Donation**
Aqui você pode acompanhar a lista de pedidos em aberto
get na rota /donation

**Mural**
Aqui você pode encontrar mensagens e imagens das crianças que tiveram seus pedidos atendidos, além da lista de guardiões

> **Todos os dados para essas requisições estão presentes no arquivo do insomnia**
