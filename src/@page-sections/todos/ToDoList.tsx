/* eslint-disable no-case-declarations */
'use client';
import { ColumnMeta, DynamicTable } from '@/components/dataview/DynamicTable';
import DynamicDialog from '@/components/dialogs/DynamicDialog';
import { userGlobalSession } from '@/context/appContext';
import { addTodo, Data, ITodoList, useTodoListData } from '@/data/todos_api';
import { get, map } from 'lodash';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import TodoFormCmp from './TodoFormCmp';

const ToDoList = () => {
  const { data, isLoading, isError } = useTodoListData<Data>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const userGlobal = useRecoilValue(userGlobalSession);

  const actionBodyCheckTmp = (rowData: ITodoList) => (
    <Checkbox checked={rowData?.is_complete}></Checkbox>
  );

  const handleCountRows = (data: ITodoList[] | undefined) => {
    return map(data, (item, i) => ({ ...item, count: i + 1 }));
  };

  const handleAction = async (item: any, action: string) => {
    switch (action) {
      case 'new':
        console.log('new item ***', item, action);
        const resultOp = await addTodo({
          ...item,
          user_id: get(userGlobal, 'user.id', null),
        });
        console.log('resultOp ***', resultOp);
        break;

      default:
        break;
    }
  };

  const header = (
    <div className="flex flex-row justify-content-between align-items-center">
      <h5 className="m-0">ToDo List</h5>
      <span className="block mt-2 md:mt-0 p-input-icon-left mr-2">
        <Button
          icon="pi pi-plus"
          rounded
          raised
          tooltip="New"
          placeholder="left"
          onClick={() => setDialogOpen(true)}
        />
      </span>
    </div>
  );

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
        header={header}
      />
      <DynamicDialog
        title="ToDos"
        dialogOpen={dialogOpen}
        setToggleDialog={setDialogOpen}
      >
        <TodoFormCmp handleAction={handleAction} />
      </DynamicDialog>
    </div>
  );
};

export default ToDoList;
