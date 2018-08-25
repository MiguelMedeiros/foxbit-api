const communication = require("./communication");
const authentication = require("./authentication");
const userInfo = require("./userInfo");
const order = require("./order");
const feed = require("./feed");

module.exports = {
  // Authentication Calls
  Authenticate2FA: authentication.Authenticate2FA,
  Connect: authentication.Connect,
  LogOut: authentication.LogOut,
  WebAuthenticateUser: authentication.WebAuthenticateUser,
  //ResetPassword: authentication.ResetPassword

  // Users Information Calls
  GetAvailablePermissionList: userInfo.GetAvailablePermissionList,
  GetUserConfig: userInfo.GetUserConfig,
  GetUserInfo: userInfo.GetUserInfo,
  GetUserPermissions: userInfo.GetUserPermissions,
  //RemoveUserConfig: userInfo.RemoveUserConfig,
  //SetUserConfig: userInfo.SetUserConfig,
  //SetUserInfo: userInfo.SetUserInfo,

  // Order-handling Calls
  CancelAllOrders: order.CancelAllOrders,
  CancelOrder: order.CancelOrder,
  //CancelQuote,
  //CancelReplaceOrder,
  //CreateQuote,
  GetAccountInfo: order.GetAccountInfo,
  GetAccountPositions: order.GetAccountPositions,
  GetAccountTrades: order.GetAccountTrades,
  GetAccountTransactions: order.GetAccountTransactions,
  GetInstrument: order.GetInstrument,
  GetInstruments: order.GetInstruments,
  GetOpenOrders: order.GetOpenOrders,
  //GetOpenQuotes: order.GetOpenQuotes,
  //GetOrderFee: order.GetOrderFee,
  //GetOrderHistory: order.GetOrderHistory,
  //GetOrderHistoryByOrderId: order.GetOrderHistoryByOrderId,
  GetOrdersHistory: order.GetOrdersHistory,
  //GetOrderStatus: order.GetOrderStatus,
  GetProduct: order.GetProduct,
  GetProducts: order.GetProducts,
  //GetUserAccounts: order.GetUserAccounts,
  //GetUserAccountInfos: order.GetUserAccountInfos,
  //ModifyOrder: order.ModifyOrder,
  SendOrder: order.SendOrder,
  //UpdateQuote: order.UpdateQuote,

  // Feed Calls
  GetL2Snapshot: feed.GetL2Snapshot,
  GetTickerHistory: feed.GetTickerHistory,
  //GetTradesHistory: feed.GetTradesHistory,
  //SubscribeAccountEvents: feed.SubscribeAccountEvents,
  //SubscribeLevel1: feed.SubscribeLevel1,
  //SubscribeLevel2: feed.SubscribeLevel2,
  SubscribeTicker: feed.SubscribeTicker,
  SubscribeTrades: feed.SubscribeTrades,
  //UnsubscribeLevel1: feed.UnsubscribeLevel1,
  //UnsubscribeLevel2: feed.UnsubscribeLevel2,
  UnsubscribeTicker: feed.UnsubscribeTicker,
  UnsubscribeTrades: feed.UnsubscribeTrades,

  // Comunication Calls
  eventEmitter: communication.eventEmitter
};
