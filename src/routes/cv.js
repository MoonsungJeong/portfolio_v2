import "./cv.css";
import Panel from "../parts/panel";

export default function CV() {
  return (
    <main className="cv content-t">
      <div className="cv-container">
        <aside className="cv-side">
          <img src="image/cat.png" alt="profile" className="cv-picture"></img>
          <Panel
            title="Bio"
            content={[
              {
                icon: <i className="far fa-user"></i>,
                desc: "Web developer with a passion for learning and continued development. Interested in full-stack web development and enjoys coding. Hardworking, with a can do attitude and never gives up.",
              },
              {
                icon: <i className="far fa-user"></i>,
                desc: "Web developer",
              },
            ]}
          ></Panel>
        </aside>
        <div className="cv-main"></div>
      </div>
    </main>
  );
}
