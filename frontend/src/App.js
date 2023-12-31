import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from "react";
import { AuthContext } from "./store/authContext";
import Loader from "../src/components/loader/Loader";
function App() {
  const { currentUser, loading } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (loading === false) {
      if (!currentUser) return <Navigate to="/login" />;
      return children;
    }
    return <Loader />;
  };
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
