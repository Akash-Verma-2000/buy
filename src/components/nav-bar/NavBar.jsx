// Import CSS files and other necessary dependencies
import "./NavBar.css";
import "../../index.css";
import LogoImage from "../../images/LogoImage.jpg";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Button from "../button/Button";

// Functional component for the navigation bar
export default function NavBar() {
  // Use the useNavigate hook from react-router-dom
  const navigate = useNavigate();

  // Use the useUserContext hook to access user-related context
  const { logoutUser, isLoggedIn } = useUserContext();

  // Async function to handle user logout
  async function handleLogOut() {
    // Call the logoutUser function
    await logoutUser();
    // Navigate to the home page ("/") after logout
    navigate("/");
  }

  return (
    <>
      {/* Navigation bar with Bootstrap styling */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img id="logo-img" src={LogoImage} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/"
                >
                  <i className="bi bi-house-door"></i> Home
                </NavLink>
              </li>

              {isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/cart"
                  >
                    Cart
                  </NavLink>
                </li>
              ) : null}

              {isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/cart"
                  >
                    <Button
                      text={"Logout"}
                      fn={handleLogOut}
                      color={"danger"}
                    />
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-primary fs-5"
                    aria-current="page"
                    to="/login"
                  >
                    <Button text={"Login"} fn={logoutUser} color={"success"} />
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
