import React from "react";
import { product } from "../Data";
import { BiSolidCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
const Product = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        Our<span> Products</span>
      </h1>
      <div className="box-container">
        {product.map((item, index) => (
          <div className="box">
            <div className="icons">
              <div className="cart">
                <a href="#">
                  <BiSolidCart></BiSolidCart>
                </a>
              </div>
              <div className="heart">
                <a href="#">
                  <BiHeart></BiHeart>
                </a>
              </div>
              <div className="eye">
                <a href="#">
                  <BsEyeFill></BsEyeFill>
                </a>
              </div>
            </div>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <h3>Fresh coffee</h3>
              <div className="stars">
                <a href="#">
                  <BsStarFill></BsStarFill>
                </a>
                <a href="#">
                  <BsStarFill></BsStarFill>
                </a>
                <a href="#">
                  <BsStarFill></BsStarFill>
                </a>
                <a href="#">
                  <BsStarFill></BsStarFill>
                </a>
                <a href="#">
                  <BsStarHalf></BsStarHalf>
                </a>
              </div>
              <div className="price">
                ₹200<span>₹400</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
