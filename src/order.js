const variables = require("./variables");

let SendOrder = (
  Side = "Buy",
  OrderType = "Limit",
  Quantity,
  LimitPrice,
  StopPrice = 0,
  PegPriceType = "Last",
  TimeInForce = 1,
  InstrumentId = 1
) => {
  switch (Side) {
    case "Buy":
      Side = 0;
      break;
    case "Sell":
      Side = 1;
      break;
    default:
      Side = 0;
  }
  switch (OrderType) {
    case "Market":
      OrderType = 1;
      break;
    case "Limit":
      OrderType = 2;
      break;
    case "StopMarket":
      OrderType = 3;
      break;
    case "StopLimit":
      OrderType = 4;
      break;
    case "TrailingStopMarket":
      OrderType = 5;
      break;
    case "TrailingStopLimit":
      OrderType = 6;
      break;
    case "BlockTrade":
      OrderType = 7;
    default:
      OrderType = 2;
  }

  switch (PegPriceType) {
    case "Last":
      PegPriceType = 1;
      break;
    case "Bid":
      PegPriceType = 2;
      break;
    case "Ask":
      PegPriceType = 3;
      break;
    case "Midpoint":
      PegPriceType = 4;
      break;
    default:
      PegPriceType = 1;
  }

  var requestPayload = {
    AccountId: variables.accountId,
    ClientOrderId: variables.userId,
    Quantity: Quantity,
    DisplayQuantity: 0,
    UseDisplayQuantity: true,
    LimitPrice: LimitPrice,
    OrderIdOCO: 0,
    OrderType: OrderType,
    PegPriceType: PegPriceType,
    InstrumentId: InstrumentId,
    TrailingAmount: 1.0,
    LimitOffset: 2.0,
    Side: Side,
    StopPrice: StopPrice,
    TimeInForce: TimeInForce,
    OMSId: variables.OMSId
  };
  let frame = { m: 0, i: 1, n: "SendOrder", o: JSON.stringify(requestPayload) };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("SendOrder.error: (" + error + ")");
    }
  });
};

let CancelOrder = (ClientOrderId, OrderId) => {
  let requestPayload = {
    OMSId: variables.OMSId,
    AccountId: variables.accountId,
    ClientOrderId: ClientOrderId,
    OrderId: OrderId
  };
  let frame = {
    m: 0,
    i: 1,
    n: "CancelOrder",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("CancelOrder.error: (" + error + ")");
    }
  });
};

let GetAccountInfo = () => {
  let requestPayload = {
    OMSId: variables.OMSId,
    AccountId: variables.accountId,
    AccountHandle: ""
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetAccountInfo",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetAccountInfo.error: (" + error + ")");
    }
  });
};

let GetOrdersHistory = () => {
  let requestPayload = {
    AccountId: variables.accountId,
    OMSId: variables.OMSId
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetOrdersHistory",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetOrdersHistory.error: (" + error + ")");
    }
  });
};

let GetInstrument = (instrumentId = 1) => {
  let requestPayload = { InstrumentId: instrumentId, OMSId: variables.OMSId };
  let frame = {
    m: 0,
    i: 1,
    n: "GetInstrument",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetInstrument.error: (" + error + ")");
    }
  });
};

let GetInstruments = () => {
  let requestPayload = { OMSId: variables.OMSId };
  let frame = {
    m: 0,
    i: 1,
    n: "GetInstruments",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetInstrument.error: (" + error + ")");
    }
  });
};

let GetProduct = (productId = 1) => {
  let requestPayload = { OMSId: variables.OMSId, ProductId: productId };
  let frame = {
    m: 0,
    i: 1,
    n: "GetProduct",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetProduct.error: (" + error + ")");
    }
  });
};

let GetProducts = () => {
  let requestPayload = { OMSId: variables.OMSId };
  let frame = {
    m: 0,
    i: 1,
    n: "GetProducts",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetProducts.error: (" + error + ")");
    }
  });
};

let GetOpenOrders = () => {
  let requestPayload = {
    AccountId: variables.accountId,
    OMSId: variables.OMSId
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetOpenOrders",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetOpenOrders.error: (" + error + ")");
    }
  });
};

let CancelAllOrders = (instrumentId = 1) => {
  let requestPayload = {
    AccountId: variables.accountId,
    UserId: variables.userId,
    OMSId: variables.OMSId,
    InstrumentId: instrumentId
  };
  let frame = {
    m: 0,
    i: 1,
    n: "CancelAllOrders",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("CancelAllOrders.error: (" + error + ")");
    }
  });
};

let GetAccountPositions = () => {
  let requestPayload = {
    AccountId: variables.accountId,
    OMSId: variables.OMSId
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetAccountPositions",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetAccountPositions.error: (" + error + ")");
    }
  });
};

let GetAccountTrades = (count = 10, StartIndex = 0) => {
  let requestPayload = {
    AccountId: variables.accountId,
    OMSId: variables.OMSId,
    StartIndex: StartIndex,
    Count: count
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetAccountTrades",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetAccountTrades.error: (" + error + ")");
    }
  });
};

let GetAccountTransactions = (depth = 10) => {
  let requestPayload = {
    AccountId: variables.accountId,
    OMSId: variables.OMSId,
    Depth: depth
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetAccountTransactions",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetAccountTransactions.error: (" + error + ")");
    }
  });
};

module.exports = {
  CancelAllOrders,
  CancelOrder,
  //CancelQuote,
  //CancelReplaceOrder,
  //CreateQuote,
  GetAccountInfo,
  GetAccountPositions,
  GetAccountTrades,
  GetAccountTransactions,
  GetInstrument,
  GetInstruments,
  GetOpenOrders,
  //GetOpenQuotes,
  //GetOrderFee,
  //GetOrderHistory,
  //GetOrderHistoryByOrderId,
  GetOrdersHistory,
  //GetOrderStatus,
  GetProduct,
  GetProducts,
  //GetUserAccounts,
  //GetUserAccountInfos,
  //ModifyOrder,
  SendOrder
  //UpdateQuote
};
