import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { ReactNode } from 'react';

type DiagLoginProps = {
  children: ReactNode;
  dialogOpen: boolean;
  setToggleDialog: (prm: boolean) => void;
};

export default function DialogLogin({
  children,
  dialogOpen,
  setToggleDialog,
}: DiagLoginProps) {
  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => setToggleDialog(false)}
        className="p-button-text"
      />
    </div>
  );

  return (
    <Dialog
      header="Account"
      visible={dialogOpen}
      style={{ width: '30vw' }}
      breakpoints={{ '960px': '30vw', '641px': '95vw' }}
      onHide={() => setToggleDialog(false)}
      footer={footerContent}
    >
      {children}
    </Dialog>
  );
}
