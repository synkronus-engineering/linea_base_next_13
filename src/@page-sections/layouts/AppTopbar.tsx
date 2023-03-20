/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from 'primereact/button';

const AppTopbar = () => {
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
        <button type="button" className="p-link layout-topbar-button">
          <i className="pi pi-user"></i>
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
};

export default AppTopbar;
