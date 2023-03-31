import LayoutWrapper from '@/@page-sections/layouts/LayoutWrapper';
import AppFooter from '@/components/footer/AppFooter';
import '@/styles/demo/Demos.scss';
import '@/styles/layout/layout.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
        <AppFooter />
      </body>
    </html>
  );
}
