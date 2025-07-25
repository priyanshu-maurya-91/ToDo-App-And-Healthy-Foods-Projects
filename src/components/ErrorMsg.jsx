const ErrorMsg =({FoodList})=>{
    return(<>
    {FoodList.length === 0 ? <h1>I am Steel Hungry</h1> : undefined}
    </>)
}

export default ErrorMsg;