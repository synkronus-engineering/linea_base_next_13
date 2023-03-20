'use client';
import { Card } from 'primereact/card';

const stats = {
  numTodos: 4,
  completed: 2,
};

const ToDoStats = () => {
  return (
    <div className="card h-30rem">
      <h5>Stats ToDo</h5>
      <div className=" flex justify-content-between">
        <Card subTitle="Total Todos" className="md:w-25rem">
          <p className="m-0">{stats.numTodos}</p>
        </Card>
        <Card subTitle="Completed" className="md:w-25rem ml-2">
          <p className="m-0">{stats.completed}</p>
        </Card>
      </div>
    </div>
  );
};

export default ToDoStats;
