// INPUTS: Env, Used Id, Token, Developer Name, Redirect URL

const PHYLLO_CONNECT_URL = {
  sandbox: "http://localhost:3000/introscreen",
  production: "http://localhost:3000/introscreen",
};

const validateClientConnectParams = async (params) => {
  const errors = {};
  if (!params.env || !["production", "sandbox"].includes(params.env)) {
    errors.env = "Please Provide  Valid Environment";
  }
  if (!params.userId) {
    errors.userId = "Please Provide a Valid Phyllo User Id";
  }
  if (!params.token) {
    errors.token = "Please Provide a Valid Phyllo Token";
  }
  if (!params.appName) {
    errors.appName = "Please Provide a Valid App Name";
  }
  return { errors, isValid: Object.keys(errors).length };
};
const clientConnect = async (
  env,
  userId,
  token,
  appName,
  workPlatformId = null
) => {
  //TODO: VALIDATE ALL PARAMS
  try {
    var workPlatformIdQueryParam = `workPlatformId=${workPlatformId}&`;
    if (
      workPlatformId === null ||
      workPlatformId === undefined ||
      workPlatformId === ""
    ) {
      workPlatformIdQueryParam = "";
    }
    var phylloConnectURL = `${PHYLLO_CONNECT_URL[env]}?userId=${userId}&appName=${appName}&${workPlatformIdQueryParam}redirectURL=${window.location.href}&token=${token}&env=${env}`;
    window.location.replace(phylloConnectURL);
  } catch (err) {
    throw err;
  }
};
