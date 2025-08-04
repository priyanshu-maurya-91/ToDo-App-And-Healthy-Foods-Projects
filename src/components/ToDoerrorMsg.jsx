const ToDoErrorMsg =({TodoList})=>{

    return(
        <>
        {
            TodoList.length === 0 ?  <div className="alert alert-warning text-center fw-semibold mt-3 rounded-3">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Kab Miloge jaan...
        </div> : null
        }
        </>
    )
}


export default ToDoErrorMsg;