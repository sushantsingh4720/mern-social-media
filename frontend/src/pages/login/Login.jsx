import { useContext, useEffect, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../store/authContext";

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    return () => {
      if (currentUser) navigate("/");
    };
  }, [currentUser, navigate]);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>It's Your World.</h1>

          <p>
            The world is a beautiful place for about 7 billion people. All the
            people are fortunate to have access to resources and a place where
            they can live peacefully. Our world is filled with amazing people
            who can speak different languages, live in different places, and
            follow different traditions
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={onSubmitHandler}>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />

            <button disabled={isLoading} type="submit">
              {!isLoading ? "Login" : "please wait..."}
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
