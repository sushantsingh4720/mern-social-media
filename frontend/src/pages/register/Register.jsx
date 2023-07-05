import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import profileImage from "../../images/Profile.png";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const photoURL = e.target[2].files[0];
    const password = e.target[3].value;

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, photoURL).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            setError(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Register</h1>
          <form onSubmit={onSubmitHandler}>
            <input required type="text" name="displayName" placeholder="Name" />
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <div className="registerImage">
              <img src={profileImage} alt="Avatar Preview" />
              <input type="file" name="photoURL" accept="image/*" required />
            </div>
            {/* <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={avatarPreview} alt="" />
              <span>Add an avatar</span>
            </label> */}
            <input
              required
              type="password"
              name="password"
              placeholder="Password"
            />
            <button disabled={loading} type="submit">
              {!loading ? "Register" : "please wait..."}
            </button>
            {loading && "Uploading and compressing the image please wait..."}
            {error && <span>display error message</span>}
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
