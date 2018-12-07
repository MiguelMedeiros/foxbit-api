# Foxbit API (WebSocket)

[![NPM](https://img.shields.io/npm/v/foxbit-api.svg?style=flat-square)](https://www.npmjs.com/package/foxbit-api)
[![NPM](https://img.shields.io/david/MiguelMedeiros/foxbit-api.svg?style=flat-square)](https://david-dm.org/MiguelMedeiros/foxbit-api#info=dependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/MiguelMedeiros/foxbit-api)
[![Known Vulnerabilities](https://snyk.io/test/github/MiguelMedeiros/foxbit-api/badge.svg)](https://snyk.io/test/github/MiguelMedeiros/foxbit-api)

Pacote NPM de acesso via WebSocket para a API da exchange brasileira Foxbit.

Autor: **Miguel Medeiros** [[Site]](https://www.miguelmedeiros.com.br) [[Youtube]](https://www.youtube.com/user/miguelmedeiros) [[Twitter]](https://twitter.com/_miguelmedeiros)<br />
Exchange: [[Foxbit]](https://foxbit.com.br/)<br />
Documentação da API: [[Site da Foxbit]](https://docs.foxbit.com.br/) [[PDF da Alphapoint]](https://github.com/MiguelMedeiros/foxbit-api/blob/master/api-doc-alphapoint.pdf)

Gostou do trabalho? Então me pague um café!<br/>
Carteira BTC: **1NM76h5SvdhTdmS8dksGwWpHNbnVngWczR**<br/><br/>

---

Esse pacote foi desenvolvido para uso próprio.<br/>
Portanto, não é um pacote oficial da Foxbit.<br/>
**USE POR SUA CONTA E RISCO!**

## Readme Index

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Funções](#funções)
  - [Funções Públicas](#funções-públicas)
    - [Connect](#connect): Conecta na API via WebSocket.
    - [LogOut](#logout): Finaliza conexão com o WebSocket.
    - [GetInstrument](#getinstrument): Retorna as informações par de moedas por ID.
    - [GetInstruments](#getinstruments): Retorna um array de pares de moedas cadastrados.
    - [GetOpenOrders](#getopenorders): Retorna as ordens abertas no livro de ordens.
    - [GetProduct](#getproduct): Retorna a moeda cadastrado por ID.
    - [GetProducts](#getproducts): Retorna as moedas cadastradas.
    - [GetL2Snapshot](#getl2snapshot): Retorna um spanshot do Orderbook.
    - [GetTickerHistory](#gettickerhistory): Retorna um histórico de Tickers.
    - [SubscribeTicker](#subscribeticker): Se inscreve para receber Tickers atualizados.
    - [SubscribeTrades](#subscribetrades): Se inscreve para receber Trades atualizadas.
    - [UnsubscribeTicker](#unsubscribeticker): Se desinscreve do Ticker.
    - [UnsubscribeTrades](#unsubscribetrades): Se desinscreve das Trades.
  - [Funções Privadas](#funções-privadas)
    - [GetUserConfig](#getuserconfig): Retorna configurações definidas pelo usuário.
    - [GetUserInfo](#getuserinfo): Retorna os dados das informações de Usuário.
    - [GetUserPermissions](#getuserpermissions): Retorna permissões do usuário solicitante.
    - [GetOrdersHistory](#getordershistory): Retorna um array com o histórico de ordens.
    - [SendOrder](#sendorder): Envia Ordem de Compra/Venda.
    - [CancelAllOrders](#cancelallorders): Cancela todas as ordens abertas.
    - [CancelOrder](#cancelorder): Cancela ordem que ainda não foi executada.
    - [GetAccountInfo](#getaccountinfo): Retorna informação sobre a conta do usuário logado.
    - [GetAccountPositions](#getaccountpositions): Retorna um array com o balanço do usuário.
    - [GetAccountTrades](#getaccounttrades): Retorna um array com o histórico do ordens executadas do usuário.
    - [GetAccountTransactions](#getaccounttransactions): Retorna um array com o histórico de transações abertas do usuário.
- [Contribua com Código](#contribua-com-código)
- [License](#license-mit)

## Instalação

Você precisa importar o pacote para seu projeto:

```bash
npm i foxbit-api --save
```

## Configuração

```javascript
// importar foxbit api package
const foxbit = require("foxbit-api");
```

## Funções

Segue a lista de funções para se conectar com o WebSocket da API da Foxbit.

### Funções Públicas

Não é necessária de credenciais para acessar os métodos públicos.

#### Connect

Conecta na API via WebSocket.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html#webauthenticateuser)

```javascript
// Variáveis das suas credenciais
// Necessárias somente para métodos privados.
let user = "";
let password = "";

// Dispara chamada para conectar com o WebSocket.
foxbit.Connect(user, password);

// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  console.log(res);
});
```

#### Logout

Finaliza conexão com o WebSocket.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#logout)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada LogOut.
  foxbit.LogOut();
});

// Evento disparado quando o LogOut foi efetuado.
foxbit.eventEmitter.on("LogOut", res => {
  console.log(res);
});
```

#### GetInstrument

Retorna as informações par de moedas por ID.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getinstrument)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetInstrument.
  foxbit.GetInstrument();
});

// Evento disparado quando o GetInstrument foi efetuado.
foxbit.eventEmitter.on("GetInstrument", res => {
  console.log(res);
});
```

#### GetInstruments

Retorna um array de pares de moedas cadastrados.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getinstruments)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetInstruments.
  foxbit.GetInstruments();
});

// Evento disparado quando o GetInstruments foi efetuado.
foxbit.eventEmitter.on("GetInstruments", res => {
  console.log(res);
});
```

#### GetOpenOrders

Retorna as ordens abertas no livro de ordens.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getopenorders)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetProducts.
  foxbit.GetProducts();
});

// Evento disparado quando o GetProducts foi efetuado.
foxbit.eventEmitter.on("GetProducts", res => {
  console.log(res);
});
```

#### GetProduct

Retorna a moeda cadastrado por ID.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getproduct)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetProduct.
  foxbit.GetProduct(1);
});

// Evento disparado quando o GetProduct foi efetuado.
foxbit.eventEmitter.on("GetProduct", res => {
  console.log(res);
});
```

#### GetProducts

Retorna as moedas cadastradas.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getproducts)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetProducts.
  foxbit.GetProducts();
});

// Evento disparado quando o GetProducts foi efetuado.
foxbit.eventEmitter.on("GetProducts", res => {
  console.log(res);
});
```

#### GetL2Snapshot

Retorna um spanshot do Orderbook.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getl2snapshot)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetL2Snapshot.
  foxbit.GetL2Snapshot(100);
});

// Evento disparado quando o GetL2Snapshot foi efetuado.
foxbit.eventEmitter.on("GetL2Snapshot", res => {
  console.log(res);
});
```

#### GetTickerHistory

Retorna um histórico de Tickers.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html#gettickerhistory)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  //Variável de parametrização
  let lastMinutes = 60;

  // Dispara chamada GetTickerHistory.
  foxbit.GetTickerHistory(lastMinutes);
});

// Evento disparado quando o GetTickerHistory foi efetuado.
foxbit.eventEmitter.on("GetTickerHistory", res => {
  console.log(res);
});
```

#### SubscribeTicker

Se inscreve para receber Tickers atualizados.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#subscribeticker)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada SubscribeTicker.
  foxbit.SubscribeTicker(1);
});

// Evento disparado quando o SubscribeTicker foi efetuado.
foxbit.eventEmitter.on("SubscribeTicker", res => {
  console.log(res);
});

// Evento disparado quando o Ticker é atualizado.
foxbit.eventEmitter.on("TickerDataUpdateEvent", res => {
  console.log(res);
});
```

#### SubscribeTrades

Se inscreve para receber Trades atualizadas.

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada SubscribeTrades.
  foxbit.SubscribeTrades();
});

// Evento disparado quando o SubscribeTrades foi efetuado.
foxbit.eventEmitter.on("SubscribeTrades", res => {
  console.log(res);
});

// Evento disparado quando alguma Trade foi efetuada.
foxbit.eventEmitter.on("TradeDataUpdateEvent", res => {
  console.log(res);
});
```

#### UnsubscribeTicker

Se desinscreve do Ticker.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#unsubscribeticker)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada UnsubscribeTicker.
  foxbit.UnsubscribeTicker();
});

// Evento disparado quando o UnsubscribeTicker foi efetuado.
foxbit.eventEmitter.on("UnsubscribeTicker", res => {
  console.log(res);
});
```

#### UnsubscribeTrades

Se desinscreve das Trades.

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada UnsubscribeTrades.
  foxbit.UnsubscribeTrades();
});

// Evento disparado quando o UnsubscribeTrades foi efetuado.
foxbit.eventEmitter.on("UnsubscribeTrades", res => {
  console.log(res);
});
```

### Funções Privadas

Ao se conectar é necessário usar credenciais (usuário e senha) para acessar os métodos privados.

#### GetUserInfo

Retorna os dados das informações de Usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getuserinfo)

```javascript
// Evento disparado quando o WebSocket foi conectado.
foxbit.eventEmitter.on("Connected", res => {
  // Dispara chamada GetUserInfo.
  foxbit.GetUserInfo();
});

// Evento disparado quando o GetUserInfo foi efetuado.
foxbit.eventEmitter.on("GetUserInfo", res => {
  console.log(res);
});
```

#### GetUserConfig

Retorna configurações definidas pelo usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html#getuserconfig)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada GetUserConfig.
  foxbit.GetUserConfig();
});

// Evento disparado quando o GetUserConfig foi efetuado.
foxbit.eventEmitter.on("GetUserConfig", res => {
  console.log(res);
});
```

#### GetUserPermissions

Retorna permissões do usuário solicitante.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getuserpermissions)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada GetUserPermissions.
  foxbit.GetUserPermissions();
});

// Evento disparado quando o GetUserPermissions foi efetuado.
foxbit.eventEmitter.on("GetUserPermissions", res => {
  console.log(res);
});
```

#### GetOrdersHistory

Retorna um array com o histórico de ordens.

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada GetOrdersHistory.
  foxbit.GetOrdersHistory();
});

// Evento disparado quando o GetOrdersHistory foi efetuado.
foxbit.eventEmitter.on("GetOrdersHistory", res => {
  console.log(res);
});
```

#### SendOrder

Envia Ordem de Compra/Venda.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#sendorder)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Variáveis de parametrização
  let Side = "Sell"; // Buy, Sell
  // Market, Limit, StopMarket, StopLimit, TralingStopMarket, TrailingStopLimit, BlockTrade
  let OrderType = "Limit";
  let Quantity = 0.0001; // BTC
  let Price = 40000; // BRL

  // Dispara chamada SendOrder.
  foxbit.SendOrder(Side, OrderType, Quantity, Price);
});

// Evento disparado quando o SendOrder foi efetuado.
foxbit.eventEmitter.on("SendOrder", res => {
  console.log(res);
});
```

#### CancelAllOrders

Cancela todas as ordens abertas.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#cancelallorders)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada CancelAllOrders.
  foxbit.CancelAllOrders();
});

// Evento disparado quando o CancelAllOrders foi efetuado.
foxbit.eventEmitter.on("CancelAllOrders", res => {
  console.log(res);
});
```

#### CancelOrder

Cancela ordem que ainda não foi executada.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#cancelorder)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Variáveis de Parametrização
  let ClientOrderId = 11111;
  let orderId = 9999;

  // Dispara chamada CancelOrder.
  foxbit.CancelOrder(ClientOrderId, orderId);
});

// Evento disparado quando o CancelOrder foi efetuado.
foxbit.eventEmitter.on("CancelOrder", res => {
  console.log(res);
});
```

#### GetAccountInfo

Retorna informação sobre a conta do usuário logado.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccountinfo)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada CancelOrder.
  foxbit.GetAccountInfo();
});

// Evento disparado quando o GetAccountInfo foi efetuado.
foxbit.eventEmitter.on("GetAccountInfo", res => {
  console.log(res);
});
```

#### GetAccountPositions

Retorna um array com o balanço do usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccountpositions)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada GetAccountPositions.
  foxbit.GetAccountPositions();
});

// Evento disparado quando o GetAccountPositions foi efetuado.
foxbit.eventEmitter.on("GetAccountPositions", res => {
  console.log(res);
});
```

#### GetAccountTrades

Retorna um array com o histórico do ordens executadas do usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccounttrades)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada GetAccountTrades.
  foxbit.GetAccountTrades();
});

// Evento disparado quando o GetAccountTrades foi efetuado.
foxbit.eventEmitter.on("GetAccountTrades", res => {
  console.log(res);
});
```

#### GetAccountTransactions

Retorna um array com o histórico de transações abertas do usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccounttransactions)

```javascript
// Evento disparado quando o WebSocket foi conectado
// e recebeu as informações do usuário.
foxbit.eventEmitter.on("Ready", res => {
  // Dispara chamada GetAccountTransactions.
  foxbit.GetAccountTransactions();
});

// Evento disparado quando o GetAccountTransactions foi efetuado.
foxbit.eventEmitter.on("GetAccountTransactions", res => {
  console.log(res);
});
```

## Contribua com Código

Ainda faltam algumas chamadas para completar a API como um todo. Vou adorar se você quiser contribuir para deixar esse pacote mais completo! Sinta-se à vontade em fazer um 'pull request'! Afinal esse repositório é aberto! <3

## LICENSE [MIT](LICENSE)
