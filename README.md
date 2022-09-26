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

#### **Website** 
- **[NextJS](https://nextjs.org/)** 
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Prismic CMS](https://prismic.io/)**
- **[Stripe](https://stripe.com/br)**
- **[Fauna](https://fauna.com/)**
- **[Next.Auth](https://next-auth.js.org/)**
- **[Axios](https://github.com/axios/axios)**


**Utilitários**
- Protótipo: **[Figma](https://www.figma.com/)** → **[Protótipo (Ignews)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Markdown: **[StackEdit](https://stackedit.io/)**, **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
- Commit Conventional: **[Commitlint](https://github.com/conventional-changelog/commitlint)**
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

[![Linkedin Badge](https://img.shields.io/badge/-Morgana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/morgana-ribeiro-dev/)](https://www.linkedin.com/in/morgana-ribeiro-dev)
[![Gmail Badge](https://img.shields.io/badge/-morgana.ifce.2019@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:morgana.ifce.2019@gmail.com)](mailto:morgana.ifce.2019@gmail.com)

---

Feito com ❤️ por Morgana Ribeiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/morgana-ribeiro-dev)

---
