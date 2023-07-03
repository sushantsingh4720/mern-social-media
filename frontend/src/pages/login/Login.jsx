import "./Login.scss";
const Login = () => {
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
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
