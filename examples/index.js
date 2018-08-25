let foxbit = require("../src/index");

// Credencials
let user = "";
let password = "";

foxbit.Connect(user, password);

// foxbit.eventEmitter.on("Connected", res => {
//   console.log(res);
// });

// *************************************************************
// ******************** Métodos Privados ***********************
// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getuserinfo
// Retorna os dados das informações de Usuário
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetUserInfo();
//   foxbit.eventEmitter.on("GetUserInfo", res => {
//     console.log(res);
//   });
// });

// Link: https://foxbit.com.br/api/docs/websocket_intro.html#getuserconfig
// Retorna configurações definidas pelo usuário.
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetUserConfig();
//   foxbit.eventEmitter.on("GetUserConfig", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getuserpermissions
// Retorna permissões específicas para o usuário solicitante.
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetUserPermissions();
//   foxbit.eventEmitter.on("GetUserPermissions", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html#getavailablepermissionlist
// Retorna permissões da exchange ( MËTODO DESATIVADO )
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetAvailablePermissionList();
//   foxbit.eventEmitter.on("GetAvailablePermissionList", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#cancelallorders
// Cancela todas as ordens abertas para o par especificado.
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.CancelAllOrders();
//   foxbit.eventEmitter.on("CancelAllOrders", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#cancelorder
// Cancela ordem específica que ainda não foi executada.
// Parâmetros de customização:
// CancelOrder(ClientOrderId, OrderId);
// let ClientOrderId = 11111;
// let orderId = 9999;
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.CancelOrder(ClientOrderId, orderId);
//   foxbit.eventEmitter.on("CancelOrder", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccountinfo
// Retorna informação sobre a conta do usuário logado.
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetAccountInfo();
//   foxbit.eventEmitter.on("GetAccountInfo", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccountpositions
// Retorna um array com o histórico do balanço do usuário
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetAccountPositions();
//   foxbit.eventEmitter.on("GetAccountPositions", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccounttrades
// Retorna um array com o histórico do ordens executadas do usuário
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetAccountTrades();
//   foxbit.eventEmitter.on("GetAccountTrades", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getaccounttransactions
// Retorna um array com o histórico do Transações
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetAccountTransactions();
//   foxbit.eventEmitter.on("GetAccountTransactions", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getopenorders
// Retorna um array com o ordens abertas
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetOpenOrders();
//   foxbit.eventEmitter.on("GetOpenOrders", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#sendorder
// Envia Ordem de Compra/Venda
// foxbit.eventEmitter.on("Ready", res => {
//   let Side = "Sell"; // Buy, Sell
//   let OrderType = "Limit"; // Market, Limit, StopMarket, StopLimit, TralingStopMarket, TrailingStopLimit, BlockTrade
//   let Quantity = 0.0001; // BTC
//   let Price = 40000; // BRL

//   foxbit.SendOrder(Side, OrderType, Quantity, Price);
//   foxbit.eventEmitter.on("SendOrder", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#sendorder
// Retorna um array o histórico de ordens
// foxbit.eventEmitter.on("Ready", res => {
//   foxbit.GetOrdersHistory();
//   foxbit.eventEmitter.on("GetOrdersHistory", res => {
//     console.log(res);
//   });
// });

// *************************************************************
// ******************** Métodos Públicos ***********************
// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getinstruments
// Retorna um array de pares cadastrados
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.GetInstruments();
//   foxbit.eventEmitter.on("GetInstruments", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getinstrument
// Retorna o detalhamento do Par por ID
// Parâmetros de customização: (Padrão: 1 - BTC/BRL)
// GetInstrument(instrumentId = 1)
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.GetInstrument();
//   foxbit.eventEmitter.on("GetInstrument", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getproducts
// Pega as moedas cadastradas
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.GetProducts();
//   foxbit.eventEmitter.on("GetProducts", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getproduct
// Pega a moedas cadastrado por ID
// Parâmetros de customização:
// GetProduct(productId = 1);
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.GetProduct(1);
//   foxbit.eventEmitter.on("GetProduct", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#subscribeticker
// Se inscreve no Ticker
// Parâmetros de customização:
// SubscribeTicker(countParam = 20, intervalParam = 60, InstrumentId = 1);
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.SubscribeTicker(50);
//   foxbit.eventEmitter.on("SubscribeTicker", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#unsubscribeticker
// Desinscreve do Ticker
// Parâmetros de customização:
// UnsubscribeTicker(InstrumentId = 1);
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.UnsubscribeTicker();
//   foxbit.eventEmitter.on("UnsubscribeTicker", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html#gettickerhistory
// Retorna histórico de Tickers
// Parâmetros de customização:
// GetTickerHistory(minutes, instrumentId);
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.GetTickerHistory(60);
//   foxbit.eventEmitter.on("GetTickerHistory", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#getl2snapshot
// Retorna spanshot do Orderbook
// Parâmetros de customização:
// GetL2Snapshot(countParam = 20, intervalParam = 60, InstrumentId = 1);
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.GetL2Snapshot(100);
//   foxbit.eventEmitter.on("GetL2Snapshot", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Link: https://foxbit.com.br/api/docs/websocket_intro.html?highlight=getopenorders#logout
// Finaliza conexão
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.LogOut();
//   foxbit.eventEmitter.on("LogOut", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Retorna últimas Trades
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.SubscribeTrades();
//   foxbit.eventEmitter.on("SubscribeTrades", res => {
//     console.log(res);
//   });
// });

// *************************************************************

// Desinscreve no retorno de últimas Trades
// foxbit.eventEmitter.on("Connected", res => {
//   foxbit.UnsubscribeTrades();
//   foxbit.eventEmitter.on("UnsubscribeTrades", res => {
//     console.log(res);
//   });
// });
