# 💼 Controle de despesas
> Um aplicativo mobile para gerenciar suas finanças pessoais de forma prática.

---

## 🚀 Demonstração
🔗 **Acesse o projeto:** [link-do-deploy-aqui](https://jedev1.itch.io/controle-de-despesas)  

📸 **Preview:**  
![Screenshot do portfólio](./images/wallet.png)

---

## 📚 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#️-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Como Usar](#-como-usar)
- [Screenshots](#️-screenshots)
- [Aprendizados](#-aprendizados)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Roadmap](#-roadmap)
- [Links Úteis](#-links-úteis)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 💡 Sobre o Projeto
Um aplicativo mobile para gerenciar suas finanças pessoais de forma prática, seguro e eficiente, construído com as tecnologias mais modernas do ecossistema `React Native`.

---

## 🛠️ Tecnologias
As principais tecnologias utilizadas neste projeto foram:

- **React Native**
- **Node.js** (Backend)
- **PostgreSQL** (banco de dados e autenticação)
- **Clerk** (login)
- **Style nativo** (estilizações da página)

<div align="right">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo"  />
</div>
---

## 📚 Funcionalidades
- [x] 💸 Registrar receitas e despesas
- [x] 📊 Visualizar histórico e relatórios
- [x] 🔐 Login e autenticação segura via `Clerk`
- [x] 🛠 Gerenciamento de categorias personalizáveis
- [x] 🔍 Sincronização e persistência via `PostgreSQL`
---

## 📦 Como Rodar o Projeto
Siga as etapas abaixo para executar o projeto localmente:

```bash
    # Crie um arquivo .env.local na pasta backend do projeto com as variáveis necessárias:
    PORT=...
    DATABASE_URL=...

    UPSTASH_REDIS_REST_URL=...
    UPSTASH_REDIS_REST_TOKEN=...
    # Crie um arquivo .env.local na pasta mobile do projeto com as variáveis necessárias:
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=...
```

```bash
# Clone este repositório
git clone https://github.com/joao-enrique/react-native-carteira-app.git

# Acesse a pasta do projeto
cd react-native-carteira-app

# Instale as dependências
npm install
npm run stdev
#acesse pasta mobile
cd mobile

# Instale as dependências
npm install

#rode a aplicação
npx expo start
```
Use o app Expo Go no celular para visualizar o projeto em tempo real 📱 (Ou abra no emulador Android/iOS.)
> 💡 Caso não tenha o Node.js instalado, procure no google e siga os passos para sua instalação.

---

## 🧪 Como Usar
1. Instale as dependências com o `node.js`.
2. Entre no app utilizando o `android studio` ou `expo go`.
3. cadastre-se no app.
4. registre seus ganhos e gastos no aplicativo.
5. veja todo o histórico.

---

## 🖼️ Screenshots
### 📱 tela de login
![preview do portfólio](./images/preview-1.jpg)
### 📱 tela principal
![preview do portfólio](./images/preview-2.jpg)
### 📱 Tela de nova transação
![preview do portfólio](./images/preview-3.jpg)

---

## 🧠 Aprendizados
Durante o desenvolvimento deste projeto, aprimorei:
- Meus conhecimentos no `React Native`;
- Uso de Estilização nativa do react native para criação de um aplicativo responsivo;
- Uso de estados no `React`;
- Melhoria na estrutura de layout responsivo;
- Integração de `PostgreSQL` com `Clerk` e `node.js` para armazenar informações (transações, gastos, usuários).

---

## 📁 Estrutura de Pastas
├── backend/ </br>
├── mobile/ </br>
├── images/ </br>
└── README.md </br>

---

## 🚧 Roadmap
- [] Traduzir para versão em Português
- [] Opções de outros temas

---

## 🔗 Links Úteis
🌐 Deploy: [link](https://meu-portfolio-lemon-sigma.vercel.app/)  </br>
💼 LinkedIn: [link](https://www.linkedin.com/in/joao-enrique-dev/) </br>
🧠 GitHub: [link](https://github.com/joao-enrique) </br>
🎮 Itch-io: [link](https://jedev1.itch.io/) </br>
📹 YouTube: [link](https://www.youtube.com/@joaocodedev) </br>
✨ Linktree: [link](https://linktree-eight-gules.vercel.app/) </br>

## 👨‍💻 Autor
Feito com 💜 por [João Enrique](https://linktree-eight-gules.vercel.app/)
<div align="right">
  <a href="https://www.linkedin.com/in/joao-enrique-dev/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg" width="52" height="40" alt="linkedin logo"  />
  </a>
  <a href="https://www.youtube.com/@joaocodedev" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/youtube/default.svg" width="52" height="40" alt="youtube logo"  />
  </a>
  <a href="https://jedev1.itch.io/" target="_blank">
    <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/itch/default.svg" width="52" height="40" alt="itch logo"  />
  </a>
</div>

---

## 📜 Licença
Este projeto está sob a licença **MIT** — veja o arquivo [LICENCE](./LICENSE) para mais detalhes.


### ⭐ Se este projeto te inspirou, não esqueça de deixar uma **estrela** no repositório!