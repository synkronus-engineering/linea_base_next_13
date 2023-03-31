import type { NextApiRequest, NextApiResponse } from 'next';

const todoList: any[] = [
  {
    id: 1,
    is_complete: false,
    task: 'First Task',
  },
  {
    id: 2,
    is_complete: false,
    task: 'Second Task',
  },
  {
    id: 3,
    is_complete: true,
    task: 'Third Task',
  },
  {
    id: 4,
    is_complete: false,
    task: 'Fourth Task',
  },
  {
    id: 5,
    is_complete: false,
    task: 'First Task',
  },
  {
    id: 6,
    is_complete: false,
    task: 'Second Task',
  },
  {
    id: 7,
    is_complete: true,
    task: 'Third Task',
  },
  {
    id: 8,
    is_complete: false,
    task: 'Fourth Task',
  },
];

const getInfo = (req: NextApiRequest, res: NextApiResponse) => {
  const response = {
    data: [...todoList],
    error: null,
  };

  res.status(200).json(response);
};

export default getInfo;
