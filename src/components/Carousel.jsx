// import { useState } from "react";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

const Carousel = () => {




  return (
   <div id="carouselExampleAutoplaying" className="carousel slide carouselImg mb-5" data-bs-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active" >
      <img src={first} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item " >
      <img src={second} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" > 
      <img src={third} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
};

export default Carousel;
