'use client';
import { ColumnMeta, DynamicTable } from '@/components/dataview/DynamicTable';
import { Data, ITodoList, useTodoListData } from '@/data/todos_api';
import { map } from 'lodash';
import { Checkbox } from 'primereact/checkbox';

const ToDoList = () => {
  const { data, isLoading, isError } = useTodoListData<Data>();

  const actionBodyCheckTmp = (rowData: ITodoList) => (
    <Checkbox checked={rowData?.is_complete}></Checkbox>
  );

  const handleCountRows = (data: ITodoList[] | undefined) => {
    return map(data, (item, i) => ({ ...item, count: i + 1 }));
  };

  const columns: ColumnMeta[] = [
    { field: 'count', header: '#' },
    { field: 'task', header: 'Task' },
    { field: 'is_completed', header: 'Done', body: actionBodyCheckTmp },
  ];

  return (
    <div className="card h-30rem">
      <DynamicTable
        dataSet={handleCountRows(data?.data)}
        columns={columns}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ToDoList;
