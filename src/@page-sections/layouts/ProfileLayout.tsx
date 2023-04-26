'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type ProfileProps = { children: ReactNode };

const ProfileLayout = ({ children }: ProfileProps) => {
  const pathName = usePathname();

  return (
    <div className="p-fluid flex flex-column lg:flex-row">
      <ul className="list-none m-0 p-0 flex flex-row lg:flex-column justify-content-start lg:justify-content-start mb-5 lg:mb-0">
        <li>
          <Link href="/account">
            <div
              className={`lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors ${
                pathName?.includes('/orders') ? '' : 'surface-200'
              }`}
            >
              <i className="pi pi-user md:mr-2 text-700"></i>
              <span className="font-medium hidden md:block text-800">
                Profile
              </span>
              <span
                role="presentation"
                className="p-ink"
                style={{
                  height: '240px',
                  width: '240px',
                  top: '-91.7891px',
                  left: '-44.4922px',
                }}
              ></span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/account/orders">
            <div
              className={`lg:w-15rem flex align-items-center cursor-pointer p-3 border-round hover:surface-200 transition-duration-150 transition-colors ${
                pathName?.includes('/orders') ? 'surface-200' : ''
              }`}
            >
              <i className="pi pi-cog md:mr-2 text-600"></i>
              <span className="font-medium hidden md:block text-700">
                Orders
              </span>
              <span
                role="presentation"
                className="p-ink"
                style={{
                  height: '240px',
                  width: '240px',
                  top: '-94.7578px',
                  left: '-39.4922px',
                }}
              ></span>
            </div>
          </Link>
        </li>
      </ul>
      <div className=" surface-section shadow-2 border-round flex-auto xl:ml-5">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
