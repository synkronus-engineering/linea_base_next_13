/* eslint-disable @next/next/no-img-element */
import { AvatarIcon } from '@/components/avatar/AvatarAccount';
import DialogLogin from '@/components/dialogs/DialogLogin';
import TopBarAccount from '@/components/dialogs/TopBarAccount';
import { SnackBarApp } from '@/components/message/SnackBar';
import HasMounted from '@/lib/HasMounted';
import { first, get, has } from 'lodash';

import Link from 'next/link';
import { Button } from 'primereact/button';
import LoginPage from '../login/LoginCmp';
import useLogicDialog from '../login/useLogicDialog';

const AppTopbar = () => {
  const {
    dialogOpen,
    setToggleDialog,
    menuRef,
    userGlobal,
    handleLogout,
    handleUserLog,
  } = useLogicDialog();

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
        <TopBarAccount refToggle={menuRef} handleLogout={handleLogout} />
        <HasMounted
          fallback={
            <i
              className="pi pi-user"
              style={{ fontSize: '1.5rem', marginRight: '10px' }}
            ></i>
          }
        >
          {userGlobal ? (
            <AvatarIcon
              label={first(get(userGlobal, 'user.email', 'U'))}
              clickHandler={(e) => handleUserLog(e)}
            />
          ) : (
            <button
              type="button"
              className="p-link layout-topbar-button"
              onClick={(e) => handleUserLog(e)}
            >
              <i className="pi pi-user"></i>
              <span>Profile</span>
            </button>
          )}
        </HasMounted>
      </div>
      {!userGlobal && !has(userGlobal, 'user') && (
        <DialogLogin dialogOpen={dialogOpen} setToggleDialog={setToggleDialog}>
          <LoginPage />
        </DialogLogin>
      )}
      <SnackBarApp />
    </div>
  );
};

export default AppTopbar;
