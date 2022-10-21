import "./portfolio.css";
import Project from "../parts/project";

export default function Portfolio() {
  return (
    <main className="portfolio content-t">
      <div className="portfolio-container">
        <Project
          link="https://github.com/MoonsungJeong/portfolio_v2"
          category="Web"
          imgPath="image/website2.png"
          title="Portfolio 2 (SPA)"
          brief="React"
        ></Project>
        <Project
          link="https://github.com/MoonsungJeong/Avocard"
          category="Web"
          imgPath="image/avocard.png"
          title="Avocard"
          brief="SPA, Node, PWA, Storage"
        ></Project>
        <Project
          link="https://github.com/MoonsungJeong/bookboard"
          category="Web"
          imgPath="image/Book.png"
          title="Book Board"
          brief="Node, Bootstrap, MVC"
        ></Project>
        <Project
          link="https://github.com/MoonsungJeong/Node_webboard"
          category="Web"
          imgPath="image/webboard.png"
          title="Web Board"
          brief="Node, MySql, Gmail API"
        ></Project>
        <Project
          link="https://github.com/MoonsungJeong/portfolio_v1"
          category="Web"
          imgPath="image/website.png"
          title="Portfolio 1 (SPA)"
          brief="HTML, CSS, JS + WebPack"
        ></Project>
        <Project
          link="https://github.com/MoonsungJeong/worm_v2"
          category="Game"
          imgPath="image/wormgame.png"
          title="Worm Game"
          brief="JavaScript (Canvas)"
        ></Project>
        <Project
          link="https://github.com/MoonsungJeong/kakao_clone"
          category="Web"
          imgPath="image/kakao.png"
          title="Kakao Front-end Clone"
          brief="HTML, CSS"
        ></Project>
      </div>
    </main>
  );
}
