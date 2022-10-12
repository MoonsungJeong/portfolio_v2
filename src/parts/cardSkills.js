import "./card.css";
export default function CardSkills() {
  return (
    <div className="card">
      <h2>Skills</h2>
      <div className="card-content card-skill-container">
        <div>
          <img
            className="card-skill-img"
            title="HTML"
            alt="HTML"
            src="image/html.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="CSS"
            alt="CSS"
            src="image/css.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="JavaScript"
            alt="JavaScript"
            src="image/javascript.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="React"
            alt="React"
            src="image/react.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="Node.js"
            alt="Node.js"
            src="image/node.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="MySQL"
            alt="MySQL"
            src="image/database.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="GitHub"
            alt="GitHub"
            src="image/github.png"
          />
        </div>
        <div>
          <img
            className="card-skill-img"
            title="AWS"
            alt="AWS"
            src="image/aws.png"
          />
        </div>
      </div>
    </div>
  );
}
