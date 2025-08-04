import Items from "./Items";


const FoodItems =({FoodList})=>{

 

    return(
        <>
        {
        FoodList.map((item)=><Items key={item} item={item}></Items>)
      }
        </>
    )
}



export default FoodItems;