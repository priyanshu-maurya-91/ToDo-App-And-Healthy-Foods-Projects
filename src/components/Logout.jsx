import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Features/UserSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.userSlice.user);


  const HandleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
    <div className="logout w-25 mt-5 ">
      <h1>
        Welocome <span className="user_name">{user.name}</span>
      </h1>
      <button
        className="btn btn-primary w-100 py-2"
        onClick={(event) => HandleLogout(event)}
      >
        Logout
      </button>
    </div>
    </div>
  );
};

export default Logout;
