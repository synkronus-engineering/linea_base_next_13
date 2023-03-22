'use client';
import { ColumnMeta, DynamicTable } from '@/components/dataview/DynamicTable';
import { map } from 'lodash';
import { Checkbox } from 'primereact/checkbox';

const todoList: ITodoList[] = [
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

interface ITodoList {
  id: number;
  is_complete: boolean;
  task: string;
}

const actionBodyCheckTmp = (rowData: ITodoList) => (
  <Checkbox checked={rowData?.is_complete}></Checkbox>
);

const handleCountRows = (data: ITodoList[]) => {
  return map(data, (item, i) => ({ ...item, count: i + 1 }));
};

const ToDoList = () => {
  const columns: ColumnMeta[] = [
    { field: 'count', header: '#' },
    { field: 'task', header: 'Task' },
    { field: 'is_completed', header: 'Done', body: actionBodyCheckTmp },
  ];

  return (
    <div className="card h-30rem">
      <DynamicTable dataSet={handleCountRows(todoList)} columns={columns} />
    </div>
  );
};

export default ToDoList;
