'use client';
import { getTodoStatsSelector } from '@/src/data/todos_api';
import { Card } from 'primereact/card';
import { useRecoilValue } from 'recoil';

const ToDoStatsCmp = () => {
  const stats = useRecoilValue(getTodoStatsSelector);
  return (
    <div className="card h-30rem">
      <h5>Stats ToDo</h5>
      <div className="grid">
        <Card subTitle="Total Todos" className="col-12 md:col-6">
          <p className="m-0">{stats.numTodos}</p>
        </Card>
        <Card subTitle="Completed" className="col-12 md:col-6">
          <p className="m-0">{stats.completed}</p>
        </Card>
      </div>
    </div>
  );
};

export default ToDoStatsCmp;
