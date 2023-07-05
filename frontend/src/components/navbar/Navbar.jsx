import "./Navbar.scss";
import React, { useContext } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../store/authContext";
const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">let,s come together</span>
      <div className="user">
        <img src={currentUser?.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
