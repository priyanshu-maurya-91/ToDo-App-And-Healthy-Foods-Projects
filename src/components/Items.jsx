import { useState } from "react";

const Items = ({ item ,cartCount ,setCart }) => {

  let [iscart, setIsCart] = useState(true);

  
const onHandleClicked = () => {
    if (iscart) {
      setIsCart(false);
      Increament();
    }else{
      if(!iscart)
      setIsCart(true)
    Decreament();
    }
  };

let Increament=()=>{
  cartCount+=1
  setCart(cartCount);
}
let Decreament=()=>{
  setCart(cartCount-=1)
}
  return (
    <>
      <ul className="ul">
        {
          <li key={item}>
            <span>{item}</span>
            <button
              className="btn"
              onClick={onHandleClicked}
              style={{ backgroundColor: iscart ? "green" : "Red" }}
            >
              {iscart ?"Add to Cart" : "Remove from Cart" }
            </button>
          </li>
        }
      </ul>
    </>
  );
};

//  style={{backgroundColor:iscart?"red":"green"}}
export default Items;
