# Gerador e Gerenciador de Links de Convite

Este projeto foi desenvolvido durante o **NLW Connect** da Rocketseat e consiste em um sistema para geração e gerenciamento de links de convites. Cada participante recebe um link único, e ao cadastrar novos participantes através deste link, pontos são acumulados para o usuário que realizou o convite.

## Tecnologias Utilizadas

- **Node.js** com **TypeScript** (convertido com **tsup** para JavaScript)
- **Fastify** (framework backend leve e performático)
- **CORS** para segurança e controle de requisições
- **Swagger** para documentação da API
- **Drizzle ORM** para manipulação do banco de dados
- **Zod** para validação de dados
- **PostgreSQL** e **Redis** como bancos de dados

## Instalação e Uso

### Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- Node.js (versão LTS recomendada)
- PostgreSQL e Redis configurados
- Gerenciador de pacotes npm ou yarn

### Passos para rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/dkhenrique/nlw-connect-trilha-nodejs.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nlw-connect-trilha-nodejs
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Configure as variáveis de ambiente no arquivo **.env**.
5. Execute a aplicação em ambiente de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
6. Para realizar o build do projeto:
   ```bash
   npm run build
   # ou
   yarn build
   ```
7. Para rodar a versão compilada:
   ```bash
   npm start
   # ou
   yarn start
   ```

## Endpoints da API

### Inscrição do participante
**POST** - Criar um novo participante
```
http://localhost:3333/subscriptions
```

### Acesso ao link de convite do participante
**GET** - Obtém o link do participante
```
http://localhost:3333/invites/{id}
```

### Contagem de cliques no link do participante
**GET** - Obtém a quantidade de cliques no link
```
http://localhost:3333/subscribers/{id}/ranking/clicks
```

### Contagem de inscritos pelo link de convite
**GET** - Obtém a quantidade de inscritos pelo link
```
http://localhost:3333/subscribers/{id}/ranking/count
```

### Recuperar a posição do participante no ranking
**GET** - Obtém a posição do participante
```
http://localhost:3333/subscribers/{id}/ranking/position
```

### Recuperar os top 3 do ranking
**GET** - Obtém os três melhores colocados
```
http://localhost:3333/ranking
```

## Licença
Este projeto é licenciado sob a **MIT License**. Sinta-se à vontade para usá-lo e modificá-lo!

---

Desenvolvido com 💜 durante o **NLW Connect** 🚀

