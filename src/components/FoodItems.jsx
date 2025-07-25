import Items from "./Items";


const FoodItems =({FoodList , cartCount ,setCart})=>{

 

    return(
        <>
        {
        FoodList.map((item)=><Items key={item} item={item} cartCount={cartCount} setCart={setCart}></Items>)
      }
        </>
    )
}



export default FoodItems;