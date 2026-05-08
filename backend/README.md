# Backend - JSON Server

Este diretório contém o backend do projeto usando JSON Server.

## Como iniciar

```bash
npm run backend
```

Ou manualmente:

```bash
json-server --watch ./backend/dados/db.json --port 3001
```

## Endpoints

### Usuários
- `GET /usuarios` - Listar todos os usuários
- `POST /usuarios` - Criar novo usuário
- `PUT /usuarios/:id` - Atualizar usuário
- `DELETE /usuarios/:id` - Deletar usuário

### Produtos
- `GET /produtos` - Listar todos os produtos
- `POST /produtos` - Criar novo produto
- `PUT /produtos/:id` - Atualizar produto
- `DELETE /produtos/:id` - Deletar produto

## Estrutura do banco de dados

Veja `dados/db.json` para a estrutura completa.
