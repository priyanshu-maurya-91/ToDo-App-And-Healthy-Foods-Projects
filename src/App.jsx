import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Route, Routes } from "react-router";
import Home from "./NavComponents/Home";
import About from "./NavComponents/About";
import Cart from "./NavComponents/Cart";
import { useSelector } from "react-redux";
import MealInfo from "./components/MealInfo";
import ProtectedRoutes from "./NavComponents/ProtectedRoutes";

function App() {
     const user = useSelector((state) => state.userSlice.user);

  return (
    <>
   
    <Header></Header>
    <Routes>
       <Route path="/Login" element={user ? <Logout/> : <Login/>}></Route>

      <Route path="/" element={<ProtectedRoutes>
        <Home></Home>
      </ProtectedRoutes>}></Route>
      <Route path="/About" element={<ProtectedRoutes>
        <About></About>
      </ProtectedRoutes>}></Route>
      <Route path="/Cart" element={<ProtectedRoutes>
        <Cart></Cart>
      </ProtectedRoutes>}></Route>
      <Route path="/:MealId" element={<ProtectedRoutes>
        <MealInfo/>
      </ProtectedRoutes>}></Route>
    </Routes>
   
 <Footer></Footer> 
    
    </>
  );
}

export default App;
