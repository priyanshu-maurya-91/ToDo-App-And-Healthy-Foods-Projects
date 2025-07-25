import AppName from "./components/AppName";
import AddTool from "./components/AddTool";
import ToDoItems from "./components/ToDoItems";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/errorMsg";
import Input from "./components/Input";
import "./App.css";
import { useState } from "react";
import Container from "./components/container";
import ToDoErroMsg from "./components/ToDoerrorMsg";

function App() {
  // let FoodList = [] ;
  let [FoodList, setFoodList] = useState([]);

  // if(FoodItems.length === 0){
  //   return <h1>I am Steel Hungry</h1>
  // }else
  let [TodoList, setTodoList] = useState([
    // {
    //   ToDoName: "Milk Shake",
    //   DueDate: "04/12/2002",
    // },
    // {
    //   ToDoName: "Go To Collage",
    //   DueDate: "04/12/2002",
    // },
    // {
    //   ToDoName: "Love Meetup",
    //   DueDate: "25/06/2025",
    // },
  ]);

  // let TodoList = [
  //   {
  //     ToDoName: "Milk Shake",
  //     DueDate: "04/12/2002",
  //   },
  //   {
  //     ToDoName: "Go To Collage",
  //     DueDate: "04/12/2002",
  //   },
  //   {
  //     ToDoName: "Love Meetup",
  //     DueDate: "25/06/2025",
  //   },
  // ];

  const onHandleDown = (event) => {
    if (event.key === "Enter") {
      let NewFoodItem = event.target.value;
      setFoodList([...FoodList, NewFoodItem]);
      event.target.value = "";
    }
  };

  let [cart, setCart] = useState(0);

  const HandleNewItem = (ToDoName, DueDate) => {
    // console.log(`Item Was ${ToDoName} and ${DueDate} Added`);
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
    <>
      <Container>
        <div className="header">
          <h1>Healthy Foods</h1>
          <h2>Cart:{cart}</h2>
        </div>
        <Input onHandleKeyDown={onHandleDown}></Input>
        <ErrorMsg FoodList={FoodList}></ErrorMsg>
        <FoodItems
          FoodList={FoodList}
          cartCount={cart}
          setCart={setCart}
        ></FoodItems>
      </Container>

      <Container>
        <center className="todo-container">
          <AppName></AppName>
          <AddTool onNewItem={HandleNewItem}></AddTool>
          <ToDoItems TodoList={TodoList}></ToDoItems>
          <ToDoErroMsg TodoList={TodoList}></ToDoErroMsg>
        </center>
      </Container>
    </>
  );
}

export default App;
