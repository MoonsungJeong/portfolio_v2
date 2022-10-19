import "./header.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Header(props) {
  useEffect(() => {
    window.addEventListener("popstate", function () {
      initNavHeader();
    });
  });
  // header nav initialize
  function initNavHeader() {
    let pathPrevious = "Home";
    if (window.location.pathname !== "/") {
      pathPrevious =
        window.location.pathname[1].toUpperCase() +
        window.location.pathname.substring(2);
    }
    const pathList = document.querySelectorAll(".header-list");
    pathList.forEach((item) => {
      if (item.innerText === pathPrevious) {
        pathList.forEach((element) => {
          element.classList.remove("active");
        });
        item.classList.add("active");
      }
    });
  }
  // Focus change when CLICK event happened
  function activeNavHeader(event) {
    const list = document.querySelectorAll(".header-list");
    const target = event.currentTarget;
    list.forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
  }
  return (
    <header>
      <Link to="/" className="logo">
        Moonsung
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className="header-list active"
              onClick={(event) => {
                activeNavHeader(event);
                props.onChangeMode("Home");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="header-list"
              onClick={(event) => {
                activeNavHeader(event);
                props.onChangeMode("Portfolio");
              }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="header-list"
              onClick={(event) => {
                activeNavHeader(event);
                props.onChangeMode("Contact");
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className="header-list"
              onClick={(event) => {
                activeNavHeader(event);
                props.onChangeMode("Cv");
              }}
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
