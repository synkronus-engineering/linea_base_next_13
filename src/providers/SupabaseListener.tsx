'use client';
import { userGlobalSession } from '@/src/context/appContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useSupabaseApp } from './SupabaseProvider';

export default function SupabaseListener() {
  const { supabase } = useSupabaseApp();
  const router = useRouter();
  const setUserGlobalState = useSetRecoilState(userGlobalSession);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUserGlobalState(session as any);
      } else if (event === 'SIGNED_OUT') {
        setUserGlobalState(null);
      }
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return null;
}
