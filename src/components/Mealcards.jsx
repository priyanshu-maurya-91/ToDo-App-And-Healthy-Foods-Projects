import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart , Decreament, Inceament, removeFromCart } from "../Features/CartSlice";
import { Link } from "react-router-dom";

const Mealcards = ({ Mealitem }) => {
  let [iscart, setIsCart] = useState(true);
  const dispatch = useDispatch();

  const onHandleClicked = () => {
    if (iscart) {
      setIsCart(false);
       dispatch(addToCart(Mealitem));
       dispatch(Inceament());
     
    } else {
      if (!iscart) setIsCart(true);
    dispatch(removeFromCart(Mealitem));
    dispatch(Decreament());
    }
  };
  return (
    <div className="meals">
      <div className="mealImg">
        <img src={Mealitem.strMealThumb}></img>
        <p>{Mealitem.strMeal}</p>
        <div className="mealButton">
          <Link to={`/${Mealitem.idMeal}`}>
            <button>Recipe</button>
          </Link>
          <button
            onClick={onHandleClicked}
            style={{ backgroundColor: iscart ? "blue" : "Red" }}
            >
            {iscart ? "Add to Cart" : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mealcards;
