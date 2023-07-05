import { useState } from "react";

import "./Register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Enter your email" />
            <div className="registerImage">
              <img src={avatarPreview} alt="Avatar Preview" />
              <input type="file" name="avatar" accept="image/*" />
            </div>
            {/* <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={avatarPreview} alt="" />
              <span>Add an avatar</span>
            </label> */}
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
        <div className="right">
          <h1>let's come together</h1>
          <p>
            "United in Purpose, Stronger as One" "Join hands, hearts, and minds
            for a brighter future" "Together, we can achieve greatness"
            "Building bridges, fostering unity, and embracing diversity"
            "Collective efforts for a better tomorrow" "Strength lies in our
            unity, let's stand together" "Inspiring collaboration, sparking
            positive change"
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
