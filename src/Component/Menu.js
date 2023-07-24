import React from "react";
import { menu } from "../Data.js";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        Our<span> Menu</span>
      </h1>
      <div className="box-container">
        {menu.map((item, index) => (
          <div className="box">
            <img src={item.img} alt="" />
            <h3>Tasty and Healthy</h3>
            <div className="price">
              ₹200<span>400</span>
            </div>
            <a href="" className="btn">
              Add to Cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
