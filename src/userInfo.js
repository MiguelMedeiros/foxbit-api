const variables = require("./variables");

let GetUserInfo = () => {
  //Message Frame
  let requestPayload = {
    UserName: variables.userLogin,
    Password: variables.userPass
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetUserInfo",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetUserInfo.error: (" + error + ")");
    }
  });
};

let GetUserConfig = () => {
  //Message Frame
  let requestPayload = {
    UserName: variables.userLogin,
    UserId: parseInt(variables.userId)
  };
  let frame = {
    m: 0,
    i: 1,
    n: "GetUserConfig",
    o: JSON.stringify(requestPayload)
  };
  console.log(frame);
  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetUserInfo.error: (" + error + ")");
    }
  });
};

let GetUserPermissions = () => {
  //Message Frame
  let requestPayload = { UserId: parseInt(variables.userId) };
  let frame = {
    m: 0,
    i: 1,
    n: "GetUserPermissions",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetUserPermissions.error: (" + error + ")");
    }
  });
};

let GetAvailablePermissionList = () => {
  //Message Frame
  let requestPayload = {};
  let frame = {
    m: 0,
    i: 1,
    n: "GetAvailablePermissionList",
    o: JSON.stringify(requestPayload)
  };

  variables.ws.send(JSON.stringify(frame), function ack(error) {
    if (error) {
      console.log("GetAvailablePermissionList.error: (" + error + ")");
    }
  });
};

module.exports = {
  GetAvailablePermissionList,
  GetUserConfig,
  GetUserInfo,
  GetUserPermissions
  //RemoveUserConfig,
  //SetUserConfig,
  //SetUserInfo
};
