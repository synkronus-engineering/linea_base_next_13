import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = {
    data: [{ id: 1, task: 'First Task', is_completed: false }],
    error: null,
  };

  res.status(200).json(response);
}
