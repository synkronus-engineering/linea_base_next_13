import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

type TodoFormProps = {
  isLoading?: boolean;
  handleAction: (formValue: any, action: string) => void;
};

const TodoFormCmp = ({ isLoading, handleAction }: TodoFormProps) => {
  const [formValue, setFormValue] = useState({ task: '', is_complete: false });

  return (
    <div className="flex grid">
      <div className="field col-8">
        <label htmlFor="price">Task</label>
        <br />
        <InputText
          id="task"
          value={formValue.task}
          onChange={(e) => {
            setFormValue({ ...formValue, task: e.target.value });
          }}
        />
      </div>
      <div className="field col-4">
        <label htmlFor="quantity">Quantity</label>
        <br />
        <InputSwitch
          className="mt:20"
          id="is_complete"
          name="Is Done"
          checked={formValue.is_complete}
          onChange={(e) => {
            setFormValue({ ...formValue, is_complete: e.value as any });
          }}
        />
      </div>
      <div className="flex col-12 justify-content-end">
        <Button
          label="Cancel"
          icon="pi pi-times"
          onClick={() => {
            setFormValue({ task: '', is_complete: false });
            handleAction(null, 'cancel');
          }}
          className="p-button-text sm"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          onClick={() => handleAction(formValue, 'new')}
          autoFocus
          className="p-button-text sm"
          loading={isLoading || false}
        />
      </div>
    </div>
  );
};

export default TodoFormCmp;
