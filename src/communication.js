const utils = require("./utils");
const variables = require("./variables");
const authentication = require("./authentication");
const userInfo = require("./userInfo");

//Event Receiving Message
variables.ws.on("message", function incoming(data) {
  dealMessage(data);
});

//Event Error Message
variables.ws.on("error", function() {
  utils.consoleMessage("WebService", "error! ");
});

//Event Close Message
variables.ws.on("close", function() {
  utils.consoleMessage("WebService", "close! ");
});

//Event End Message
variables.ws.on("end", function(data) {
  utils.consoleMessage("WebService", "end! " + data);
});

//Function DealMessage
let dealMessage = message => {
  let ret = JSON.parse(message);
  let res = JSON.parse(ret.o);
  //console.log(message);
  console.log("Endpoint: " + ret.n);
  switch (ret.n) {
    case "Authenticate2FA":
      let paramO;
      if (ret.o != undefined) {
        paramO = JSON.parse(ret.o);
        variables.sessionToken = JSON.stringify(paramO.SessionToken);
        variables.userId = parseInt(paramO.UserId);
        userInfo.GetUserInfo();
        variables.eventEmitter.emit("Connected", res);
      }
      break;
    case "WebAuthenticateUser":
      if (res.Authenticated) {
        if (res.Requires2FA) {
          authentication.Authenticate2FA();
        } else {
          variables.eventEmitter.emit("Connected", res);
          variables.userId = parseInt(res.UserId);
          userInfo.GetUserInfo();
        }
      } else {
        variables.eventEmitter.emit("Connected", res);
      }
      break;
    case "GetUserInfo":
      variables.OMSId = res.OMSId;
      if (variables.accountId === 0) {
        variables.accountId = res.AccountId;
        variables.eventEmitter.emit("Ready", true);
      } else {
        variables.eventEmitter.emit("GetUserInfo", res);
      }
      break;
    default:
      if (res) {
        variables.eventEmitter.emit(ret.n, JSON.parse(ret.o));
      } else {
        variables.eventEmitter.emit(ret.n, res);
      }
  }
};

module.exports = {
  dealMessage,
  eventEmitter: variables.eventEmitter
};
