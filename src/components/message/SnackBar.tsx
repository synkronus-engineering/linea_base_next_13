'use client';
import { Toast } from 'primereact/toast';
import { useEffect, useRef } from 'react';
import { atom, useRecoilState } from 'recoil';

type ToastType = {
  show: boolean;
  type: 'success' | 'info' | 'warn' | 'error';
  msg: string;
  title?: string;
};

const toggleSnackBar = atom<ToastType>({
  key: 'toggleSnackBarAtom',
  default: { show: false, msg: '', type: 'success', title: 'Confirm Update' },
});

const SnackBarApp = () => {
  const [snackbarState, setSnackbarState] = useRecoilState(toggleSnackBar);
  const toast = useRef(null as any);

  useEffect(() => {
    if (snackbarState.show && snackbarState.msg !== '') {
      toast.current.show({
        severity: snackbarState.type,
        summary: snackbarState.title,
        detail: snackbarState.msg,
        life: 3000,
      });
      setSnackbarState({ show: false, msg: '', type: 'success' });
    }
  }, [snackbarState]);

  return <Toast ref={toast} position="bottom-center" />;
};

export { SnackBarApp, toggleSnackBar };
