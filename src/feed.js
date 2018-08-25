const variables = require("./variables");

let SubscribeTicker = (
  countParam = 20,
  intervalParam = 60,
  InstrumentId = 1
) => {
  //Message Frame
  let requestPayload = {
    OMSId: variables.OMSId,
    InstrumentId: InstrumentId,
    Interval: intervalParam,
    IncludeLastCount: countParam
  };
  let frame = {
    m: 0,
    i: 1,
    n: "SubscribeTicker",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("SubscribeTicker.error: (" + error + ")");
    }
  });
};

let UnsubscribeTicker = (InstrumentId = 1) => {
  //Message Frame
  let requestPayload = { OMSId: variables.OMSId, InstrumentId: InstrumentId };
  let frame = {
    m: 0,
    i: 1,
    n: "UnsubscribeTicker",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("UnsubscribeTicker.error: (" + error + ")");
    }
  });
};

let GetL2Snapshot = (depth = 100, instrumentId = 1) => {
  //Message Frame
  let requestPayload = {
    OMSId: variables.OMSId,
    InstrumentId: instrumentId,
    Depth: depth
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetL2Snapshot",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetL2Snapshot.error: (" + error + ")");
    }
  });
};

let GetTickerHistory = (minutes, instrumentId = 1) => {
  //Message Frame
  var fromDate = new Date();
  fromDate.setMinutes(fromDate.getMinutes() - minutes);
  fromDate = fromDate.getTime().toFixed(0);
  let requestPayload = {
    InstrumenId: instrumentId,
    FromDate: parseInt(fromDate)
  };
  let frame = {
    m: 2,
    i: 1,
    n: "GetTickerHistory",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetTickerHistory.error: (" + error + ")");
    }
  });
};

let SubscribeTrades = (countParam = 20, InstrumentId = 1) => {
  //Message Frame
  let requestPayload = {
    OMSId: variables.OMSId,
    InstrumentId: InstrumentId,
    IncludeLastCount: countParam
  };
  let frame = {
    m: 0,
    i: 1,
    n: "SubscribeTrades",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("SubscribeTrades.error: (" + error + ")");
    }
  });
};

let UnsubscribeTrades = (InstrumentId = 1) => {
  //Message Frame
  let requestPayload = { OMSId: variables.OMSId, InstrumentId: InstrumentId };
  let frame = {
    m: 0,
    i: 1,
    n: "UnsubscribeTrades",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("UnsubscribeTrades.error: (" + error + ")");
    }
  });
};

module.exports = {
  GetL2Snapshot,
  GetTickerHistory,
  //GetTradesHistory,
  //SubscribeAccountEvents,
  //SubscribeLevel1,
  //SubscribeLevel2,
  SubscribeTicker,
  SubscribeTrades,
  //UnsubscribeLevel1,
  //UnsubscribeLevel2,
  UnsubscribeTicker,
  UnsubscribeTrades
};
