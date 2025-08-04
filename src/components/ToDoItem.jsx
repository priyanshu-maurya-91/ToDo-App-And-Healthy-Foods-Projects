function ToDoItem({ToDoName , ToDoDate, HandleDelete}) {

    // let ToDoName = "Buy Milk"
    // let ToDoDate = "4/10/2023"


    return <div className="container">
        <div className="row p-2 text-start">
            <div className="col-6">
            <span className="fw-semibold">{ToDoName}</span>
            </div>
            <div className="col-4">
                 <small className="text-muted ms-2">{ToDoDate}</small>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-sm btn-outline-danger"onClick={HandleDelete}>Delete</button>
            </div>
        </div>
    </div>
}

export default ToDoItem;