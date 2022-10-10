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
        Logo
      </Link>
      <nav>
        <ul>
          <li
            className="header-list active"
            onClick={(event) => {
              activeNavHeader(event);
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="header-list"
            onClick={(event) => {
              activeNavHeader(event);
            }}
          >
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li
            className="header-list"
            onClick={(event) => {
              activeNavHeader(event);
            }}
          >
            <Link to="/contact">Contact</Link>
          </li>
          <li
            className="header-list"
            onClick={(event) => {
              activeNavHeader(event);
            }}
          >
            <Link to="/cv">CV</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
