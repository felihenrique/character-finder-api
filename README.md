## API para envio de characters

Essa api é utilizada na aplicação para listagem de characters (https://github.com/felihenrique/character-finder.
Ela serve basicamente para receber a requisição e enviar o email. Ela tb faz um log no MongoDB de todos os emails enviados.

## Dependências

- Node 10.x.x
- Docker
- Docker compose v3

## Bibiliotecas utilizadas

- Koa (router, bodyparser, helmet)
- Routing Controllers (Permite construir controllers utilizando decorators e classes).
- nodemailer - Para enviar emails.
- mustache - template engine
- typeorm
- mongodb

## Instruções de execução

Para iniciar a api primeiramente crie uma cópia do arquivo .env.example e nomeie .env. Preencha ele com as informações do servidor SMTP para envio de emails. Feito isso, basta executar no terminal docker-compose up --build.
