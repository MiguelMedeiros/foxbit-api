let foxbit = require("../src/index");

// Credencials
let user = "";
let password = "";

foxbit.Connect(user, password);

foxbit.eventEmitter.on("Connected", res => {
  foxbit.GetUserInfo();
  foxbit.GetInstrument();
  foxbit.GetInstruments();
  foxbit.GetProduct(1);
  foxbit.GetProducts();
  foxbit.SubscribeTicker(50);
  foxbit.GetTickerHistory(60);
  foxbit.GetL2Snapshot(100);
  foxbit.LogOut();
  foxbit.SubscribeTrades();
  foxbit.UnsubscribeTicker();
  foxbit.UnsubscribeTrades();
});

foxbit.eventEmitter.on("Ready", res => {
  foxbit.GetUserConfig();
  foxbit.GetUserPermissions();
  foxbit.GetAvailablePermissionList();
  foxbit.CancelAllOrders();

  let ClientOrderId = 11111;
  let orderId = 9999;
  foxbit.CancelOrder(ClientOrderId, orderId);
  foxbit.GetAccountInfo();
  foxbit.GetAccountPositions();
  foxbit.GetAccountTrades();
  foxbit.GetAccountTransactions();
  foxbit.GetOpenOrders();

  let Side = "Sell"; // Buy, Sell
  let OrderType = "Limit"; // Market, Limit, StopMarket, StopLimit, TralingStopMarket, TrailingStopLimit, BlockTrade
  let Quantity = 0.0001; // BTC
  let Price = 40000; // BRL
  foxbit.SendOrder(Side, OrderType, Quantity, Price);
  foxbit.GetOrdersHistory();
});

foxbit.eventEmitter.on("GetUserInfo", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetUserConfig", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetUserPermissions", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetAvailablePermissionList", res => {
  console.log(res);
});

foxbit.eventEmitter.on("CancelAllOrders", res => {
  console.log(res);
});

foxbit.eventEmitter.on("CancelOrder", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetAccountInfo", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetAccountPositions", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetAccountTrades", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetAccountTransactions", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetOpenOrders", res => {
  console.log(res);
});

foxbit.eventEmitter.on("SendOrder", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetOrdersHistory", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetInstruments", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetInstrument", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetProducts", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetProduct", res => {
  console.log(res);
});

foxbit.eventEmitter.on("SubscribeTicker", res => {
  console.log(res);
});

foxbit.eventEmitter.on("UnsubscribeTicker", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetTickerHistory", res => {
  console.log(res);
});

foxbit.eventEmitter.on("GetL2Snapshot", res => {
  console.log(res);
});

foxbit.eventEmitter.on("LogOut", res => {
  console.log(res);
});

foxbit.eventEmitter.on("SubscribeTrades", res => {
  console.log(res);
});

foxbit.eventEmitter.on("UnsubscribeTrades", res => {
  console.log(res);
});
