import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseBody = { data: any; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseBody>
) {
  return res.status(401).json({ data: null, error: 'Unauthorized.' });
}
