'use client';
import { Dialog } from 'primereact/dialog';
import { ReactNode } from 'react';

type DiagLoginProps = {
  children: ReactNode;
  dialogOpen: boolean;
  title: string;
  setToggleDialog: (prm: boolean) => void;
};

export default function DynamicDialog({
  children,
  dialogOpen,
  setToggleDialog,
  title,
}: DiagLoginProps) {
  return (
    <Dialog
      header={title}
      visible={dialogOpen}
      style={{ width: '30vw' }}
      breakpoints={{ '960px': '30vw', '641px': '95vw' }}
      onHide={() => setToggleDialog(false)}
    >
      {children}
    </Dialog>
  );
}
