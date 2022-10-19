import React, { useEffect } from "react";
import "./background.css";

export default function Header(props) {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let stars = document.getElementById("stars");
      let moon = document.getElementById("moon");
      let cloud = document.getElementById("cloud");
      let btn = document.getElementById("btn");
      let ocean = document.getElementById("ocean");
      let value = window.scrollY;
      stars.style.left = value * -0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      cloud.style.left = value * 0.25 + "px";
      if (btn !== null) {
        btn.style.marginTop = value * 1.5 + "px";
      }
      ocean.style.top = value * 0 + "px";
    });
  });
  const button = [];
  if (props.path === "Home") {
    button.push(
      <a key={"btn"} href="#home" id="btn">
        Explore
      </a>
    );
  }
  return (
    <div>
      <section className="img-section">
        <img src="image/stars2.png" alt="stars" id="stars"></img>
        <img src="image/moon2.png" alt="moon" id="moon"></img>
        {button}
        <img src="image/cloud.png" alt="cloud" id="cloud"></img>

        <img src="image/ocean.png" alt="ocean" id="ocean"></img>
      </section>
      <div className="background-padding"></div>
    </div>
  );
}
