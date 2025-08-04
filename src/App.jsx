import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { Route, Routes } from "react-router";
import Home from "./NavComponents/Home";
import About from "./NavComponents/About";
import Cart from "./NavComponents/Cart";
import ToDo from "./NavComponents/ToDo";
import { useSelector } from "react-redux";
import MealInfo from "./components/MealInfo";

function App() {
     const user = useSelector((state) => state.userSlice.user);

  return (
    <>
   
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Cart" element={<Cart></Cart>}></Route>
      <Route path="/ToDo" element={<ToDo></ToDo>}></Route>
      <Route path="/Login" element={user ? <Logout/> : <Login/>}></Route>
      <Route path="/:MealId" element={<MealInfo/>}></Route>
    </Routes>
   
 <Footer></Footer> 
    
    </>
  );
}

export default App;
