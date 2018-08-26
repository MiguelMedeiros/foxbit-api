# Foxbit API (WebSocket)

[![NPM](https://img.shields.io/npm/v/foxbit-api.svg?style=flat-square)](https://www.npmjs.com/package/foxbit-api)
[![NPM](https://img.shields.io/david/MiguelMedeiros/foxbit-api.svg?style=flat-square)](https://david-dm.org/MiguelMedeiros/foxbit-api#info=dependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/MiguelMedeiros/foxbit-api)

Descrição: Pacote NPM de acesso via WebSocket para a API da exchange brasileira Foxbit.

Autor: Miguel Medeiros - [www.miguelmedeiros.com.br](https://www.miguelmedeiros.com.br)<br />
Exchange: [Foxbit](https://foxbit.com.br/)<br />
Documentação:

- [Site](https://foxbit.com.br/api/docs)
- [PDF](https://github.com/MiguelMedeiros/foxbit-api/blob/master/api-doc-alphapoint.pdf)

Gostou do trabalho? Então me pague um café!<br/>
BTC Wallet: 1NM76h5SvdhTdmS8dksGwWpHNbnVngWczR<br/><br/>

---

Esse pacote foi desenvolvido para uso próprio.<br/>
Portanto, não é um pacote oficial da Foxbit.<br/>
**USE POR SUA CONTA E RISCO!**

## Readme Index

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Funções](#funções)
  - [Connect](#connect): Se conecta na API.
  - [LogOut](#logout): Finaliza conexão.
  - [GetUserConfig](#getuserconfig): Retorna configurações definidas pelo usuário.
  - [GetUserInfo](#getyserinfo): Retorna os dados das informações de Usuário.
  - [GetUserPermissions](#getuserpermissions): Retorna permissões específicas para o usuário solicitante.
  - [CancelAllOrders](#cancelallorders): Cancela todas as ordens abertas.
  - [GetAccountInfo](#getaccountinfo): Retorna informação sobre a conta do usuário logado.
  - [GetAccountPositions](#getaccountpositions): Retorna um array com o histórico do balanço do usuário.
  - [GetAccountTrades](#getaccounttrades): Retorna um array com o histórico do ordens executadas do usuário.
  - [GetAccountTransactions](#getaccounttransactions): Retorna um array com o histórico do Transações.
  - [GetInstrument](#getinstrument): Retorna o detalhamento do Par por ID.
  - [GetInstruments](#getinstruments): Retorna um array de pares cadastrados.
  - [GetOpenOrders](#getopenorders): Pega as moedas cadastradas.
  - [GetOrdersHistory](#getordershistory): Retorna um array o histórico de ordens.
  - [GetProduct](#getproduct): Pega a moedas cadastrado por ID.
  - [GetProducts](#getproducts): Pega as moedas cadastradas.
  - [SendOrder](#sendorder): Envia Ordem de Compra/Venda.
  - [GetL2Snapshot](#getl2snapshot): Retorna snapshot do Orderbook.
  - [GetTickerHistory](#gettickerhistory): Retorna histórico de Tickers.
  - [SubscribeTicker](#subscribeticker): Retorna histórico de Tickers.
  - [SubscribeTrades](#subscribetrades): Retorna últimas Trades.
  - [UnsubscribeTicker](#unsubscribeticker): Desinscreve do Ticker.
  - [UnsubscribeTrades](#unsubscribetrades): Desinscreve no retorno de últimas Trades.
- [Contribua com Código](#contribua-com-código)
- [License](#license-mit)

## Instalação

Você precisa importa o pacote para seu projeto: [npm package](https://www.npmjs.com/package/foxbitapi)

```bash
npm i foxbit-api --save
```

## Configuração

```node
// importar foxbit api package
const foxbit = require("foxbit-api");
```

## Funções

Segue a lista de funções para se conectar com o WebSocket da API da Foxbit.<br/>**Não é necessária as credenciais para acessar os métodos públicos.**

### Connect

**Método Público**<br/>
Se conecta na API.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html#webauthenticateuser)

```node
// Credenciais
let user = "";
let password = "";

foxbit.Connect(user, password);
foxbit.eventEmitter.on("Connected", res => {
  console.log(res);
});
```

### Logout

**Método Público**<br/>
Finaliza conexão.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#logout)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.LogOut();
  foxbit.eventEmitter.on("LogOut", res => {
    console.log(res);
  });
});
```

### GetUserConfig

**Método Privado**<br/>
Retorna configurações definidas pelo usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html#getuserconfig)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetUserConfig();
  foxbit.eventEmitter.on("GetUserConfig", res => {
    console.log(res);
  });
});
```

### GetUserInfo

**Método Privado**<br/>
Retorna os dados das informações de Usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getuserinfo)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetUserInfo();
  foxbit.eventEmitter.on("GetUserInfo", res => {
    console.log(res);
  });
});
```

### GetUserPermissions

**Método Privado**<br/>
Retorna permissões específicas para o usuário solicitante.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getuserpermissions)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetUserPermissions();
  foxbit.eventEmitter.on("GetUserPermissions", res => {
    console.log(res);
  });
});
```

### CancelAllOrders

**Método Privado**<br/>
Cancela todas as ordens abertas para o par especificado.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#cancelallorders)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.CancelAllOrders();
  foxbit.eventEmitter.on("CancelAllOrders", res => {
    console.log(res);
  });
});
```

### CancelOrder

**Método Privado**<br/>
Cancela ordem específica que ainda não foi executada.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#cancelorder)

```node
let ClientOrderId = 11111;
let orderId = 9999;
foxbit.eventEmitter.on("Ready", res => {
  foxbit.CancelOrder(ClientOrderId, orderId);
  foxbit.eventEmitter.on("CancelOrder", res => {
    console.log(res);
  });
});
```

### GetAccountInfo

**Método Privado**<br/>
Retorna informação sobre a conta do usuário logado.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccountinfo)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetAccountInfo();
  foxbit.eventEmitter.on("GetAccountInfo", res => {
    console.log(res);
  });
});
```

### GetAccountPositions

**Método Privado**<br/>
Retorna um array com o histórico do balanço do usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccountpositions)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetAccountPositions();
  foxbit.eventEmitter.on("GetAccountPositions", res => {
    console.log(res);
  });
});
```

### GetAccountTrades

**Método Privado**<br/>
Retorna um array com o histórico do ordens executadas do usuário.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccounttrades)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetAccountTrades();
  foxbit.eventEmitter.on("GetAccountTrades", res => {
    console.log(res);
  });
});
```

### GetAccountTransactions

**Método Privado**<br/>
Retorna um array com o histórico do Transações.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccounttransactions)

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetAccountTransactions();
  foxbit.eventEmitter.on("GetAccountTransactions", res => {
    console.log(res);
  });
});
```

### GetInstrument

**Método Público**<br/>
Retorna o detalhamento do Par por ID.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getinstrument)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetInstrument();
  foxbit.eventEmitter.on("GetInstrument", res => {
    console.log(res);
  });
});
```

### GetInstruments

**Método Público**<br/>
Retorna um array de pares cadastrados.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getinstruments)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetInstruments();
  foxbit.eventEmitter.on("GetInstruments", res => {
    console.log(res);
  });
});
```

### GetOpenOrders

**Método Público**<br/>
Pega as moedas cadastradas.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getopenorders)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetProducts();
  foxbit.eventEmitter.on("GetProducts", res => {
    console.log(res);
  });
});
```

### GetOrdersHistory

**Método Público**<br/>
Retorna um array o histórico de ordens.

```node
foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetOrdersHistory();
  foxbit.eventEmitter.on("GetOrdersHistory", res => {
    console.log(res);
  });
});
```

### GetProduct

**Método Público**<br/>
Pega a moedas cadastrado por ID.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getproduct)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetProduct(1);
  foxbit.eventEmitter.on("GetProduct", res => {
    console.log(res);
  });
});
```

### GetProducts

**Método Público**<br/>
Pega as moedas cadastradas.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getproducts)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetProducts();
  foxbit.eventEmitter.on("GetProducts", res => {
    console.log(res);
  });
});
```

### SendOrder

**Método Privado**<br/>
Envia Ordem de Compra/Venda.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#sendorder)

```node
foxbit.eventEmitter.on("Ready", res => {
  let Side = "Sell"; // Buy, Sell
  let OrderType = "Limit"; // Market, Limit, StopMarket, StopLimit, TralingStopMarket, TrailingStopLimit, BlockTrade
  let Quantity = 0.0001; // BTC
  let Price = 40000; // BRL

  foxbit.SendOrder(Side, OrderType, Quantity, Price);
  foxbit.eventEmitter.on("SendOrder", res => {
    console.log(res);
  });
});
```

### GetL2Snapshot

**Método Público**<br/>
Retorna spanshot do Orderbook.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getl2snapshot)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetL2Snapshot(100);
  foxbit.eventEmitter.on("GetL2Snapshot", res => {
    console.log(res);
  });
});
```

### GetTickerHistory

**Método Público**<br/>
Retorna histórico de Tickers.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html#gettickerhistory)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetTickerHistory(60);
  foxbit.eventEmitter.on("GetTickerHistory", res => {
    console.log(res);
  });
});
```

### SubscribeTicker

**Método Público**<br/>
Retorna histórico de Tickers.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#subscribeticker)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.SubscribeTicker(1);

  // esse evento é disparado quando vc se inscreve no ticker
  foxbit.eventEmitter.on("SubscribeTicker", res => {
    console.log(res);
  });

  // esse evento é disparado quando acontece alguma mudanca de ticker
  foxbit.eventEmitter.on("TickerDataUpdateEvent", res => {
    console.log(res);
  });
});
```

### SubscribeTrades

**Método Público**<br/>
Retorna últimas Trades.

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.SubscribeTrades();

  // esse evento é disparado quando você se inscreve para receber Trades
  foxbit.eventEmitter.on("SubscribeTrades", res => {
    console.log(res);
  });

  // esse evento é disparado quando acontece alguma Trade
  foxbit.eventEmitter.on("TradeDataUpdateEvent", res => {
    console.log(res);
  });
});
```

### UnsubscribeTicker

**Método Público**<br/>
Desinscreve do Ticker.<br/>[Link Documentação](https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#unsubscribeticker)

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.UnsubscribeTicker();
  foxbit.eventEmitter.on("UnsubscribeTicker", res => {
    console.log(res);
  });
});
```

### UnsubscribeTrades

**Método Público**<br/>
Desinscreve no retorno de últimas Trades.

```node
foxbit.eventEmitter.on("Connected", res => {
  foxbit.UnsubscribeTrades();
  foxbit.eventEmitter.on("UnsubscribeTrades", res => {
    console.log(res);
  });
});
```

## Contribua com Código

Ainda faltam algumas chamadas para completar a API como um todo. Então ficarei agradecido se você quiser contribuir para deixar esse pacote mais completo! Se sinta à vontade em fazer um 'pull request', afinal esse repositório é aberto!

## LICENSE [MIT](LICENSE)
