# Backend Express

## Setup
```bash
npm install
```
- Criar arquivo `.env` no root
```env
# EXAMPLE FILE
NODE_ENV=development

SERVER_PORT=5050

JWT_SECRET=HeLlOTheRE-gEneRalKenoBI
JWT_EXP=10d

# SQL DATABASE
DB_HOST=
DB_USER=
DB_PASS=

# NOSQL DATABASE
MONGO_DBURL=
```
- Banco de dados
  - Adicionar a url do banco de dados MongoDB ao `.env` em `MONGO_DBURL=`

### Dev
```
npm run dev
```

### Endpoints
- Default URL: **http://localhost:5050/api/**
- `GET /`: Retorna o Status: 200 e uma Mensagem "API ROOT ⚡️"
- `GET /products/:id`: Obter a informação somente de um produto;
- `GET /products`: Listar todos os produtos da base de dados
  - Parâmetros
    - limit: Quantidade de documentos que será retornado
    - page: Índice de paginação
- `GET /scrape`: Scrape manual de 100 produtos

### CRON jobs
- `scraper`: Realiza o scraping da página [Open Food Facts](https://world.openfoodfacts.org/) uma vez ao día
  - **cron-schedule**: (0 0 * * *) - uma vez no primeiro horário do dia (00:00:00)

### Dependencies
- Express
- Cheerio
- Mongoose
- Node-cron
- Node-fetch
- Dotenv
- Colors
- Morgan
- Bcrypt
- Helmet
- Hpp
- Xss-clean
- Jsonwebtoken
- Validator

### Dev Dependencies
- Babel
- Eslint
- Prettier
- Nodemon
- Rimraf