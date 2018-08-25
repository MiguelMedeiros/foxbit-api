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

  console.log("Endpoint: " + ret.n);
  switch (ret.n) {
    case "Authenticate2FA":
      variables.force2FA = false;
      let paramO;
      if (ret.o != undefined) {
        paramO = JSON.parse(ret.o);
        variables.sessionToken = JSON.stringify(paramO.SessionToken);
        variables.userId = JSON.stringify(paramO.UserId);
        authentication.Authenticate2FA();
      }
      break;
    case "WebAuthenticateUser":
      variables.userId = res.UserId;
      userInfo.GetUserInfo();
      if (variables.force2FA === true) {
        authentication.Authenticate2FA();
      }
      break;
    case "GetUserInfo":
      variables.OMSId = res.OMSId;
      variables.force2FA = res.Use2FA;
      if (variables.accountId === 0) {
        variables.accountId = res.AccountId;
        variables.eventEmitter.emit("Ready", true);
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
