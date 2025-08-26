import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Decreament, removeFromCart } from "../Features/CartSlice";

const Cart = () => {
  const CartItems = useSelector((state) => state.Slice2.items);
  const dispatch = useDispatch();

  // console.log(CartItems);
const HandleDelete =(item)=>{
  console.log("Item was delete", item);
  dispatch(removeFromCart(item));
  dispatch(Decreament());

};

  return (
    <div className="h-100">
      <div className="cartHeader mt-4">
        <h2>Welcome to your Foods Cart</h2>
      </div>

      <div className=" container CartDetail">
        {CartItems.length == 0 ? (
          <div className="emptyCart">
            <div>
              <img src="../src/assets/reshot-icon.svg" alt="empty-cart-image" />
              <h2>Your Cart is empty</h2>
              <p>
                Explore foods and buy your<br></br>
                favourite items
              </p>
              <Link to="/">
              <button className="btn btn-danger">Explore Foods</button>
              </Link>
            </div>
          </div>
          
        ) : (
          CartItems.map((item) => (
            <div key={item.idMeal}>
              <div className="meals">
                <div className="mealImg">
                  <img src={item.strMealThumb}></img>
                  <p>{item.strMeal}</p>
                  <div className="mealButton">
                    <Link to={`/${item.idMeal}`}>
                      <button>Detail</button>
                    </Link>
                  </div>
                 <a onClick={()=>HandleDelete(item)}><MdDelete className="deleteSvg"/></a>
                </div>
                 
              </div>
            </div>
          ))
        )}
         
      </div>
    </div>
  );
};

export default Cart;
