import { userGlobalSession } from '@/src/context/appContext';
import { useSupabaseApp } from '@/src/providers/SupabaseProvider';
import { has } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

export default function useLogicDialog() {
  const [dialogOpen, setToggleDialog] = useState<boolean>(false);
  const { supabase } = useSupabaseApp();
  const menuRef = useRef(null as any);
  const userGlobal = useRecoilValue(userGlobalSession);

  const handleLogout = async (e: any) => {
    const { error } = await supabase.auth.signOut();
  };

  const handleUserLog = (e: any) => {
    if (!has(userGlobal, 'user')) setToggleDialog(true);
    else menuRef.current.toggle(e);
  };

  useEffect(() => {
    if (userGlobal && has(userGlobal, 'user') && dialogOpen) {
      setTimeout(() => {
        setToggleDialog(false);
      }, 300);
    }
  }, [userGlobal]);

  return {
    dialogOpen,
    setToggleDialog,
    menuRef,
    userGlobal,
    handleLogout,
    handleUserLog,
  };
}
