'use client';
import {
  ColumnMeta,
  DynamicTable,
} from '@/src/components/dataview/DynamicTable';
import { ConfirmDialog } from '@/src/components/dialogs/DialogConfirm';
import DynamicDialog from '@/src/components/dialogs/DynamicDialog';
import { BlockUIView } from '@/src/components/loader/BlockUI';
import { ITodoList } from '@/src/data/todos_api';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import TodoFormCmp from './TodoFormCmp';
import useTodoLogic from './useTodoLogic';

const ToDoList = () => {
  const {
    data,
    loadingSaveBtn,
    dialogOpen,
    setDialogOpen,
    isLoading,
    handleAction,
  } = useTodoLogic();

  const actionDeleteTmp = (rowData: ITodoList) => (
    <Button
      icon="pi pi-trash"
      tooltip="Delete"
      // placeholder="Right"
      className="p-button-text p-button-danger"
      onClick={() => handleAction(rowData, 'delete')}
    />
  );

  const actionBodyCheckTmp = (rowData: ITodoList) => (
    <Checkbox
      checked={rowData?.is_complete}
      onChange={(e) => handleAction(rowData, 'is_done')}
    ></Checkbox>
  );

  const header = (
    <div className="flex flex-row justify-content-between align-items-center">
      <h5 className="m-0">ToDo List</h5>
      <span className="block mt-2 md:mt-0 p-input-icon-left mr-2">
        <Button
          icon="pi pi-plus"
          rounded
          raised
          tooltip="New"
          // placeholder="left"
          onClick={() => setDialogOpen(true)}
        />
      </span>
    </div>
  );

  const columns: ColumnMeta[] = [
    { field: 'count', header: '#' },
    { field: 'task', header: 'Task' },
    { field: 'is_completed', header: 'Done', body: actionBodyCheckTmp },
    { field: '', header: 'Action', body: actionDeleteTmp },
  ];

  return (
    <div className="card h-30rem">
      <BlockUIView>
        <DynamicTable
          dataSet={data}
          columns={columns}
          isLoading={isLoading}
          header={header}
        />
      </BlockUIView>
      <DynamicDialog
        title="ToDos"
        dialogOpen={dialogOpen}
        setToggleDialog={setDialogOpen}
      >
        <TodoFormCmp handleAction={handleAction} isLoading={loadingSaveBtn} />
      </DynamicDialog>
      <ConfirmDialog />
    </div>
  );
};

export default ToDoList;
