import { useCallback, useEffect, useState } from "react";
import Mealcards from "./Mealcards";
import ErrorMsg from "./errorMsg";
import Shimar from "./Shimar";

const Input = ({ onHandleKeyDown }) => {
  const [search, setSearch] = useState("");
  const [seacrhItem, setSeacrhItem] = useState([]);
  const [msg, setMsg] = useState();
  const [loading, setLoading] = useState(false);

  const FetchData = useCallback(async (event) => {
    if (search === "") {
      setMsg("Please Fill Something");
      setSeacrhItem([]);
    } else {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setSeacrhItem(data?.meals);
      setSearch((event.target.value = ""));
      setMsg("");
      setLoading(false);
    }
  }, [search , seacrhItem]);

  const HandleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setMsg(<ErrorMsg></ErrorMsg>);
  }, []);

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter healthy food you want to buy"
          onKeyDown={onHandleKeyDown}
          required
          onChange={HandleSearch}
          value={search}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={(event) => FetchData(event)}
        >
          Search
        </button>
      </div>
      {loading ? (
        <Shimar />
      ) : (
        <div>
          <h4 className="msg">{msg}</h4>
          <div className="d-flex justify-content-center align-items-cenetr flex-wrap">
            {/* yadi meri search item api me exits krti hai too usko do, nhi too Data not found msg dedo */}
            {!seacrhItem
              ? "Data Not Found "
              : seacrhItem.map((Mealitem) => (
                  <Mealcards
                    key={Mealitem.idMeal}
                    Mealitem={Mealitem}
                  ></Mealcards>
                ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
