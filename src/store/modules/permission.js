const visitor = [
  'visitor',
];

const user = [
  ...visitor,
  'user',
];

const admin = [
  ...user,
  'admin',
];

const superadmin = [
  ...admin,
  'superadmin',
];

const total = [
  ...superadmin,
];

const arrToMap = (arr) => {
  const map = {};
  arr.forEach(key => {
    map[key] = true;
  });
  return map;
};

const userGroup = {
  visitor: arrToMap(visitor),
  user: arrToMap(user),
  admin: arrToMap(admin),
  superadmin: arrToMap(superadmin),
};

const checkAuth = (authArr, role) => {
  if (!userGroup[role]) return false;
  let flag = true;
  authArr.forEach(auth => {
    if (!userGroup[role][auth]) {
      flag = false;
    }
  });
  return flag;
};


const Permission = {
  store: {
    state: {
      userGroup,
      total: arrToMap(total),
    },
  },
  userGroup,
  checkAuth,
};

export default Permission;