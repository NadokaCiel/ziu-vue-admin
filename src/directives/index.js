import LocalStorage from 'ciel-localstorage';

import Permission from '@/store/modules/permission';

export const auth = {
  inserted: (el, binding) => {
    console.log('binding', binding);
    console.log('binding.value', binding.value);
    console.log('LocalStorage.get(role)', LocalStorage.get('role'));
    const authList = binding.value;
    const role = LocalStorage.get('role') || 'visitor';
    if (!Permission.checkAuth(authList, role)) {
      el.parentNode.removeChild(el);
    }
  },
};

export const auth2 = {
  inserted: (el, binding) => {
    console.log('binding', binding);
    console.log('binding.value', binding.value);
    console.log('LocalStorage.get(role)', LocalStorage.get('role'));
    const authList = binding.value;
    const role = LocalStorage.get('role') || 'visitor';
    if (!Permission.checkAuth(authList, role)) {
      el.parentNode.removeChild(el);
    }
  },
};