# Sistech — protótipo de app de loja

Aplicativo móvel de demonstração feito com Expo e React Native. Inclui telas de início, login/cadastro, catálogo, sacola e pagamento demonstrativo.

## Requisitos

- Node.js compatível com Expo SDK 44
- npm
- Expo Go compatível com o SDK antigo ou emulador Android/iOS apropriado

## Instalação e execução

Na raiz do repositório:

~~~sh
npm ci
npm start
~~~

O Expo inicia o servidor de desenvolvimento e mostra um QR code/menu. Abra com o emulador ou dispositivo compatível. Também há atalhos:

~~~sh
npm run android
npm run ios
npm run web
~~~

O suporte a iOS pode exigir macOS e Xcode. Este projeto usa Expo 44, uma versão antiga; se o ambiente atual não for compatível, consulte a documentação de migração do Expo ou use um ambiente compatível com o SDK do projeto.

## Como verificar

Não há script de teste automatizado no package.json. Faça uma verificação manual percorrendo as telas de navegação, login/cadastro, catálogo, sacola e pagamento demonstrativo.

## Limitações e segurança

As telas são protótipos locais: não criam contas, não persistem a sacola e não processam pagamentos. Não informe dados pessoais ou de cartão reais. Uma versão funcional precisa de API e de fluxo hospedado/tokenizado de um provedor de pagamento.