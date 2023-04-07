/* eslint-disable @next/next/no-img-element */
import DialogLogin from '@/components/dialogs/DialogLogin';
import { useSupabaseApp } from '@/providers/SupabaseProvider';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { useState } from 'react';
import LoginPage from '../login/LoginCmp';

const AppTopbar = () => {
  const [dialogOpen, setToggleDialog] = useState<boolean>(false);
  const { supabase } = useSupabaseApp();

  const handleUserLog = (e: any) => {
    setToggleDialog(true);
  };

  return (
    <div className="layout-topbar">
      <Link href="/">
        <div className="layout-topbar-logo">
          <img
            src={`/assets/layout/logo-dark.svg`}
            width="47.22px"
            height={'35px'}
            alt="logo"
          />
          <span>SAKAI</span>
        </div>
      </Link>

      <Link href="/">
        <Button label="Home" className="p-button-link p-ripple" />
      </Link>

      <Link href="/todos">
        <Button label="ToDos" className="p-button-link p-ripple" />
      </Link>

      <div className="layout-topbar-menu">
        <button
          type="button"
          className="p-link layout-topbar-button"
          onClick={(e) => handleUserLog(e)}
        >
          <i className="pi pi-user"></i>
          <span>Profile</span>
        </button>
      </div>
      <DialogLogin dialogOpen={dialogOpen} setToggleDialog={setToggleDialog}>
        <LoginPage />
      </DialogLogin>
    </div>
  );
};

export default AppTopbar;
