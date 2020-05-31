const WebSocket = require("ws");
const events = require("events");
const eventEmitter = new events.EventEmitter();

let force2FA = false;
let userLogin = "";
let userPass = "";
let userId = "0";
let accountId = 0;
let sessionToken = "";
let OMSId = 1;
let wsAddress = "wss://api.foxbit.com.br/WSGateway/";
let ws = new WebSocket(wsAddress);

module.exports = {
  force2FA,
  userLogin,
  userPass,
  userId,
  accountId,
  sessionToken,
  OMSId,
  ws,
  wsAddress,
  eventEmitter
};
