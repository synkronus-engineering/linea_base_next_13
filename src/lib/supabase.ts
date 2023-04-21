import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next/types';

export const supabaseClient = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

export const createBrowserClient = () => createBrowserSupabaseClient();

export const createApiServerClient = (
  req: NextApiRequest,
  res: NextApiResponse
) => createServerSupabaseClient({ req, res });
