import "./card.css";
export default function CardSocial() {
  return (
    <div className="card">
      <h2>Social</h2>
      <div className="card-content card-skill-container">
        <a
          href="https://github.com/moonsungjeong"
          target="_blank"
          title="Moonsung Jeong | Github"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://stackoverflow.com/users/14102771"
          target="_blank"
          title="Moonsung Jeong | Stackoverflow"
          rel="noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
        </a>
        <a
          href="https://twitter.com/MS_Jeong"
          target="_blank"
          title="Moonsung Jeong | Twitter"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}
