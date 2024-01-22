/* eslint-disable @next/next/no-img-element */
import { AvatarIcon } from '@/src/components/avatar/AvatarAccount';
import DialogLogin from '@/src/components/dialogs/DialogLogin';
import TopBarAccount from '@/src/components/dialogs/TopBarAccount';
import { SnackBarApp } from '@/src/components/message/SnackBar';
import HasMounted from '@/src/lib/HasMounted';
import { first, get, has } from 'lodash';

import ImageElm from '@/src/components/image/ImageElm';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
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
  const pathname = usePathname();

  return (
    <div className="layout-topbar">
      <Link href="/">
        <div className="layout-topbar-logo">
          <ImageElm
            src={`/assets/layout/logo-dark.svg`}
            width="47.22px"
            height={'35px'}
            alt="logo"
          />
          <span>SAKAI</span>
        </div>
      </Link>

      <Link
        href="/products"
        className={classNames('p-button p-button-link p-ripple', {
          underline: pathname === '/products',
        })}
      >
        Products
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
