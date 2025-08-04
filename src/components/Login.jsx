import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Features/UserSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const HandleSubmit = (event) => {
    event.preventDefault();

    if ((name.length && email.length && password.length !== 0)) {
      dispatch(
        login({
          name: name,
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }else{
        alert("Please fill all fields before submitting!")
    }
  };

  return (
    <div className="login form-signin m-auto mt-5 mb-5">
      <form onSubmit={(event) => HandleSubmit(event)}>
        <img
          className="mb-4"
          src="../src/assets/Logo.png"
          alt="Logo Image"
          width="72"
          height="57"
          ></img>
        <h1 className="h3 mb-3 fw-normal">Login Here</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="checkDefault"
          />
          <label className="form-check-label" htmlFor="checkDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Submit
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
      </form>
    </div>
  );
};

export default Login;
