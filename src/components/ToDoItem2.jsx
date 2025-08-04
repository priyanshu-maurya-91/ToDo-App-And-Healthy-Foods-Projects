function ToDoItem2() {

    let ToDoName = "Go TO College"
    let ToDoDate = "4/10/2023"


    return <div className="container">
        <div className="row p-2 text-start">
            <div className="col-6">
                <h3>{ToDoName}</h3>
            </div>
            <div className="col-4">
                <h3>{ToDoDate}</h3>
            </div>
            <div className="col-2">
                <button type="button" class="btn btn-danger" >Delete</button>
            </div>
        </div>
    </div>
}

export default ToDoItem2;