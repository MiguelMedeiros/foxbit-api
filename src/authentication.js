const utils = require("./utils");
const variables = require("./variables");

let Connect = (user = "", password = "") => {
  variables.userLogin = user;
  variables.userPass = password;
  //Event Open Connection
  variables.ws.on("open", function open() {
    variables.eventEmitter.emit("Connected", true);
    if (variables.userLogin && variables.userPass) {
      WebAuthenticateUser();
    }
  });
};

//Function WebAuthenticateUser
let WebAuthenticateUser = () => {
  let requestPayload = {
    UserName: variables.userLogin,
    Password: variables.userPass
  };
  let frame = {
    m: 0,
    i: 1,
    n: "WebAuthenticateUser",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error != undefined) {
      utils.consoleMessage("WebAuthenticateUser", JSON.stringify(error));
    }
  });
};

//Function Authenticate2FA
let Authenticate2FA = () => {
  let requestPayload = {};
  let frame = {
    m: 0,
    i: 1,
    n: "Authenticate2FA",
    o: JSON.stringify(requestPayload)
  };

  let twoFA = "0000";

  if (variables.sessionToken === "") {
    utils.consoleMessage(frame.n, "Enter with 2FA Code:");

    //Wait PromptInformation
    let stdin2FA = process.openStdin();

    stdin2FA.addListener("data", function(d) {
      twoFA = d.toString().trim();

      if (twoFA != "0000") {
        requestPayload = { Code: twoFA };
        frame.o = JSON.stringify(requestPayload);
        variables.ws.send(JSON.stringify(frame), function ack(error) {
          if (error != undefined) {
            console.log("Authenticate2FA.error: (" + error + ")");
          }
        });
      }
    });
  } else {
    requestPayload = {
      UserId: variables.userId,
      SessionToken: JSON.parse(variables.sessionToken)
    };
    let frame = {
      m: 0,
      i: 1,
      n: "WebAuthenticateUser",
      o: JSON.stringify(requestPayload)
    };

    frame.o = JSON.stringify(requestPayload);
    variables.ws.send(JSON.stringify(frame), function ack(error) {
      if (error != undefined) {
        console.log("Authenticate2FA.error: (" + error + ")");
      }
    });
  }
};

let LogOut = () => {
  //Message Frame
  let requestPayload = {};
  let frame = { m: 0, i: 1, n: "LogOut", o: JSON.stringify(requestPayload) };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("LogOut.error: (" + error + ")");
    }
  });
};

module.exports = {
  Authenticate2FA,
  Connect,
  LogOut,
  WebAuthenticateUser
  //RegisterNewUser
  //ResetPassword
};
