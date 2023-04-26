import { BlockUI } from 'primereact/blockui';
import { ReactNode } from 'react';
import { atom, useRecoilValue } from 'recoil';

const blockUiAtom = atom({
  key: 'blockUiAtom',
  default: false,
});

const BlockUIView = ({ children }: { children: ReactNode }) => {
  const blocked = useRecoilValue(blockUiAtom);

  return (
    <BlockUI blocked={blocked} style={{ zIndex: '10' }}>
      {children}
    </BlockUI>
  );
};

export { blockUiAtom, BlockUIView };
