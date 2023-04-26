import type { NextApiRequest, NextApiResponse } from 'next';

const notFound = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(404).json({ data: null, error: 'Not Found' });
};

export default notFound;
