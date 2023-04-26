'use client';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

type WrapperProps = { children: ReactNode };

const AppProviders = ({ children }: WrapperProps) => {
  return <RecoilRoot> {children} </RecoilRoot>;
};

export default AppProviders;
