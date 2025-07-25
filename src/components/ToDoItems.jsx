import ToDoItem from "./ToDoItem";

const ToDoItems = ({TodoList}) => {
  return (
    <>
      {TodoList.map((item) => (
        <ToDoItem key={item.ToDoName} ToDoName={item.ToDoName} ToDoDate={item.DueDate}></ToDoItem>
      ))}
    </>
  );
};

export default ToDoItems;
