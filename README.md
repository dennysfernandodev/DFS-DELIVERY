# DFS DELIVERY

Plataforma SaaS multiempresa para atendimento inteligente no WhatsApp, catálogo, carrinho e pedidos.

## Produto inicial

O primeiro produto comercial é o **Painel de Atendimento com IA**. Cada comércio possui ambiente isolado, catálogo próprio, regras próprias e uma base de conhecimento utilizada para treinar o comportamento do assistente.

## Arquitetura

- `apps/api`: API NestJS
- `apps/merchant`: painel do comerciante em Next.js
- `apps/admin`: painel geral DFS em Next.js
- `packages/database`: Prisma e PostgreSQL
- Redis/BullMQ: sessões, filas e processamento assíncrono
- Evolution API: integração WhatsApp
- Provedor de IA desacoplado: OpenAI inicialmente

## Regras fundamentais

1. A IA nunca inventa produto, preço, taxa, prazo ou situação de pedido.
2. Dados comerciais são consultados na API e no banco de dados.
3. Cada requisição deve possuir um `tenantId` válido.
4. Conhecimento e instruções de uma empresa nunca são compartilhados com outra.
5. O atendente humano pode assumir ou devolver a conversa para a IA.
6. Toda ação comercial importante deve gerar auditoria.

## Desenvolvimento

```bash
cp .env.example .env
docker compose up -d
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Aplicações

- Painel do comerciante: `http://localhost:3000`
- Painel DFS: `http://localhost:3001`
- API: `http://localhost:3333/api`
- Health check: `http://localhost:3333/api/health`
