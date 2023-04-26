import ToDoList from '@/src/@page-sections/todos/ToDoList';
import ToDoStatsCmp from '@/src/@page-sections/todos/ToDoStats';

const Page = () => {
  return (
    <div className="grid">
      <div className="col-12 md:col-5">
        <ToDoStatsCmp />
      </div>
      <div className="col-12 md:col-7">
        <ToDoList />
      </div>
    </div>
  );
};

export default Page;
