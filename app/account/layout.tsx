import ProfileLayout from '@/src/@page-sections/layouts/ProfileLayout';
import { ReactNode } from 'react';

type AccountProps = { children: ReactNode };

const AccountLayout = ({ children }: AccountProps) => {
  return (
    <div className="surface-section px-4 py-2 md:px-4 lg:px-4">
      <div className="text-700 font-bold text-2xl text-start">Account</div>
      <div
        className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left w-full"
        role="separator"
      ></div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div
          className="w-full  border-round surface-border surface-section mt-3 lg:mt-0  h-full"
          style={{ minHeight: '25rem' }}
        >
          <ProfileLayout>{children}</ProfileLayout>
        </div>
      </div>
    </div>
  );
};

export default AccountLayout;
