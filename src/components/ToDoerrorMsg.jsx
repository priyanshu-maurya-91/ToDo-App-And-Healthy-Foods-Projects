const ToDoErroMsg =({TodoList})=>{

    return(
        <>
        {
            TodoList.length === 0 ? <h1>Kab Miloge Jaan.....</h1> : null
        }
        </>
    )
}


export default ToDoErroMsg;