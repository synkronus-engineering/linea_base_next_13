import secureLocalStorage from 'react-secure-storage';

export const ActionSecureModes = {
  GET: 'get',
  SET: 'set',
  REMOVE: 'remove',
  CLEAR: 'clear',
};

export const secureLocalStore = (key: string, objValue: any, mode: string) => {
  switch (mode) {
    case ActionSecureModes.GET:
      return secureLocalStorage.getItem(key);
    case ActionSecureModes.SET:
      secureLocalStorage.setItem(key, objValue);
      break;
    case ActionSecureModes.REMOVE:
      secureLocalStorage.removeItem(key);
      break;
    case ActionSecureModes.CLEAR:
      secureLocalStorage.clear();
      sessionStorage.clear();
      break;
  }
};
