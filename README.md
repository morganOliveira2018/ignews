<h1 align="center">
    <img alt="Ignews" title="#ignews" src="./public/images/banner.svg" />
</h1>

<h4 align="center"> 
	🚧  Ignews ♻️ Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

♻️ Ignews - é uma aplicação onde o usuário vai poder assinar por um conteúdo em texto. Hoje vemos muitas plataformas que as pessoas assinam para consumir conteúdos em vídeo, por exemplo, a própria NETFLIX. Contudo, o que a gente vê pouco até hoje são plataformas em que a gente possa assinar para consumir conteúdo em texto. Sendo assim, o ig.news tem esse intuito.Hoje vemos muitas plataformas que as pessoas assinam para consumir conteúdos em vídeo, por exemplo, a própria NETFLIX. Contudo, o que a gente vê pouco até hoje são plataformas em que a gente possa assinar para consumir conteúdo em texto. Sendo assim, o ig.news tem esse intuito.

Projeto desenvolvido durante o [**Ignite**](https://app.rocketseat.com.br/ignite).

---

## ⚙️ Funcionalidades

- [x] Os usuários tem acesso a aplicação, onde podem:

  - [x] realizar signIn/signOut através da autenticação pelo GitHub
  - [x] navegar pelo menu acessando a home ou a página de posts
  - [x] clicar no botão de Subscribe Now, no qual será direcionado a realizar o pagamento da assinatura pelo Stripe
  - [x] acessar a página de /posts após realização da inscrição
  - [x] listar os posts dentro da página de /posts
  - [x] preview de visualização do post

- [x] Validação do usuário já possui uma inscrição ou não na plataforma, onde será redirecionado:
  - [x] se tiver a inscrição ativa(active), será direcionado as postagens
  - [x] se tiver a inscrição cancelada(canceled) e clicar na aba de navegação Post, então será direcionado para a página home e faça a nova inscrição na plataforma

---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/FDVxelKDm6hI0nE3hoSSkC/ig.news---Treinamento-Ignite?node-id=1%3A2">
  <img alt="Made by morganaribeiro" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### Mobile

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Frontend
2. Mobile

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash

# Clone este repositório
$ git clone https://github.com/morganaribeiro/ignews.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd ignews

# Instale as dependências do projeto
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Axios](https://github.com/axios/axios)**
- **[Leaflet](https://react-leaflet.js.org/en/)**
- **[React Leaflet](https://react-leaflet.js.org/)**
- **[React Dropzone](https://github.com/react-dropzone/react-dropzone)**

> Veja o arquivo [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/web/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[KnexJS](http://knexjs.org/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[ts-node](https://github.com/TypeStrong/ts-node)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Multer](https://github.com/expressjs/multer)**
- **[Celebrate](https://github.com/arb/celebrate)**
- **[Joi](https://github.com/hapijs/joi)**

> Veja o arquivo [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/server/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#mobile-react-native--typescript)**Mobile** ([React Native](http://www.reactnative.com/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**
- **[React Navigation](https://reactnavigation.org/)**
- **[React Native Maps](https://github.com/react-native-community/react-native-maps)**
- **[Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)**
- **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
- **[Axios](https://github.com/axios/axios)**
- **[Expo Location](https://docs.expo.io/versions/latest/sdk/location/)**
- **[Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)**

> Veja o arquivo [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/mobile/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** → **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
- API: **[IBGE API](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1)** → **[API de UFs](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet)**, **[API de Municípios](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet)**
- Maps: **[Leaflet](https://react-leaflet.js.org/en/)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
- Markdown: **[StackEdit](https://stackedit.io/)**, **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
- Commit Conventional: **[Commitlint](https://github.com/conventional-changelog/commitlint)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Ícones: **[Feather Icons](https://feathericons.com/)**, **[Font Awesome](https://fontawesome.com/)**
- Fontes: **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**, **[Roboto](https://fonts.google.com/specimen/Roboto)**

---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/45489794?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Morgana Ribeiro</b>

[![Linkedin Badge](https://img.shields.io/badge/-Morgana%20Ribeiro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/morgana-ribeiro-dev/)](https://www.linkedin.com/in/morgana-ribeiro-dev/) 
[![Instagram Badge](https://img.shields.io/badge/-morgana_ribeir0-violet?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/morg.dev/)](https://www.instagram.com/morg.dev/) 
[![Gmail Badge](https://img.shields.io/badge/-morgana.ifce.2019@gmail.com-6633cc?style=flat-square&logo=Gmail&logoColor=white&link=mailto:morgana.ifce.2019@gmail.com)](mailto:morgana.ifce.2019@gmail.com)

---

Feito com ❤️ por Morgana Ribeiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/morgana-ribeiro-dev)

---
