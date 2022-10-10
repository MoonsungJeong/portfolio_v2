import "./footer.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Add Scroll event
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
    // Initalize left position of Indicator
    const list = document.querySelector(".footer-list");
    const indicator = document.querySelector(".indicator");
    indicator.style.left = list.offsetLeft - list.offsetWidth / 2 - 2 + "px";
  });

  // Indicator move when CLICK event happened
  function activeNavFooter(event) {
    const list = document.querySelectorAll(".footer-list");
    const indicator = document.querySelector(".indicator");
    const target = event.currentTarget;
    const translate_value = target.offsetLeft - target.offsetWidth / 2 - 2;
    list.forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
    //indicator.style.transform = "translateX(" + translate_value + "px)";
    indicator.style.left = translate_value + "px";
  }
  return (
    <footer className="navigation">
      <ul>
        <li
          className="footer-list active"
          onClick={(event) => {
            activeNavFooter(event);
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
          className="footer-list"
          onClick={(event) => {
            activeNavFooter(event);
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
          className="footer-list"
          onClick={(event) => {
            activeNavFooter(event);
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
          className="footer-list"
          onClick={(event) => {
            activeNavFooter(event);
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
          className="footer-list"
          onClick={(event) => {
            activeNavFooter(event);
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
    </footer>
  );
}
