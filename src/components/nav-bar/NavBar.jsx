import "./NavBar.css";
import "../../index.css";
import LogoImage from "../../images/LogoImage.jpg";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    
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
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/orders"
                >
                  My Orders
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/cart"
                >
                  Log Out
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-primary fs-5"
                  aria-current="page"
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
