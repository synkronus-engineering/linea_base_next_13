import {
  createClientComponentClient,
  createRouteHandlerClient,
  createServerComponentClient,
} from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';

export const supabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const createBrowserClient = () => createClientComponentClient();

export const createApiServerClient = (cookies: any) =>
  createServerComponentClient({ cookies });

// creates supa instance for route handlers (GET, PUT, POST, DELETE...)
export const createServerRouteClient = (cookies: any) =>
  createRouteHandlerClient({ cookies });
