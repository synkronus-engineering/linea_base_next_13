import { ActionSecureModes, secureLocalStore } from '@/src/lib/storage';
import { Session } from '@supabase/supabase-js';
import { has, isNil } from 'lodash';
import { DefaultValue, atom, selector } from 'recoil';
import { getProfileInfo_ClientEndPoint } from '../data/profile_api';
import { REST_VERBS } from '../lib/res_definitions';

type MaybeSession = Session | null;

const userGlobalSession = atom({
  key: 'userGlobalSessionAtom',
  default: null as MaybeSession,
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      const initUsrSsn = secureLocalStore(
        'usr_rcl_ssn',
        null,
        ActionSecureModes.GET
      ) as any;
      if (has(initUsrSsn, 'user')) setSelf(initUsrSsn as MaybeSession);
      else setSelf(new DefaultValue());
      onSet((newSsn) =>
        secureLocalStore('usr_rcl_ssn', newSsn, ActionSecureModes.SET)
      );
    },
  ],
});

const profileInfoSlctr = selector({
  key: 'profileInfoSlctr',
  get: async ({ get }) => {
    const userSession = get(userGlobalSession);
    if (has(userSession, 'user.id')) {
      const { data: dtProfile, error: errProfile } =
        (await getProfileInfo_ClientEndPoint(
          REST_VERBS.POST,
          'info',
          null
        )) as any;
      return dtProfile && !errProfile ? dtProfile : {};
    }
    return null;
  },
});

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const usrSsnCookieAtom = atom({
  key: 'usrSsnCookieAtom',
  default: null,
  effects_UNSTABLE: [
    ({ setSelf }) => {
      const initUsrSsn = secureLocalStore(
        'usr_anon_ssn_cookie',
        null,
        ActionSecureModes.GET
      ) as any;
      console.log('initUsrSsn ***', initUsrSsn, !isNil(initUsrSsn));
      if (!isNil(initUsrSsn)) setSelf(initUsrSsn);
      else {
        const newSsn = generateUUID();
        setSelf(newSsn as any);
        secureLocalStore('usr_anon_ssn_cookie', newSsn, ActionSecureModes.SET);
      }
    },
  ],
});

export { profileInfoSlctr, userGlobalSession, usrSsnCookieAtom };
