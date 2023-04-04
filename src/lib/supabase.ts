import {
  createBrowserSupabaseClient,
  createServerSupabaseClient,
} from '@supabase/auth-helpers-nextjs';
import { NextApiRequest, NextApiResponse } from 'next/types';

export const createBrowserClient = () => createBrowserSupabaseClient();

export const createApiServerClient = (
  req: NextApiRequest,
  res: NextApiResponse
) => createServerSupabaseClient({ req, res });
