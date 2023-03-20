'use client';
import { ReactNode } from 'react';
import AppTopbar from './AppTopbar';

type WrapperProps = { children: ReactNode };

const LayoutWrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <AppTopbar />
      <div className="layout-main-container">
        <div className="layout-main">{children}</div>
      </div>
    </>
  );
};

export default LayoutWrapper;
