# Meu App

Aplicativo Expo/React Native com telas de início, login/cadastro, catálogo, sacola e pagamento demonstrativo.

## Requisitos e execução

Use a versão de Node compatível com Expo 44 e instale dependências com npm:

```sh
npm ci
npm start
```

Use o menu do Expo para abrir Android, iOS ou web. Os scripts `npm run android`, `npm run ios` e `npm run web` também estão definidos no `package.json`.

## Estado atual

As telas de cadastro, carrinho e pagamento são protótipos locais; não criam conta, persistem carrinho nem processam pagamentos. Não use dados de cartão reais. Uma próxima etapa deve integrar uma API e um provedor de pagamento por fluxo hospedado/tokenizado.
