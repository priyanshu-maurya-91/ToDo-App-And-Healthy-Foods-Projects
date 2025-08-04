import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo = () => {
  const { MealId } = useParams();
  const [info, setInfo] = useState();
//   console.log(MealId);



  useEffect(() => {
    const FetchedInfo = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`
      );
      const data = await response.json();
      setInfo(data?.meals[0]);
    };
    if (info != "") {
      FetchedInfo();
    }
  },[]);

//   console.log(info);
 

  return (
    <div className="mealInfo">
      <img src={info?.strMealThumb} alt="" />
      <div className="info mt-5">
        <h1>Recipe Detail</h1>
        <button>{info?.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info?.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfo;
