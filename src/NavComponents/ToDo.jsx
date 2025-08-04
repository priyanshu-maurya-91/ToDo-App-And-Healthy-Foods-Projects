import AppName from "../components/AppName";
import AddTool from "../components/AddTool";
import ToDoItems from "../components/ToDoItems";
import ToDoErrorMsg from "../components/ToDoerrorMsg";
import { useState } from "react";

const ToDo = () => {
  let [TodoList, setTodoList] = useState([]);
  const HandleNewItem = (ToDoName, DueDate) => {
    let NewToDoList = [
      ...TodoList,
      {
        ToDoName: ToDoName,
        DueDate: DueDate,
      },
    ];
    setTodoList(NewToDoList);
  };

  return (
    <div className="container mt-5 h-100">
      <div className="row g-4">
        <div className="col-12 col-md-6">
          {/* ToDo React App section */}
          <div className="card shadow-sm p-4 border-0 rounded-4 h-100">
            <center>
              <AppName />
              <AddTool onNewItem={HandleNewItem} />
              <ToDoItems TodoList={TodoList} />
              <ToDoErrorMsg TodoList={TodoList} />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
