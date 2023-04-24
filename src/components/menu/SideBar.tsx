import { Sidebar } from 'primereact/sidebar';
import { ReactNode } from 'react';
import { atom, useRecoilState } from 'recoil';

const siteBarToggleAtom = atom({
  key: 'siteBarToggleAtom',
  default: false,
});

export default function SideBarMenu({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useRecoilState(siteBarToggleAtom);

  return (
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
      {children}
    </Sidebar>
  );
}

export { SideBarMenu, siteBarToggleAtom };
