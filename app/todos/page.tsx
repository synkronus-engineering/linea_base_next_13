import ToDoList from '@/@page-sections/todos/ToDoList';
import ToDoStats from '@/@page-sections/todos/ToDoStats';

const Page = () => {
  return (
    <div className="grid">
      <div className="col-12 md:col-5">
        <ToDoStats />
      </div>
      <div className="col-12 md:col-7">
        <ToDoList />
      </div>
    </div>
  );
};

export default Page;
