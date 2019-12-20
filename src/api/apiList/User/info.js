export default function(version = '') {
  return {
    name: 'userInfo',
    interval: 2000, // 每隔2秒重试一次
    retryTimes: 3, // 重试3次
    apiName: `${version}/api/user/{id}`, // 接口pathurl
    desc: '', // 接口描述
    method: 'GET',
    params: {
      get: [{
        param: 'sign',
        isNeed: 1,
      }, {
        param: 'token',
        isNeed: 1,
      }],
    },
    // 不需要参数签名的参数字段
    signKeys: [],
  };
}