## Objetivo

Esse curso tem como objetivo cobrir os principais pontos da estrutura do NestJS para que você possa a partir disso, começar a criar os seus projetos de backend e explorar exatamente aquilo que existe como o diferencial no NestJS.

O curso estará estruturado de forma incremental, com uma sequencia preparada para que você evolua gradativamente no aprendizado com o NestJS, tirando todo o proveito disso.

## Rodando a aplicação no seu PC

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

```shell
git clone https://github.com/aluiziodeveloper/mini-curso-fundamentos-nestjs.git
```

Após clonar o conteúdo do repositório, acesse o diretório criado e execute os comandos abaixo para criar e executar os containers da aplicação e do banco de dados PostgreSQL.

> IMPORTANTE: Se você for executar esse projeto em PC com Windows, use uma instalação Linux no seu Windows através do WSL.

```shell
cd mini-curso-fundamentos-nestjs

chmod +x .docker/entrypoint.sh

docker-compose up --build
```

Após essa instalação a aplicação estará em execução no endereço `http://localhost:3000`.
