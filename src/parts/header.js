import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
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
