import "./footer.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

export default function Footer(props) {
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
    window.addEventListener("popstate", function (event) {
      // The URL changed...
      initNavFooter();
    });
    // Initalize left position of Indicator
    initNavFooter();
  });
  // Footer nav initialize
  function initNavFooter() {
    let pathPrevious = "Home";
    if (window.location.pathname !== "/") {
      pathPrevious =
        window.location.pathname[1].toUpperCase() +
        window.location.pathname.substring(2);
    }
    const pathList = document.querySelectorAll(".text");
    pathList.forEach((item) => {
      if (item.innerText === pathPrevious) {
        const list = document.querySelectorAll(".footer-list");
        const indicator = document.querySelector(".indicator");
        const target = item.parentNode;
        const translate_value =
          target.parentNode.offsetLeft - target.parentNode.offsetWidth;
        list.forEach((item) => item.classList.remove("active"));
        target.classList.add("active");
        indicator.style.left = translate_value + "px";
      }
    });
  }
  // Indicator move when CLICK event happened
  function activeNavFooter(event) {
    const list = document.querySelectorAll(".footer-list");
    const indicator = document.querySelector(".indicator");
    const target = event.currentTarget;
    const translate_value =
      target.parentNode.offsetLeft - target.parentNode.offsetWidth;
    list.forEach((item) => item.classList.remove("active"));
    target.classList.add("active");
    indicator.style.left = translate_value + "px";
  }
  return (
    <footer className="navigation">
      <ul>
        <li>
          <Link
            to="/"
            className="footer-list active"
            onClick={(event) => {
              activeNavFooter(event);
              props.onChangeMode("Home");
            }}
          >
            <span className="icon">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="footer-list"
            onClick={(event) => {
              activeNavFooter(event);
              props.onChangeMode("Portfolio");
            }}
          >
            <span className="icon">
              <ion-icon name="grid-outline"></ion-icon>
            </span>
            <span className="text">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="footer-list"
            onClick={(event) => {
              activeNavFooter(event);
              props.onChangeMode("Contact");
            }}
          >
            <span className="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className="text">Contact</span>
          </Link>
        </li>
        <li>
          <Link
            to="/cv"
            className="footer-list"
            onClick={(event) => {
              activeNavFooter(event);
              props.onChangeMode("Cv");
            }}
          >
            <span className="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span className="text">CV</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </footer>
  );
}
