//import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import { Menu } from 'primereact/menu';

export default function TopBarAccount({
  handleLogout,
  refToggle,
}: {
  refToggle: any;
  handleLogout?: any;
}) {
  const router = useRouter();

  const items = [
    {
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          command: () => {
            router.push('/account');
          },
        },
        {
          label: 'Order',
          icon: 'pi pi-fw pi-cog',
          command: () => {
            router.push('/account/orders');
          },
        },
        { separator: true },
        {
          label: 'Logout',
          icon: 'pi pi-fw pi-cog',
          command: () => handleLogout(),
        },
      ],
    },
  ];

  return <Menu model={items} popup ref={refToggle} />;
}
