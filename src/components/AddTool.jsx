import { useState } from "react";

function AddTool({ onNewItem }) {
  let [ToDoName, setToDoName] = useState("");
  let [Duedate, setDueDate] = useState("");

  const HandleNameChange = (event) => {
    setToDoName(event.target.value);
  };

  const HandleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const onHandleAddClicked = () => {
    if (ToDoName.length ===0 || Duedate.length===0) {
      alert("Please Enter Both Your Inputs.");
    } else {
      onNewItem(ToDoName, Duedate);
      setToDoName("");
      setDueDate("");
    }
  };
  return (
    <div className="container text-start">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Choose Place jaan.."
            value={ToDoName}
            onChange={HandleNameChange}
            required
          ></input>
        </div>
        <div className="col-4">
          <input type="date" value={Duedate} onChange={HandleDateChange} placeholder="Here chooe Date babu.." required/>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={onHandleAddClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTool;
