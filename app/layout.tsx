import LayoutWrapper from '@/src/@page-sections/layouts/LayoutWrapper';
import AppFooter from '@/src/components/footer/AppFooter';
import { createBrowserClient } from '@/src/lib/supabase';
import AppProviders from '@/src/providers/AppStateProvider';
import { MobileViewListener } from '@/src/providers/MobileViewListener';
import SupabaseListener from '@/src/providers/SupabaseListener';
import SupabaseProvider from '@/src/providers/SupabaseProvider';
import '@/src/styles/demo/Demos.scss';
import '@/src/styles/layout/layout.scss';
import { Analytics } from '@vercel/analytics/react';
import 'nprogress/nprogress.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createBrowserClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body className="layout-wrapper">
        <AppProviders>
          <MobileViewListener />
          <SupabaseProvider session={session}>
            <SupabaseListener />
            <LayoutWrapper>{children}</LayoutWrapper>
            <AppFooter />
          </SupabaseProvider>
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
