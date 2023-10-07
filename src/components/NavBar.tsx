import { Link } from "react-router-dom";
import logo from "../images/logo.png.webp";
import RButton from "./RButton";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FITNESS" />
          </Link>
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
            <ul className="navbar-nav ms-auto me-5 my-3 mb-lg-0">
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  aria-current="page"
                  to="/"
                  style={{ fontSize: "20px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  style={{ fontSize: "20px" }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  style={{ fontSize: "20px" }}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  style={{ fontSize: "20px" }}
                  to="/schedule"
                >
                  Schedule
                </Link>
              </li>
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  style={{ fontSize: "20px" }}
                  to="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  style={{ fontSize: "20px" }}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item align-self-center mx-4">
                <Link
                  className="nav-link text-white navLink"
                  style={{ fontSize: "20px" }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <RButton name="BECOME A MEMBER" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
