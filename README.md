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
<p>
  Abra o insomnia </br>
  Clique em configurações (ou aperte control + ,) </br>
  Vá para a aba data </br>
  Import Data </br>
  From file </br>
  Selecione o arquivo insomnia.json na raiz do projeto </br>
</p>

<h2 align="center">Navegando pela plataforma</h2>

**user** 
<p>
  Nessas rotas você poderá: </br>
  criar: post na rota /user </br>
  logar: post na rota /user/authentication </br>
  atualizar: put na rota /user (você precisa do token desse usuário) </br>
  mostrar dados: get na rota /user (você precisa do token desse usuário) </br>
</p>

**guardian**
<p>
  Nessas rotas você poderá: </br>
  criar: post na rota /guardian </br>
  logar: post na rota /guardian/authentication </br>
  atualizar: put na rota /guardian (você precisa do token desse guardião) </br>
  mostrar dados: get na rota /guardian (você precisa do token desse guardião) </br>
</p>

**store**
<p>
  Nessas rotas você poderá: </br>
  criar: post na rota /store </br>
  logar: post na rota /store/authentication </br>
  atualizar: put na rota /store (você precisa do token dessa loja) </br>
  mostrar dados: get na rota /store (você precisa do token dessa loja) </br>
</p>

**list**
<p>
Aqui você pode buscar pelas listas de materiais </br>
get na rota /list contendo "list": "SiglaDaLista" para encontrar a lista desejada </br>
Listas existentes: </br>
  EI: ensino infantil </br>
  F1: fundamental 1 </br>
  F2: fundamental 2 </br>
  EM: ensino médio </br>
</p>

**ProductList**
<p>
Aqui você pode criar um catalogo de preços para as listas de materiais, estando logado como loja </br>
Basta informar a lista e os materiais com seus preços e quantidade </br>
</p>

**Wish**
<p>
  Aqui você pode criar pedidos de materiais, estando logado como usuário </br>
  criar: post na rota /wish </br>
  atualizar: put na rota /wish </br>
  monstrar pedidos e seus dados: get na rota /wish </br>
  upload de foto: patch na rota /wish (o pedido precisa estar finalizado) </br>
</p>

**Donation**
<p>
  Aqui você pode acompanhar a lista de pedidos em aberto </br>
  get na rota /donation </br>
</p>

**Mural**
<p>
  Aqui você pode encontrar mensagens e imagens das crianças que tiveram seus pedidos atendidos, além da lista de guardiões
</p>

> **Todos os dados para essas requisições estão presentes no arquivo do insomnia**
