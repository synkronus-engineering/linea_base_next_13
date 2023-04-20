'use client';
import { get } from 'lodash';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { atom, useRecoilState } from 'recoil';

const toggleConfirmDialog = atom({
  key: 'toggleConfirmDialogAtom',
  default: {
    show: false,
    action: false,
    data: null,
    loading: false,
    caller: '',
  },
});

const ConfirmDialog = () => {
  const [confirmData, setDialogState] = useRecoilState(toggleConfirmDialog);

  const footerContent = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={() =>
          setDialogState({
            show: false,
            action: false,
            data: null,
            loading: false,
            caller: '',
          })
        }
      />
      <Button
        label="Confirm"
        icon="pi pi-check"
        autoFocus
        className="p-button-text"
        loading={confirmData.loading}
        onClick={() =>
          setDialogState({ ...confirmData, action: true, loading: true })
        }
      />
    </div>
  );

  return (
    <Dialog
      header="Confirm Delete"
      visible={confirmData.show}
      style={{ width: '30vw' }}
      breakpoints={{ '960px': '30vw', '641px': '95vw' }}
      footer={footerContent}
      onHide={() =>
        setDialogState({
          show: false,
          action: false,
          data: null,
          loading: false,
          caller: '',
        })
      }
    >
      <p>Task: {`${get(confirmData, 'data.task', '')}`}</p>
    </Dialog>
  );
};

export { ConfirmDialog, toggleConfirmDialog };
