'use client';
import { map } from 'lodash';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

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
];

interface ITodoList {
  id: number;
  is_complete: boolean;
  task: string;
}

interface ColumnMeta {
  field: string;
  header: string;
  body?: any;
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
      <DataTable
        value={handleCountRows(todoList)}
        tableStyle={{ minWidth: '50rem' }}
      >
        {map(columns, (col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            body={col?.body}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default ToDoList;
