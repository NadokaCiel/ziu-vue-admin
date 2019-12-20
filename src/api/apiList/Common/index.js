// 登录
import login from './login';
import logout from './logout';
import reset from './reset';
import system from './system';

const Common = (version) => [
  login(version),
  logout(version),
  reset(version),
  system(version),
];

export default Common;