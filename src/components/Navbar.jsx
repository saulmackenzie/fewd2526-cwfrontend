import { NavLink, Link } from "react-router-dom";

import { useAuthState } from "../states/authState";

export default function Navbar() {
  const { user, isAuthenticated } = useAuthState();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-semibold" to="/">Family Events App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/about">About Us</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{user?.username || "Account"}</a>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                {isAuthenticated && (<li><NavLink className="dropdown-item" to="/catalogue">My Event Catalogue</NavLink></li>)} 
                <li><NavLink className={({isActive}) => "dropdown-item" + (isActive ? " active": "")} to="/account">{isAuthenticated ? (
                  <span className="text-danger">Logout</span>
                ) : (
                  <span>Login / Register</span>
                )}</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}