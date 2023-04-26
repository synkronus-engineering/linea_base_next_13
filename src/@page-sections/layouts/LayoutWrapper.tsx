'use client';
import '@/src/styles/nprogress.css';
import { usePathname, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';
import { ReactNode, useEffect } from 'react';
import AppTopbar from './AppTopbar';

nProgress.configure({ showSpinner: false });

type WrapperProps = { children: ReactNode };

const LayoutWrapper = ({ children }: WrapperProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    (() => {
      nProgress.start();
      setTimeout(() => {
        nProgress.done();
      }, 500);
    })();
  }, [pathname, searchParams]);

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
