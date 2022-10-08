import "./footer.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        // or window.addEventListener("scroll"....
        let navigation = document.querySelector(".navigation");
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          // downscroll code
          navigation.style.top = 92 + "vh";
        } else {
          // upscroll code
          navigation.style.top = 78 + "vh";
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
  });
  function activeLink(event) {
    const list = document.querySelectorAll(".list");
    list.forEach((item) => item.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }
  return (
    <div className="navigation">
      <ul>
        <li
          className="list active"
          onClick={(event) => {
            activeLink(event);
          }}
        >
          <Link to="/">
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li
          className="list"
          onClick={(event) => {
            activeLink(event);
          }}
        >
          <Link to="/portfolio">
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">Profile</span>
          </Link>
        </li>
        <li
          className="list"
          onClick={(event) => {
            activeLink(event);
          }}
        >
          <Link to="/contact">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <li
          className="list"
          onClick={(event) => {
            activeLink(event);
          }}
        >
          <Link to="/cv">
            <span className="icon">
              <ion-icon name="chatbubble-outline"></ion-icon>
            </span>
            <span className="text">CV</span>
          </Link>
        </li>
        <li
          className="list"
          onClick={(event) => {
            activeLink(event);
          }}
        >
          <Link to="/">
            <span className="icon">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text">Settings</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
}
