import "./Navbar.scss";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">let,s come together</span>
      <div className="user">
        <img
          src="https://res.cloudinary.com/dol4aj9y4/image/upload/v1688320044/userAvatar/dnerl8jlx79xrnepqiu9.jpg"
          alt=""
        />
        <span>sushant</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
