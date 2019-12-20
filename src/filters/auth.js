import LocalStorage from 'ciel-localstorage';

import Permission from '@/store/modules/permission';

export function hasAuth(authList) {
  // console.log('hasAuth', authList);
  // console.log('LocalStorage.get(role)', LocalStorage.get('role'));
  const role = LocalStorage.get('role') || 'visitor';
  // console.log(Permission.checkAuth(authList, role));
  return Permission.checkAuth(authList, role);
}

export function showAuth(role) {
  return Permission.userGroup(role);
}