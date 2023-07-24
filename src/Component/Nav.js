import React, { useRef } from "react";
import logo from "../Component/images/logo.png";
import { BiSearchAlt } from "react-icons/bi";
import { BiSolidCart } from "react-icons/bi";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaTimes } from "react-icons/fa";
import { cart } from "../Data";
const Nav = () => {
  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const cartRef = useRef();
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
  const navbarRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#Home">Home</a>
          <a href="#About Us">About Us</a>
          <a href="#Menu">Menu</a>
          <a href="#Products">Products</a>
          <a href="#Contact">Contact</a>
        </nav>
        <div className="icons">
          <div className="search" id="search-btn" onClick={searchHandler}>
            <a href="#">
              <BiSearchAlt></BiSearchAlt>
            </a>
          </div>
          <div className="cart" onClick={cartHandler}>
            <a href="#">
              <BiSolidCart></BiSolidCart>
            </a>
          </div>
          <div className="bar">
            <a href="#" id="menu-btn" onClick={navbarHandler}>
              <HiMiniBars3></HiMiniBars3>
            </a>
          </div>
        </div>
        <div className="search-form " ref={searchRef}>
          <input type="search" id="search-box" placeholder="Search here...." />
          <label htmlFor="search-box" className="search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="cross">
                <a href="#" id="times">
                  <FaTimes></FaTimes>
                </a>
              </span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">₹200/-</div>
              </div>
            </div>
          ))}
          <a className="btn" href="#">
            Checkout now
          </a>
        </div>
      </header>
    </>
  );
};

export default Nav;
