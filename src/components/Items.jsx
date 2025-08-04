

const Items = ({ item }) => {

 

  return (
    <>
      <ul className="list-group list-group-flush">
        {
          <li key={item} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item}</span>
            {/* <button
              className="btn btn-sm "
              onClick={onHandleClicked}
              style={{ backgroundColor: iscart ? "blue" : "Red" }}
            >
              {iscart ?"Add to Cart" : "Remove from Cart" }
            </button> */}
          </li>
        }
      </ul>
    </>
  );
};

//  style={{backgroundColor:iscart?"red":"green"}}
export default Items;
