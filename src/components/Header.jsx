import { useSelector } from "react-redux";
import { NavLink } from "react-router";

function Header() {

 const user = useSelector((state) =>state.userSlice.user)
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top shadow">
      <div className="container navarea">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="./src/assets/Logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="me-2"
          />
          <span className="fw-bold text-md">Healthy Foods</span>
        </NavLink>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav NavLinks */}
        <div
          className="collapse navbar-collapse animate__animated animate__fadeInDown"
          id="navbarContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">
               {!user ? "Login" : "Logout"} 
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
