import FoodItems from "../components/FoodItems";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
const Home = () => {
  let [FoodList, setFoodList] = useState([]);


  const cartCount = useSelector((state) => state.Slice2.count);

  const onHandleDown = (event) => {
    if (event.key === "Enter") {
      let NewFoodItem = event.target.value;
      setFoodList([...FoodList, NewFoodItem]);
      event.target.value = "";
    }
  };

  return (
    <>
     <Carousel></Carousel>
      <div className="container mt-5 h-100">
        {/* Healthy Foods section */}
        <div className="card p-4 shadow-sm h-100 border-0 rounded-4">
          <div className="d-flex justify-content-between align-items-center mb-3 ">
            <h1 className="h5 fw-bold text-dark mb-0">
              <b>Healthy Foods</b>
            </h1>
            <Link to="/Cart">
            <span className="badge bg-secondary"> <img className="countCartImg" src="../src/assets/cart-icon.svg"></img> Cart: {cartCount}</span>
            </Link>
          </div>
          <Input onHandleKeyDown={onHandleDown} />
          {/* <ErrorMsg FoodList={FoodList} /> */}
          <FoodItems FoodList={FoodList} />
        </div>
      </div>
     
    </>
  );
};

export default Home;
