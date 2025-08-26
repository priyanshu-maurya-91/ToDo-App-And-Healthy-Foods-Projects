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
    <div className="container mealContainer">
      <div className="row mt-5">
        {/* Image Section */}
        <div className="col-md-6 mb-4">
          <img
            src={info?.strMealThumb}
            alt={info?.strMeal}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Info Section */}
        <div className="col-md-6">
          <h2 className="text-danger fw-bold mb-3">Recipe Detail</h2>
          <button className="btn btn-warning mb-3">{info?.strMeal}</button>

          <h4 className="text-primary">Instructions</h4>
          <p className="text-secondary" style={{ textAlign: 'justify' }}>
            {info?.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
