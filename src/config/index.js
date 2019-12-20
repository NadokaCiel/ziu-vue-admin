const data = process.env.ENV_DATA;
const config = {
  env: data.PRJ_ENV,
  appName: data.APP_TITLE,
  appId: data.APP_ID,
  apiKey: data.API_KEY,
  apiCode: data.API_CODE,
  domain: data.DOMAIN,
};
export default config;