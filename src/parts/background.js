import React, { useEffect } from "react";
import "./background.css";

export default function Header() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let stars = document.getElementById("stars");
      let moon = document.getElementById("moon");
      let cloud = document.getElementById("cloud");
      let ocean = document.getElementById("ocean");
      let value = window.scrollY;
      stars.style.left = value * -0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      cloud.style.left = value * 0.25 + "px";
      ocean.style.top = value * 0 + "px";
    });
  });
  return (
    <div>
      <section>
        <img src="image/stars2.png" alt="stars" id="stars"></img>
        <img src="image/moon2.png" alt="moon" id="moon"></img>
        <img src="image/cloud.png" alt="cloud" id="cloud"></img>
        <img src="image/ocean.png" alt="ocean" id="ocean"></img>
      </section>
      {/* <div className="sec" id="sec">
        <h2>Parallax Scrolling Effects</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
          asperiores beatae eos voluptatem odio a voluptate, ipsam sunt
          quibusdam sint placeat quod cumque nostrum consectetur ullam pariatur
          rem. Expedita?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
          asperiores beatae eos voluptatem odio a voluptate, ipsam sunt
          quibusdam sint placeat quod cumque nostrum consectetur ullam pariatur
          rem. Expedita?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
          asperiores beatae eos voluptatem odio a voluptate, ipsam sunt
          quibusdam sint placeat quod cumque nostrum consectetur ullam pariatur
          rem. Expedita?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, minima
          obcaecati facilis aut maxime, totam aliquam magnam cumque numquam
          ducimus, tenetur minus facere quasi nisi at error quas doloribus
          excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium sequi iure deleniti eligendi id eaque ipsum ex minima hic,
          sed cupiditate adipisci excepturi aut unde cumque sunt amet atque sit?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere
          asperiores beatae eos voluptatem odio a voluptate, ipsam sunt
          quibusdam sint placeat quod cumque nostrum consectetur ullam pariatur
          rem. Expedita?
        </p>
      </div> */}
    </div>
  );
}
